import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const NewFineScreen4 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.content}>
          <Text style={styles.detailText}><Text style={styles.boldText}>Vehicle Number</Text> : WP XA-0808</Text>
          <Text style={styles.detailText}><Text style={styles.boldText}>Date</Text> : 2024/05/07</Text>
          <Text style={styles.detailText}><Text style={styles.boldText}>Time</Text> : 10.15 a.m</Text>
          <Text style={styles.detailText}><Text style={styles.boldText}>SMS/Email Status</Text> : Sent</Text>
          <TextInput
            style={styles.input}
            placeholder="New Email/Phone Number"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.resendButton}>
            <Text style={styles.resendButtonText}>Resend</Text>
          </TouchableOpacity>
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
    marginTop:20,
    width: '90%',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 15,
  },
  boldText: {
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop:30,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  resendButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#00C6FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  resendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewFineScreen4;

