import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        <View style={styles.profileContainer}>
          <Svg height="200" width={width} viewBox={`0 0 ${width} 80`} style={styles.svg}>
            <Path d={`M0,0 Q${width / 2},50 ${width},0 V80 H0 Z`} fill="#fff" />
          </Svg>
          <View style={styles.profileContent}>
            <Image source={require('../../assets/img/Pprofile.jpg')} style={styles.profileImage} />
            <Text style={styles.profileText}>User Id</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.sectionItem}>
          <Icon name="user" size={24} color="#00C6FF" />
          <Text style={styles.sectionItemText}>User ID</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Icon name="globe" size={24} color="#00C6FF" />
          <Text style={styles.sectionItemText}>Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Icon name="line-chart" size={24} color="#00C6FF" />
          <Text style={styles.sectionItemText}>Evaluation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Icon name="file-text" size={24} color="#00C6FF" />
          <Text style={styles.sectionItemText}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Icon name="sign-out" size={24} color="#00C6FF" />
          <Text style={styles.sectionItemText}>Log Out</Text>
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
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#000',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 0,
    position: 'relative',
    height:200,
    backgroundColor:'#003366',
  },
  svg: {
    position: 'absolute',
    top: 80,
  },
  profileContent: {
    alignItems: 'center',
    marginTop: 40, 
  },
  profileImage: {
    paddingTop:10,
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: -20, // Adjust to position the image within the curve
  },
  profileText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
  sectionItemText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 10,
  },
});

export default ProfileScreen;
