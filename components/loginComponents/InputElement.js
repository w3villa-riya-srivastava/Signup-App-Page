import React from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';

const InputElement = ({email, password, setEmail, setPassword}) => {
  return (
    <View>
      <Text style={styles.email}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Your email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Text style={styles.email}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  email: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal:20
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 16,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 8,
    marginHorizontal: 20
  },
});

export default InputElement;