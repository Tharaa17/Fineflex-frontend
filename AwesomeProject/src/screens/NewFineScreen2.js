import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

const NewFineScreen2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.profileContainer}>
          <Image source={require('../../assets/img/Dprofile.jpg')} style={styles.profileImage} />
          <View style={styles.detailContainer}>
            <Text style={styles.detailText}><Text style={styles.boldText}>Name</Text> : W.P.Sunil Perera</Text>
            <Text style={styles.detailText}><Text style={styles.boldText}>Age</Text> : 35</Text>
            <Text style={styles.detailText}><Text style={styles.boldText}>Address</Text> : No 315/A , Lotus Road, Negombo</Text>
            <Text style={styles.detailText}><Text style={styles.boldText}>Vehicle Number</Text> : WP XA-0808</Text>
            <Text style={styles.detailText}><Text style={styles.boldText}>License Expire Date</Text> : 2026/10/12</Text>
            <Text style={styles.detailText}><Text style={styles.boldText}>Competent to Drive</Text> : A1, A, B, G1</Text>
          </View>
        </View>
        <View style={styles.historyContainer}>
          <Text style={styles.historyHeader}>History</Text>
          <View style={styles.historyTable}>
            <View style={styles.historyRow}>
              <Text style={styles.historyColumnHeader}>Vehicle Number</Text>
              <Text style={styles.historyColumnHeader}>Date</Text>
              <Text style={styles.historyColumnHeader}>Violation</Text>
              <Text style={styles.historyColumnHeader}>Payment</Text>
            </View>
            <View style={styles.historyRow}>
              <Text style={styles.historyData}>WP XA-0808</Text>
              <Text style={styles.historyData}>05/01/2022</Text>
              <Text style={styles.historyData}>No Carrying D.L</Text>
              <Text style={styles.historyData}>Paid</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('NewFine3')}>
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
    backgroundColor: '#00C6FF',
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

