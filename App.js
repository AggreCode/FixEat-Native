
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text,View,StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home.js'
import Restaurants from './Restaurants'
import Dishes from './Dishes'
import StateProvider from './StateProvider.js'
import reducer, {initialState} from './Reducer.js'
import Checkout from './Checkout'
const Stack = createStackNavigator()

const globalScreenOptions={
  headerStyle:{ backgroundColor: "#2C6BED"}
 , headerTitleStyle:{color: "#fff"},
 headerTintStyle:{color: "white"}
}

export default function App() {
 
  return (
  <StateProvider initialState={initialState} reducer={reducer}>
<SafeAreaView style={styles.container}>
  
<NavigationContainer>
   <Stack.Navigator initialRouteName='Home'  >
   
   <Stack.Screen  name="Home" component={Home} />
   <Stack.Screen  name="Restaurants" component={Restaurants} />
   <Stack.Screen  name="dishes" component={Dishes} />
     <Stack.Screen  name="checkout" component={Checkout} />
   
   </Stack.Navigator>
  </NavigationContainer>
</SafeAreaView>
</StateProvider >
  
  
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
    
  },
});
