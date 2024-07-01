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
          <Image  source={require('../../assets/img/Pprofile.jpg')} style={styles.profileImage} />
        </View>
        <Svg height="80" width={width} viewBox={`0 0 ${width} 10`} style={styles.svg}>
          <Path d={`M0,0 Q${width / 2},50 ${width},0 V50 H0 Z`} fill="#fff" />
        </Svg>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('NewFineScreen')}>
          <Image  style={styles.cardImage} />
          <Text style={styles.cardText}>New Fine</Text>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('FineHistoryScreen')}>
          <Image  style={styles.cardImage} />
          <Text style={styles.cardText}>Fine History</Text>
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
    marginLeft:10,
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
    fontSize:24,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 40,
    marginRight:20,
  },
  svg: {
    position: 'absolute',
    bottom: -20,
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#00C6FF',
    marginVertical: 10,
    padding: 5,
    borderRadius: 15,
    
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'left',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#00C6FF',
    fontWeight: 'bold',
    textAlign:'left',
  },
 
});

export default HomeScreen;