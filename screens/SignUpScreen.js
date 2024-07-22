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
import CustomInputElement from '../components/loginComponents/CustomInputElement';

const SignUpScreen = () => {
  // email is current state and setEMail is function which is used to update the email state
  
  const [email, setEmail] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const pressHandler = () => {
    const data = {
      email: email,
      mobileno: mobileno,
      password: password,
      confirmPassword: confirmPassword
    };
    console.log('data', data);
    // alert("We've sent an confirmation email to your email address and an OTP on your mobile number.");
  };
  return (
   <ScrollView>
     <ImageBackground
      source={require('../assets/images/app-background.jpg')}
      style={{zIndex: -1}}>
      <View>
        <Text style={styles.text1}>Let's Sign you Up.</Text>
        <Text style={styles.text2}>Welcome.</Text>
      </View>
      <View
        style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <CustomInputElement
          inputTitle="Email"
          placeholder="Your Email"
          value={email}
          setValue={setEmail}
          isSecure={false}
        />
         <CustomInputElement
          inputTitle="Mobile Number"
          placeholder="Your Mobile Number"
          value={mobileno}
          setValue={setMobileno}
          isSecure={false}
          keyboardType='numeric'
        />
        <CustomInputElement
          inputTitle="Password"
          placeholder="Create Password"
          value={password}
          setValue={setPassword}
          isSecure={true}
        />
        <CustomInputElement
          inputTitle="Confirm Password"
          placeholder="Retype Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          isSecure={true}
        />
        <TouchableOpacity onPress={pressHandler}>
          <View style={styles.signinButton}>
            <Text style={{color: 'white', fontSize: 22, padding: 5}}>
              Sign Up
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: 'black', marginTop: 12, alignItems: 'center'}}>
            Already have an account? {''}
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                textDecorationLine: 'underline',
              }}>
              Login
            </Text>
          </Text>
        </View>
      </View>
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
    marginHorizontal: 20,
  },
  text2: {
    fontSize: 28,
    color: 'white',
    marginTop: 15,
    marginHorizontal: 20,
  },
  container:{
    marginTop:25,
    borderTopRightRadius: 30, 
    borderTopLeftRadius: 30, 
    backgroundColor: 'white', 
    zIndex: 1
  },
  title: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
    marginHorizontal: 20,
  },
  signinButton: {
    backgroundColor: 'black',
    height: 50,
    borderwidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 25,
  },
});
export default SignUpScreen;
