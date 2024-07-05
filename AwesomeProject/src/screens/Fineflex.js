import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';

const Fineflexpage = (p: any) => {
  const stack=p.navigation;
  useEffect(() => {
    const timer = setTimeout(() => {
        stack.navigate('login')
    }, 3000);
    return () => clearTimeout(timer);
    },[]);
  return (
    <View style={sty.container}>
      
    <Image style={{width:'100%', height:'100%',
    position:'absolute'        
    }} source={
      require('../../asset/img/fineflex2.jpg')
    }/>
    <Text style={{color:'#08c1cd',fontSize:25,fontWeight:'bold',marginTop:230}}>Settle Fines With 
    A Simple Tap</Text>
    
    
  </View>
  )
}


export default Fineflexpage

const sty = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#FDF6F6',alignItems:'center'
    }
  })