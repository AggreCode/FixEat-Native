
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
import Order from './Order'
import Auth from './Auth.js'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons'; 
import  HomeMain from './HomeMain'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()


const globalScreenOptions={
  headerStyle:{ backgroundColor: "#2C6BED"}
 , headerTitleStyle:{color: "#fff"},
 headerTintStyle:{color: "white"}
}
function Root(){
  return (
 
      <Drawer.Navigator initialRouteName="Home" drawerStyle={{
        width: 250,
        
        fontSize: 16
      }}  drawerContentOptions={{
        activeTintColor: '#ff4d4d',
        itemStyle: { marginVertical: 10,
          borderBottomColor: '#ccc',
          borderBottomWidth: 0.5,
         },
      }}>
        <Drawer.Screen name="Home"   component={Home} />
        
        <Drawer.Screen  name="Your Cart"  options={{ headerShown: true}} component={Checkout} />
       
           <Drawer.Screen  name="Your Orders" options={{ headerShown: true}} component={Order} />
     <Drawer.Screen  name="Login/Signup" options={{ headerShown: true}} component={Auth} />
            </Drawer.Navigator>
  
  )
}
export default function App() {
 
  return (
  <StateProvider initialState={initialState} reducer={reducer}>
<SafeAreaView style={styles.container}>
  
<NavigationContainer>
   <Stack.Navigator initialRouteName='Root'  >
   <Stack.Screen name='Root'   options={{ headerShown: false }} component={Root} />
   <Stack.Screen  name="Home" component={Home} />
   <Stack.Screen  name="Restaurants" component={Restaurants} />
   <Stack.Screen  name="dishes" component={Dishes} />
     <Stack.Screen  name="checkout" component={Checkout} />
     <Stack.Screen  name="order" component={Order} />
     <Stack.Screen  name="auth" component={Auth} />
   
  
  
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
