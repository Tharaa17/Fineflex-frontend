import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text style={styles.backButton}>{'<'} </Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileHeader}>
            <Image  style={styles.profileImage} />
            <Text style={styles.userIdText}>User Id</Text>
          </View>
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="user" size={24} color="#00C6FF" />
              <Text style={styles.menuItemText}>User ID</Text>
              <Icon name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="globe" size={24} color="#00C6FF" />
              <Text style={styles.menuItemText}>Language</Text>
              <Icon name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="bar-chart" size={24} color="#00C6FF" />
              <Text style={styles.menuItemText}>Evaluation</Text>
              <Icon name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="file-text" size={24} color="#00C6FF" />
              <Text style={styles.menuItemText}>Terms and Conditions</Text>
              <Icon name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Icon name="sign-out" size={24} color="#00C6FF" />
              <Text style={styles.menuItemText}>Log Out</Text>
              <Icon name="chevron-right" size={24} color="#000" />
            </TouchableOpacity>
          </View>
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
  profileContainer: {
    alignItems: 'center',
    width: '100%',
  },
  profileHeader: {
    backgroundColor: '#003366',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  userIdText: {
    fontSize: 16,
    color: '#fff',
  },
  menuContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
});

export default ProfileScreen;



