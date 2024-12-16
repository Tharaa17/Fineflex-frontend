import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { useUser } from './utils/UserContext'; 

const FineHistoryScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [fines, setFines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useUser(); 

  const [casesTakenToday, setCasesTakenToday] = useState(0); // Track the number of cases
  const [targetCases, setTargetCases] = useState(10); // Target number of cases for today

  const policeId = user.id; // Replace with the actual logged-in police ID.


  const fetchFines = async () => {
    setLoading(true);
    setError('');
    setFines([]); // Clear previous fines data before fetching new data
    try {
      const response = await fetch('http://10.0.2.2:8000/api/fines/filter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          police_id: policeId,
          start_date: selectedDate,
          end_date: selectedDate, // Assuming same-day filtering
        }),
      });
  
      if (response.ok) {
        const data = await response.json();
        setFines(data.data);
  
        // Update cases taken today if the selected date is today
        if (moment().isSame(selectedDate, 'day')) {
          setCasesTakenToday(data.data.length);
        }
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to retrieve fines.');
      }
    } catch (err) {
      setError('An error occurred: ' + err.message);
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    if (selectedDate) {
      fetchFines();
    }
  }, [selectedDate]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    setSelectedDate(formattedDate);
    hideDatePicker();
  };

  const calculateProgress = () => {
    return Math.min((casesTakenToday / targetCases) * 100, 100); // Progress capped at 100%
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          {/* Circular Progress Section */}
          <Text style={styles.todayText}>Today</Text>
          <View style={styles.progressContainer}>
            <AnimatedCircularProgress
              size={200}
              width={20}
              fill={calculateProgress()} // Calculate progress dynamically
              tintColor="#08C1CD"
              backgroundColor="#e0e0e0"
            >
              {fill => (
                <View style={styles.circleContent}>
                  <Text style={styles.progressText}>{`${Math.round(fill)}%`}</Text>
                  <Text style={styles.progressSubText}>
                    {`${casesTakenToday}/${targetCases}`}
                  </Text>
                </View>
              )}
            </AnimatedCircularProgress>
            <Text style={styles.legendText}>
              <Text style={styles.legendDot}>•</Text> Number of cases taken today
            </Text>
          </View>

          {/* Date Picker */}
          <View style={styles.dateInputContainer}>
            <Text style={styles.dateLabel}>Date :</Text>
            <TouchableOpacity onPress={showDatePicker}>
              <TextInput
                style={styles.dateInput}
                placeholder="YYYY-MM-DD"
                value={selectedDate}
                editable={false}
              />
            </TouchableOpacity>
          </View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDateConfirm}
            onCancel={hideDatePicker}
          />

          {/* Loading/Error Message */}
          {loading && <Text>Loading fines...</Text>}
          {error && <Text style={{ color: 'red' }}>{error}</Text>}

          {/* Fines Table */}
          {!loading && fines.length > 0 && (
            <View style={styles.tableContainer}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Vehicle Number</Text>
                <Text style={styles.tableHeaderText}>License Number</Text>
                <Text style={styles.tableHeaderText}>Violation</Text>
                <Text style={styles.tableHeaderText}>Payment</Text>
              </View>
              {fines.map((fine, index) => (
                <View
                  key={index}
                  style={[
                    styles.tableRow,
                    { backgroundColor: fine.payment_status === 'Paid' ? '#C6F6FF' : '#FFCCCC' },
                  ]}
                >
                  <Text style={styles.tableData}>{fine.vehicle_number}</Text>
                  <Text style={styles.tableData}>{fine.license_number}</Text>
                  <Text style={styles.tableData}>{fine.violation}</Text>
                  <Text style={styles.tableData}>{fine.payment_status}</Text>
                </View>
              ))}
            </View>
          )}

          {/* No Fines Message */}
          {!loading && fines.length === 0 && !error && <Text>No fines found for the selected date.</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { flexGrow: 1, alignItems: 'center', paddingBottom: 20 },
  content: { width: '90%', alignItems: 'center' },
  todayText: { fontSize: 18, fontWeight: 'bold', alignSelf: 'flex-start', marginVertical: 10 },
  progressContainer: { width: '100%', alignItems: 'center', marginBottom: 20 },
  circleContent: { position: 'absolute', justifyContent: 'center', alignItems: 'center' },
  progressText: { fontSize: 24, fontWeight: 'bold' },
  progressSubText: { fontSize: 16, color: '#00C6FF', position: 'absolute', bottom: -20 },
  legendText: { fontSize: 14, color: '#000', marginTop: 10 },
  legendDot: { color: '#00C6FF' },
  dateInputContainer: { flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 20 },
  dateLabel: { fontSize: 16, fontWeight: 'bold' },
  dateInput: { width: 150, height: 40, borderColor: '#08C1CD', borderWidth: 1, borderRadius: 5, paddingHorizontal: 10, marginLeft: 10 },
  tableContainer: { width: '100%', marginBottom: 20 },
  tableHeader: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, backgroundColor: '#f0f0f0' },
  tableHeaderText: { fontWeight: 'bold', width: '25%', textAlign: 'center' },
  tableRow: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10 },
  tableData: { width: '25%', textAlign: 'center' },
});

export default FineHistoryScreen;
