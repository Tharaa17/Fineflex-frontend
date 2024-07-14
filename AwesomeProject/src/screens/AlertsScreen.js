import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';

const alertsData = {
  today: [
    { name: 'Lahiru Gunasekara', amount: '5000', time: '9:01am', status: 'Received', avatar: require('../../assets/img/avatar1.jpg') },
    { name: 'Lahiru Gunasekara', amount: '5000', time: '9:01am', status: 'Received', avatar: require('../../assets/img/avatar2.jpg') },
    { name: 'Lahiru Gunasekara', amount: '5000', time: '9:01am', status: 'Received', avatar: require('../../assets/img/avatar1.jpg') },
  ],
  yesterday: [
    { name: 'Malani Rathnayake', amount: '5000', time: '9:01am', status: 'Received', avatar: require('../../assets/img/avatar3.jpg') },
    { name: 'Sanath Gunarathna', amount: '3000', time: '9:01am', status: 'Overdue', avatar: require('../../assets/img/avatar4.jpg') },
  ],
  thisWeek: [
    { name: 'Lahiru Gunasekara', amount: '5000', time: '9:01am', status: 'Received', avatar: require('../../assets/img/avatar1.jpg') },
  ],
};

const AlertItem = ({ name, amount, time, status, avatar }) => (
  <View style={styles.alertItem}>
    <Image source={avatar} style={styles.avatar} />
    <View style={styles.alertTextContainer}>
      <Text style={styles.alertText}>
        {status === 'Received' ? 'Received a payment of' : "Sanath Gunarathna's payment of"}{' '}
        RS.{amount} {status === 'Received' ? `from ${name}.` : 'is overdue'}
      </Text>
      <Text style={styles.alertTime}>{time}</Text>
    </View>
    <View style={[styles.statusIndicator, { backgroundColor: status === 'Received' ? '#08C1CD' : '#FFCCCC' }]} />
  </View>
);

export default function AlertsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Today</Text>
          {alertsData.today.map((alert, index) => (
            <AlertItem key={index} {...alert} />
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Yesterday</Text>
          {alertsData.yesterday.map((alert, index) => (
            <AlertItem key={index} {...alert} />
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>This week</Text>
          {alertsData.thisWeek.map((alert, index) => (
            <AlertItem key={index} {...alert} />
          ))}
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
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  alertTextContainer: {
    flex: 1,
  },
  alertText: {
    fontSize: 16,
    color: '#000',
  },
  alertTime: {
    fontSize: 14,
    color: '#999',
  },
  statusIndicator: {
    width: 5,
    height: '100%',
    borderRadius: 5,
  },
});