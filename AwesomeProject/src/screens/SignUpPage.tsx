import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Icon } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';

function SignupFiled(p:any) {
  const stack=p.stack;
    return(
      <View style={{marginTop:40}}>
        <View style={{backgroundColor:'white',borderRadius:20,
          height:50,marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,borderColor:'black',borderWidth:1
        }}>
          <TextInput placeholder='Police ID' placeholderTextColor={'black'}
          style={{fontSize:20}} />
        </View>
  
        <View style={{backgroundColor:'white',borderRadius:20,
          height:50,marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,borderColor:'black',marginTop:20,borderWidth:1
        }}>
          <TextInput placeholder='Name' placeholderTextColor={'black'}
          style={{fontSize:20,}} />
        </View>

        <View style={{backgroundColor:'white',borderRadius:20,
          height:50,marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,borderColor:'black',marginTop:20,borderWidth:1
        }}>
          <TextInput placeholder='Email/Phone Number' placeholderTextColor={'black'}
          style={{fontSize:20,}} />
        </View>
  
        <View style={{backgroundColor:'white',borderRadius:20,
          height:50,marginHorizontal:30,justifyContent:'center',
          paddingLeft:20,borderColor:'black',marginTop:20,borderWidth:1
        }}>
          <TextInput placeholder='Password' placeholderTextColor={'black'}
          style={{fontSize:20,}} />
        </View>
  
      </View>
    );
  }

const SignUpPage = (props:any) => {
  const stack=props.navigation;
  return (
    <View style={sty.container}>
        <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>
        <BackButton stack={stack}/>
    <Image style={{width:'100%',height:'40%',marginTop:40,position:'absolute'
    }} source={require('../../asset/img/fineflex4.jpg')
    } resizeMode='center'/>
      <Text style={{color:'black',fontSize:25,fontWeight:'bold',marginTop:190,marginLeft:40}}>
      Sign Up
    </Text>
    <SignupFiled stack={stack}/>
    <SignButton/>
    <PageEnd stack={stack}/>
    </KeyboardAwareScrollView>
    </View>
  )
}

function BackButton(p: any){
  const stack=p.stack;

  function gotoLogin(){
    stack.navigate('login')
  }
    return(
      <View style={styless.backButtonContainer}>
      <TouchableOpacity activeOpacity={0.7} onPress={gotoLogin}>
        <Icon size={30} name="chevron-back" type="ionicon" />
      </TouchableOpacity>
    </View>
       );
  }

  function SignButton(){
    return(
      <View style={styless.containers}>
      <TouchableOpacity style={styless.button} activeOpacity={0.7}>
        <Text style={styless.text}>Request Sign Up</Text>
      </TouchableOpacity>
    </View>
       
    );
  }

  function PageEnd(a: any) {
    const stack=a.stack;

    function gotologIn(){
      stack.navigate('login')
    }
    return(
      <View style={{flexDirection:'row',marginTop:8}}>
        <View style={{backgroundColor:'#FDF6F6',height:50,flex:3,justifyContent:'center'}}>
          <Text style={{fontSize:15,color:'black',marginLeft:40,fontWeight:'500'}}>
            Already have an account?</Text>
        </View>
        <View style={{backgroundColor:'#FDF6F6',height:50,flex:2,justifyContent:'center'}}>
          <TouchableOpacity activeOpacity={0.7} onPress={gotologIn}>
          <Text style={{fontSize:15,color:'#08c1cd',fontWeight:'500'}}>
            Log In</Text></TouchableOpacity>
        </View>
      </View>
    );
  }

export default SignUpPage

const styless =StyleSheet.create({
    containers: {
      flex:1, justifyContent:'center',alignItems:'center',marginTop:20
    },
    button:{width:200,height:50,borderRadius:20,backgroundColor:'#08c1cd',justifyContent:'center',alignItems:'center'},
    text:{fontSize:20,fontWeight:'bold',alignItems:'center',justifyContent:'center',color:'white'},

    backButtonContainer: {
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