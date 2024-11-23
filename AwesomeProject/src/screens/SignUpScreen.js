import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useState } from 'react';

const SignUpScreen = ({ navigation }) => {

  const [policeId, setPoliceId] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [policeStationId, setPoliceStationId] = useState('');

  const handleSignUp = async () => {
    const requestData = {
      police_id: policeId,
      name,
      mobile_number: phoneNumber,
      email,
      password,
      police_station_id: policeStationId,
      password_confirmation: password,
    };

    console.log('Request Data:', requestData); 

    console.log(JSON.stringify(requestData))

    try {
      const response = await fetch('http://10.0.2.2:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });


      if (response.ok) {
        const responseData = await response.json();
        alert('Sign Up Successful!');
        navigation.navigate('LoginScreen'); // Navigate to login screen
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
      console.log(error.message)
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>{'<'} </Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <Image
          source={require('../../assets/img/SignUp.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Police ID"
          placeholderTextColor="#999"
          onChangeText={(text) => setPoliceId(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#999"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#999"
          onChangeText={(text) => setPhoneNumber(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Police Station ID"
          placeholderTextColor="#999"
          onChangeText={(text) => setPoliceStationId(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Request Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.signInText}>
          Already have an account?{' '}
          <Text style={styles.signInLink} onPress={() => navigation.navigate('LoginScreen')}>
            Log In
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  backButton: {
    fontSize: 30,
    color: '#000',
    margin: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  image: {
    marginTop: -40,
    width: '70%',
    height: '30%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#08C1CD',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signInText: {
    fontSize: 16,
    color: '#000',
  },
  signInLink: {
    color: '#08C1CD',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;