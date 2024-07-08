import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const NewFineScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.content}>
        <Text style={styles.label}>Licence Number</Text>
        <TextInput
          style={styles.input}
          placeholder="EX: B 4425013"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.searchButton} onPress={() => navigation.navigate('NewFine2')}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
        <Image source={require('../../assets/img/newFineSrc.jpg')}    style={styles.image} />
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
    backgroundColor: '#00C6FF',
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

