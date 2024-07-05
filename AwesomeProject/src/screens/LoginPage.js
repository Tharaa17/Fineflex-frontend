import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';
function LoginFiled(p: any) {
  const stack = p.stack;

  const [PoliceID,setPoliceID] = useState("");
  const [userEmail,setuserEmail] = useState("");
  const [userPhone,setuserPhone] = useState("");
  const [userPassword,setuserPassword] = useState("");

  return(
    <View style={{marginTop:40}}>
      <View style={{backgroundColor:'white',borderRadius:20,
        height:50,marginHorizontal:30,justifyContent:'center',
        paddingLeft:20,borderColor:'black',borderWidth:1
      }}>
        <TextInput placeholder='Police ID' placeholderTextColor={'black'}
        onChangeText={(v)=>setPoliceID(v)} style={{fontSize:20}} />
      </View>

      <View style={{backgroundColor:'white',borderRadius:20,
        height:50,marginHorizontal:30,justifyContent:'center',
        paddingLeft:20,borderColor:'black',marginTop:20,borderWidth:1
      }}>
        <TextInput placeholder='Email/Phone Number' placeholderTextColor={'black'}
        onChangeText={(v)=>setuserEmail(v)} style={{fontSize:20,}} />
      </View>

      <View style={{backgroundColor:'white',borderRadius:20,
        height:50,marginHorizontal:30,justifyContent:'center',
        paddingLeft:20,borderColor:'black',marginTop:20,borderWidth:1
      }}>
        <TextInput placeholder='Password' placeholderTextColor={'black'} secureTextEntry={true}
        onChangeText={(v)=>setuserPassword(v)} style={{fontSize:20,}} />
      </View>
      <LogButton P_ID = {PoliceID} U_email={userEmail}
      U_PW={userPassword}  stack={stack}/> 
    <PageBottom stack={stack}/>
    </View>
  );
}
const LoginPage = (props: any) => {

  const stack = props.navigation;
  return (
    <View style={sty.container}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
      <BackButton stack={stack}/>
      <Image style={{width:'100%', height:'40%',marginTop:40,
    position:'absolute'        
    }} source={
      require('../../asset/img/fineflex3.jpg')
    } resizeMode='center' />
    <Text style={{color:'black',fontSize:25,fontWeight:'bold',marginTop:200,marginLeft:40}}>
      Log In
    </Text>
    <LoginFiled stack={stack}/>
     {/* <LogButton/> 
    <PageBottom stack={stack}/> */}
      </KeyboardAwareScrollView>
  </View>
  )
}
function BackButton(p: any){
  const stack=p.stack;

  function goback(){
    stack.navigate('fineflex')
  }
  return(
    <View style={styles.BackButtonContainer}>
      <TouchableOpacity activeOpacity={0.7} onPress={goback}>
        <Icon size={30} name="chevron-back" type="ionicon" />
      </TouchableOpacity>
    </View>
  );
}
  function LogButton(p:any){
    const stack = p.stack;

    const P_ID=p.P_ID;
    const U_email=p.U_email;
    const U_PW=p.U_PW;
    
    const email = 'abc@gmail.com';
    const ID = 'Asd123';
    const password = '1234';
    const Phone = '0754889959';

    function gotoHome(){
      if (P_ID==ID && (U_email==email || U_email==Phone) && U_PW==password){
        stack.navigate('Home')
      }else{
        Alert.alert('Message','You can not login');
        console.log('You can not login' );
      }
      
    }
    return(
    <View style={styles.containers}>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={gotoHome}>
        <Text style={styles.text}>Log In</Text>
      </TouchableOpacity>
    </View>
       
    );
  }

  function PageBottom(p: any) {
    const stack = p.stack;
    function gotoSignup(){
      stack.navigate('signup')
    }
    return(
      <View style={{flexDirection:'row',marginTop:20}}>
        <View style={{backgroundColor:'#FDF6F6',height:50,flex:3,justifyContent:'center'}}>
          <Text style={{fontSize:15,color:'black',marginLeft:40,fontWeight:'500'}}>
            Don't have an account?</Text>
        </View>
        <View style={{backgroundColor:'#FDF6F6',height:50,flex:2,justifyContent:'center'}}>
          <TouchableOpacity activeOpacity={0.7} onPress={gotoSignup}>
          <Text style={{fontSize:15,color:'#08c1cd',fontWeight:'500'}}>
            Sign Up</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
  


export default LoginPage

 const styles =StyleSheet.create({
  containers: {
    flex:1, justifyContent:'center',alignItems:'center',marginTop:40
  },
  button:{width:200,height:50,borderRadius:20,backgroundColor:'#08c1cd',justifyContent:'center',alignItems:'center'},
  text:{fontSize:20,fontWeight:'bold',alignItems:'center',justifyContent:'center',color:'white'},

  BackButtonContainer: {
    flexDirection: 'row',
    height: 50,
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf:'flex-start'
  },
}) 

const sty = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#FDF6F6'
    }
  })