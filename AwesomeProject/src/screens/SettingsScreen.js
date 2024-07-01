import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SettingsScreen({navigation} ) {
  return (
    <View styles={{flex:1,alignItems:'center', justifyContent:'center'}}>
      <Text
      onPress={() => navigation.navigate('Home')}
      styles={{fontSize:26 ,fontWeight:'bold'}}
      >Settings Screen</Text> 
    </View>
  );
}

