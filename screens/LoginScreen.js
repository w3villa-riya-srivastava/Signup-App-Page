import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import InputElement from '../components/loginComponents/InputElement';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pressHandler = () => {
    const data = {
      email: email,
      password: password,
    };
    console.log('data', data);
  };

  return (
    // Scrollview is used to dismiss the keyboard 
    <ScrollView>
      <ImageBackground
      source={require('../assets/images/app-background.jpg')}
      style={{zIndex: -1}}>
      <View>
        <Text style={styles.text1}>Let's Sign you in.</Text>
        <Text style={styles.text2}>Welcome back.</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Sign In</Text>
        <InputElement
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
        />
        {/* <Text style={styles.forgot}>Forgot Password?</Text> */}
        <TouchableOpacity onPress={pressHandler}>
          <View style={styles.signinButton}>
            <Text style={{color: 'white', fontSize: 22, padding: 5}}>
              Sign in
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'black', marginTop: 10, alignItems: 'center'}}>
            Don't have an account? {''} 
            <Text style={{color: 'black', fontWeight:'bold', textDecorationLine: 'underline'}}>
              Sign Up
            </Text>
          </Text>
        </View>
        
      </View>
      {/* <View>
          <Text style={[styles.common, {fontSize: 18}]}>How are you </Text>
          <Text style={[styles.common, {fontSize: 13}]}>I am good </Text>
        </View> */}
    </ImageBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  text1: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginTop: 40,
    marginHorizontal:20
  },
  text2: {
    fontSize: 28,
    color: 'white',
    marginTop: 15,
    marginHorizontal:20
  },
  title:{
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    marginHorizontal:20
  },
  container:{
    marginTop:25,
    borderTopRightRadius: 30, 
    borderTopLeftRadius: 30, 
    backgroundColor: 'white', 
    zIndex: 1
  },
    // forgot:{
  //   color: 'black',
  //   fontWeight: 'bold',
  //   textAlign: 'right',
  //   marginTop: 10,
  //   textDecorationLine: 'underline',
  //   marginHorizontal:20
  // },
  signinButton: {
    backgroundColor: 'black',
    height: 50,
    borderwidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal:20,
    marginTop:25
  },
});

export default LoginScreen;
