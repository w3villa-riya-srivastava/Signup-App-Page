import React, {useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import InputElement from '../components/loginComponents/InputElement';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pressHandler = () => {
    const data = {
        email: email,
        password: password
    }
    console.log('data', data);
  };

  return (
    <View style={{margin: 40}}>
      <Text style={styles.text1}>Let's Sing you in.</Text>
      <Text style={styles.text2}>Welcome back.</Text>
      <Text style={styles.text3}>You've been missed!</Text>
      <InputElement
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      />
      <TouchableOpacity style={{marginTop: 200}} onPress={pressHandler}>
        <View style={styles.signin}>
          <Text style={{color: 'white', fontSize: 18, padding: 5}}>
            Sign in
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: 'black', marginTop: 12, alignItems: 'center'}}>
          Don't have an account?
          <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
            {' '}
            Register
          </Text>
        </Text>
      </View>

      {/* <View>
          <Text style={[styles.common, {fontSize: 18}]}>How are you </Text>
          <Text style={[styles.common, {fontSize: 13}]}>I am good </Text>
        </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  text1: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
    marginTop: 40,
  },
  text2: {
    fontSize: 28,
    color: 'black',
    marginTop: 15,
  },
  text3: {
    fontSize: 28,
    color: 'black',
  },
  signin: {
    backgroundColor: 'blue',
    height: 40,
    borderwidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  common: {
    color: 'black',
  },
});

export default LoginScreen;
