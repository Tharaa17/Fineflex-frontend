import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const NewFineScreen3 = ({navigation}) => {
  const [selectedViolations, setSelectedViolations] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const violations = [
    { violation: 'Contravening speed Limits', amount: 3000 },
    { violation: 'Disobeying Road Rules', amount: 2000 },
    { violation: 'Not wearing protective helmets', amount: 1000 },
    { violation: 'Halting or Parking', amount: 1000 },
    { violation: 'Not carrying D.L', amount: 1000 },
  ];

  const handleViolationPress = (violation) => {
    const isSelected = selectedViolations.some(item => item.violation === violation.violation);
    let updatedViolations;

    if (isSelected) {
      updatedViolations = selectedViolations.filter(item => item.violation !== violation.violation);
    } else {
      updatedViolations = [...selectedViolations, violation];
    }

    setSelectedViolations(updatedViolations);
    const total = updatedViolations.reduce((sum, item) => sum + item.amount, 0);
    setTotalAmount(total);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.content}>
          <TextInput
            style={styles.input}
            placeholder="Vehicle Number"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="Police Station"
            placeholderTextColor="#999"
          />
          <View style={styles.violationContainer}>
            <Text style={styles.violationHeader}>Select the Violation</Text>
            <ScrollView style={styles.violationScrollBox}>
              <View style={styles.violationTable}>
                <View style={styles.violationRow}>
                  <Text style={styles.violationColumnHeader}>Violation</Text>
                  <Text style={styles.violationColumnHeader}>Fine Amount</Text>
                </View>
                {violations.map((item, index) => (
                  <TouchableOpacity key={index} onPress={() => handleViolationPress(item)}>
                    <View style={[styles.violationRow, selectedViolations.some(v => v.violation === item.violation) && styles.selectedViolation]}>
                      <Text style={styles.violationData}>{item.violation}</Text>
                      <Text style={styles.violationData}>{item.amount.toFixed(2)}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
          <View style={styles.totalAmountContainer}>
            <Text style={styles.totalAmountText}>Total Fine Amount</Text>
            <TextInput
              style={styles.totalAmountInput}
              value={totalAmount.toFixed(2)}
              placeholder="Amount"
              placeholderTextColor="#999"
              editable={false}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Driver's Phone Number"
            placeholderTextColor="#999"
          />
          <TextInput
            style={styles.input}
            placeholder="Driver's Email"
            placeholderTextColor="#999"
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send The Link</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.historyButton}>
            <Text style={styles.historyButtonText}>View SMS/Email History</Text>
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
    width: '90%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  violationContainer: {
    width: '100%',
    marginBottom: 20,
  },
  violationHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#00C6FF',
    paddingVertical: 10,
    textAlign: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  violationScrollBox: {
    height: 150,
  },
  violationTable: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  violationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedViolation: {
    backgroundColor: '#E0F7FA',
  },
  violationColumnHeader: {
    width: '50%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  violationData: {
    width: '50%',
    textAlign: 'center',
  },
  totalAmountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  totalAmountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalAmountInput: {
    width: '40%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  sendButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#00C6FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#00C6FF',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  historyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NewFineScreen3;
