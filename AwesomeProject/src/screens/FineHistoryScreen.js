import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

const FineHistoryScreen = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const handleDateConfirm = (date) => {
    const formattedDate = moment(date).format('YYYY/MM/DD');
    setSelectedDate(formattedDate);
    setShowCalendar(true);
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.content}>
          <Text style={styles.todayText}>Today</Text>
          <View style={styles.progressContainer}>
            <AnimatedCircularProgress
              size={200}
              width={20}
              fill={30} // Fill percentage
              tintColor="#08C1CD"
              backgroundColor="#e0e0e0"
            >
              {fill => (
                <View style={styles.circleContent}>
                  <Text style={styles.progressText}>{`${fill}%`}</Text>
                  <Text style={styles.progressSubText}>3/10</Text>
                </View>
              )}
            </AnimatedCircularProgress>
            <Text style={styles.legendText}>
              <Text style={styles.legendDot}>•</Text> Number of cases taken today
            </Text>
          </View>
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={styles.tableHeaderText}>Vehicle Number</Text>
              <Text style={styles.tableHeaderText}>Licence Number</Text>
              <Text style={styles.tableHeaderText}>Violation</Text>
              <Text style={styles.tableHeaderText}>Payment</Text>
            </View>
            {[
              { vehicle: 'WP XA-0808', licence: 'B 4425013', violation: 'No Carrying D.L', payment: 'Paid', color: '#C6F6FF' },
              { vehicle: 'WP LP-4674', licence: 'B 4756892', violation: 'Contravening Speed Limits', payment: 'UnPaid', color: '#FFCCCC' },
              { vehicle: 'WP KS-9597', licence: 'B 4685924', violation: 'No Carrying D.L', payment: 'Paid', color: '#C6F6FF' },
            ].map((item, index) => (
              <View key={index} style={[styles.tableRow, { backgroundColor: item.color }]}>
                <Text style={styles.tableData}>{item.vehicle}</Text>
                <Text style={styles.tableData}>{item.licence}</Text>
                <Text style={styles.tableData}>{item.violation}</Text>
                <Text style={styles.tableData}>{item.payment}</Text>
              </View>
            ))}
          </View>
          <View style={styles.dateInputContainer}>
            <Text style={styles.dateLabel}>Date :</Text>
            <TouchableOpacity onPress={showDatePicker}>
              <TextInput
                style={styles.dateInput}
                placeholder="YYYY/MM/DD"
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
          {showCalendar && (
            <View style={styles.calendarContainer}>
              <Text style={styles.calendarHeader}>January 2024</Text>
              <View style={styles.calendar}>
                {/* Placeholder for calendar component */}
                <Text style={styles.calendarText}>Calendar Component</Text>
              </View>
              <View style={styles.tableContainer}>
                <View style={styles.tableHeader}>
                  <Text style={styles.tableHeaderText}>Vehicle Number</Text>
                  <Text style={styles.tableHeaderText}>Licence Number</Text>
                  <Text style={styles.tableHeaderText}>Violation</Text>
                  <Text style={styles.tableHeaderText}>Payment</Text>
                </View>
                {[
                  { vehicle: 'WP HZ-1781', licence: 'B 7852692', violation: 'No Carrying D.L', payment: 'Paid', color: '#C6F6FF' },
                  { vehicle: 'WP ND-4957', licence: 'B 3567421', violation: 'Halting And Parking', payment: 'Overdue', color: '#FFCCCC' },
                  { vehicle: 'WP CAP-5896', licence: 'B 2549831', violation: 'Non-Compliance With Traffic Signals', payment: 'Paid', color: '#C6F6FF' },
                ].map((item, index) => (
                  <View key={index} style={[styles.tableRow, { backgroundColor: item.color }]}>
                    <Text style={styles.tableData}>{item.vehicle}</Text>
                    <Text style={styles.tableData}>{item.licence}</Text>
                    <Text style={styles.tableData}>{item.violation}</Text>
                    <Text style={styles.tableData}>{item.payment}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  backButton: {
    fontSize: 30,
    color: '#000',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  content: {
    width: '90%',
    alignItems: 'center',
  },
  todayText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  progressContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  circleContent: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  progressSubText: {
    fontSize: 16,
    color: '#00C6FF',
    position: 'absolute',
    bottom: -20,
  },
  legendText: {
    fontSize: 14,
    color: '#000',
    marginTop: 10,
  },
  legendDot: {
    color: '#00C6FF',
  },
  tableContainer: {
    
    width: '100%',
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
  },
  tableHeaderText: {
    fontWeight: 'bold',
    width: '25%',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderRadius: 10,
    marginTop:1,
    marginBottom:1,
  },
  tableData: {
    width: '25%',
    textAlign: 'center',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  dateLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateInput: {
    width: 150,
    height: 40,
    borderColor: '#08C1CD',
    borderWidth: 5,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  calendarContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  calendarHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  calendar: {
    width: '100%',
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  calendarText: {
    fontSize: 16,
  },
});

export default FineHistoryScreen;