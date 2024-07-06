import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const LanguageScreen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
      source={require('../../assets/img/Logo.png')}
      style={styles.logo}
      resizeMode="contain"/>
    </View>
    
    <View style={styles.curvedRectangle}>
         <View style={styles.buttonContainer}>
            <Text style={{
              fontSize:20,
              color:'#FFFFFF',
              marginTop:10,
              marginBottom:10,
            }}>Select Your language</Text>

               <TouchableOpacity style={styles.button} onPress={()=> alert('Button 1 pressed')}>
                <Text style={styles.buttonText}>English</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.button} onPress={()=> alert('Button 2 pressed')}>
                <Text style={styles.buttonText}>Sinhala</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.button} onPress={()=> alert('Button 3 pressed')}>
                <Text style={styles.buttonText}>Tamil</Text>
               </TouchableOpacity>
         </View>
    </View>
  </View>
  )
}

const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'flex-end',
    },
  
    logoContainer:{
      position:'absolute',
      bottom:300,
      width:'100%',
      alignItems:'center',
    },
  
    logo:{
      height:450,
      width:350,
      marginLeft:60,
      marginBottom:5,
    },
  
    buttonContainer: {
      position: 'absolute', 
      width: '100%',
      alignItems: 'center',
    },
  
    button: {
      backgroundColor: '#08C1CD', 
      width:220,
      height:40,
      paddingHorizontal: 20,
      marginVertical: 10,
      marginBottom:20, 
      marginTop:20,
      borderRadius: 10,
      alignItems: 'center',
    },
    
    buttonText: {
      color: '#fff', // Button text color
      fontSize: 24,
      textAlignVertical:'center',
    },
  
    curvedRectangle:{
      width:'100%',
      height:319,
      backgroundColor:'#002C54',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    }
  })

export default LanguageScreen

