import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.welcomeContainer}>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeText}>Hello Mahesh,</Text>
            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <Text style={styles.dateText}>Monday, 10 May</Text>
          </View>
          <Image source={require('../../assets/img/Pprofile.jpg')} style={styles.profileImage} />
        </View>
        <Svg height="80" width={width} viewBox={`0 0 ${width} 10`} style={styles.svg}>
          <Path d={`M0,0 Q${width / 2},50 ${width},0 V50 H0 Z`} fill="#fff" />
        </Svg>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('NewFineScreen')}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>New Fine</Text>
            <Image source={require('../../assets/img/newFine.png')} style={styles.cardImage} />
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('FineHistoryScreen')}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Fine History</Text>
            <Image source={require('../../assets/img/fineHistory.png')} style={styles.cardImage} />
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText}>View</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    backgroundColor: '#003366',
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
  },
  welcomeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
  },
  welcomeTextContainer: {
    flex: 1,
  },
  welcomeText: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#fff',
    marginTop: 10,
    fontSize: 24,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 40,
    marginRight: 20,
  },
  svg: {
    position: 'absolute',
    bottom: -20,
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 3,
  },
  card: {
    backgroundColor: '#00C6FF',
    marginVertical: 10,
    padding: 20,
    borderRadius: 15,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardImage: {
    width: 140, // Increased width
    height: 140, // Increased height
    marginRight: 10,
    marginLeft:10,
    marginBottom:-30,
    
  },
  cardText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 10,
    flex: 1, // Allow text to take up remaining space
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 30, // Reduced padding to make the button smaller
    paddingVertical: 5, // Reduced vertical padding as well
    borderRadius: 10, // Adjusted border radius to match smaller button size
    alignSelf: 'flex-start', // Align button to the start
  },
  buttonText: {
    color: '#00C6FF',
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 18,
  },
});

export default HomeScreen;