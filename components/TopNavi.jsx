import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView,StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import SecondScreen from './SecondScreen';
import ThirdScreen from './ThirdScreen';

export default function TabNavi() {
  
    

    const Tab = createMaterialTopTabNavigator();

    return (
      <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      <StatusBar style={'auto'}/>
      <Tab.Navigator style={{}}
      tabBarOptions={{
        labelStyle:{fontSize:16},
        // style:{backgroundColor: 'lightgreen'},
        indicatorStyle:{
          backgroundColor:'red',
          height:3
        }

      }}>

      <Tab.Screen name="HomeScreen" component={HomeScreen} 
      options={{tabBarLabel:'すべて'}}/>

      <Tab.Screen name="SecondScreen" component={SecondScreen} 
      options={{tabBarLabel:'社内'}}/>

      <Tab.Screen name="ThirdScreen" component={ThirdScreen} 
      options={{tabBarLabel:'社外'}}/>
    </Tab.Navigator>
  </SafeAreaView>
  
  );
  }