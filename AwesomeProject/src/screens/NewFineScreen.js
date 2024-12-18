import React , { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView ,Alert,} from 'react-native';

const NewFineScreen = ({ navigation }) => {
  const [licenseNumber, setLicenseNumber] = useState('');
  const handleSearch = async () => {
    if (!licenseNumber) {
      Alert.alert('Error', 'Please enter a license number');
      return;
    }
  
    try {
      const response = await fetch('http://10.0.2.2:8000/api/driver/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ licence_number: licenseNumber }),
      });
  
      if (response.ok) {
        const data = await response.json();
        Alert.alert('Success', 'Driver details retrieved successfully.');
  
        // Navigate to the next screen and pass driver_id along with other data
        navigation.navigate('NewFine2', { driverData: { ...data.data, driver_id: data.data.id } });
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.message || 'Failed to retrieve driver details.');
      }
    } catch (error) {
      Alert.alert('Error', `An error occurred: ${error.message}`);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>License Number</Text>
        <TextInput
          style={styles.input}
          placeholder="EX: B 4425013"
          placeholderTextColor="#999"
          value={licenseNumber}
          onChangeText={setLicenseNumber}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
        <Image source={require('../../assets/img/newFineSrc.jpg')} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
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
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  label: {
    marginTop:50,
    fontSize: 24,
    color: '#000',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  searchButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#08C1CD',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '90%',
    height: 300,
    resizeMode: 'contain',
  },
});

export default NewFineScreen;

