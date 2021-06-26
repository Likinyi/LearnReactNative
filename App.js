import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './components/LoginScreen';
import MainScreen from './components/MainScreen';
import NoticeDetail from './components/NoticeDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >

    <Stack.Navigator initialRouteName="LoginScreen">

     <Stack.Screen name="LoginScreen"
     component={LoginScreen}/>

    <Stack.Screen name="Main"
     component={MainScreen}/>

    <Stack.Screen name="NoticeDetail"
     component={NoticeDetail}/>
     
    </Stack.Navigator>
  </NavigationContainer>
  );
};