import React from 'react';
import SigninScreen from './screens/authScreen/SigninScreen';
import SignUpScreen from './screens/authScreen/SignUpScreen';
import OTPpage from './screens/authScreen/OTPpage';
import EmailVerify from './screens/authScreen/EmailVerify';
import Dashboard from './screens/authScreen/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';


function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
    // <OTPpage/>
    // <EmailVerify/>
    // <Dashboard />
  );
}

export default App;

