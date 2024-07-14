import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignUpScreen');
    }, 3000); // 3 seconds delay
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/FineFlex.png')}
        style={styles.logo}
        resizeMode="cover"
        
      />
      <Text style={styles.tagline}>Settle Fines With A Simple Tap</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width:'100%',
    height:'100%',
    position:'absolute',
    
  },
  tagline: {
    fontSize: 25,
    color: '#08C1CD',
    marginBottom: 300,
    fontWeight:'bold',
  },
});

export default SplashScreen;
