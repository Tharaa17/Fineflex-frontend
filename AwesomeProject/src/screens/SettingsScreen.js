import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Switch } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SettingsScreen = ({ navigation }) => {
  const [isNotificationEnabled, setNotificationEnabled] = useState(false);
  const [isUpdatesEnabled, setUpdatesEnabled] = useState(true);
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="user" size={24} color="#00C6FF" />
            <Text style={styles.sectionHeaderText}>Account</Text>
          </View>
          <TouchableOpacity style={styles.sectionItem} onPress={() => navigation.navigate('EditProfile')}>
            <Text style={styles.sectionItemText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem} onPress={() => navigation.navigate('ChangePassword')}>
            <Text style={styles.sectionItemText}>Change Password</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="bell" size={24} color="#00C6FF" />
            <Text style={styles.sectionHeaderText}>Notification</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.sectionItemText}>Notification</Text>
            <Switch
              value={isNotificationEnabled}
              onValueChange={setNotificationEnabled}
              thumbColor={isNotificationEnabled ? "#00C6FF" : "#f4f3f4"}
              trackColor={{ false: "#767577", true: "#00C6FF" }}
            />
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.sectionItemText}>Updates</Text>
            <Switch
              value={isUpdatesEnabled}
              onValueChange={setUpdatesEnabled}
              thumbColor={isUpdatesEnabled ? "#00C6FF" : "#f4f3f4"}
              trackColor={{ false: "#767577", true: "#00C6FF" }}
            />
          </View>
        </View>
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Icon name="cog" size={24} color="#00C6FF" />
            <Text style={styles.sectionHeaderText}>Other</Text>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.sectionItemText}>Dark Mode</Text>
            <Switch
              value={isDarkModeEnabled}
              onValueChange={setDarkModeEnabled}
              thumbColor={isDarkModeEnabled ? "#00C6FF" : "#f4f3f4"}
              trackColor={{ false: "#767577", true: "#00C6FF" }}
            />
          </View>
          <TouchableOpacity style={styles.sectionItem} onPress={() => navigation.navigate('Help')}>
            <Text style={styles.sectionItemText}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem} onPress={() => navigation.navigate('Language')}>
            <Text style={styles.sectionItemText}>Language</Text>
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
    paddingBottom: 20,
  },
  header: {
    marginTop:60,
    marginBottom:60,
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
  },
  sectionHeader: {
    marginTop:10,
    marginBottom:10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  sectionItemText: {
    fontSize: 18,
    color: '#000',
  },
});

export default SettingsScreen;

