import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';

const NewFineScreen2 = ({ navigation, route }) => {
  const { driverData } = route.params; // Receive driver data from the previous screen
  const [fines, setFines] = useState([]); // State to store fines
  const [loading, setLoading] = useState(true); // State for loading indicator

  const driverId = driverData.driver_id; // Extract driver_id from driverData
  console.log(driverId)
  console.log(driverData)
  // Fetch fines using driver_id when the component loads
  useEffect(() => {
    const fetchFines = async () => {
      try {
        const response = await fetch('http://10.0.2.2:8000/api/driver/fines', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ driver_id: driverId }), // Pass driver_id to the backend
        });

        if (response.ok) {
          const data = await response.json();
          setFines(data.data); // Store the fines in state
        } else {
          const errorData = await response.json();
          Alert.alert('Error', errorData.message || 'Failed to retrieve fines.');
        }
      } catch (error) {
        Alert.alert('Error', `An error occurred: ${error.message}`);
      } finally {
        setLoading(false); // Stop the loading indicator
      }
    };

    fetchFines();
  }, [driverId]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/img/Dprofile.jpg')} style={styles.profileImage} />
          <View style={styles.detailContainer}>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Name</Text>: {driverData.name}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Age</Text>: {driverData.age}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Address</Text>: {driverData.address}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>License Expire Date</Text>: {driverData.license_expire_date}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Competent to Drive</Text>: {driverData.competent_to_drive}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Mobile Number</Text>: {driverData.mobile_number}
            </Text>
            <Text style={styles.detailText}>
              <Text style={styles.boldText}>Email</Text>: {driverData.email}
            </Text>
          </View>
        </View>

        <View style={styles.historyContainer}>
          <Text style={styles.historyHeader}>History</Text>
          {loading ? (
            <Text>Loading fines...</Text>
          ) : fines.length > 0 ? (
            <View style={styles.historyTable}>
              <View style={styles.historyRow}>
                <Text style={styles.historyColumnHeader}>Vehicle Number</Text>
                <Text style={styles.historyColumnHeader}>Date</Text>
                <Text style={styles.historyColumnHeader}>Violation</Text>
                <Text style={styles.historyColumnHeader}>Payment</Text>
              </View>
              {fines.map((fine, index) => (
                <View key={index} style={styles.historyRow}>
                  <Text style={styles.historyData}>{fine.vehicle_number || 'N/A'}</Text>
                  <Text style={styles.historyData}>{fine.date || 'N/A'}</Text>
                  <Text style={styles.historyData}>{fine.violation_type_id || 'N/A'}</Text>
                  <Text style={styles.historyData}>{fine.payment_status || 'Unpaid'}</Text>
                </View>
              ))}
            </View>
          ) : (
            <Text>No fines found for this driver.</Text>
          )}
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('NewFine3', { driverId })}
        >
          <Text style={styles.addButtonText}>Add Fine</Text>
        </TouchableOpacity>
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
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 20,
  },
  detailContainer: {
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  detailText: {
    fontSize: 18,
    color: '#000',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  historyContainer: {
    width: '90%',
    alignItems: 'center',
    marginVertical: 20,
  },
  historyHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyTable: {
    width: '100%',
  },
  historyRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  historyColumnHeader: {
    fontWeight: 'bold',
    width: '25%',
    textAlign: 'center',
  },
  historyData: {
    width: '25%',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#08C1CD',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewFineScreen2;
