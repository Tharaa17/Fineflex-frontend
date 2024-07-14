import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'} </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image
          source={require('../../assets/img/Login.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          placeholder="Police ID"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LanguageScreen')}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText} onPress={() => navigation.navigate('SignUpScreen')}>
          Don't have an account? <Text style={styles.signUpLink}>Sign up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
  },
  backButton: {
    fontSize: 30,
    color: '#000',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#08C1CD',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpText: {
    fontSize: 16,
    color: '#000',
  },
  signUpLink: {
    color: '#08C1CD',
  },
});

export default LoginScreen;