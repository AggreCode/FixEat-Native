import { StatusBar } from 'expo-status-bar';
import React,{useState,useEffect,useLayoutEffect} from 'react';
import { StyleSheet, Text,View, SafeAreaView,ActivityIndicator } from 'react-native';
import HomeMain from './HomeMain.js'


const Splashscreen=({navigation,route})=>{
  useLayoutEffect(()=>{
  navigation.setOptions({
    headerShown: false,
  })
  },[])
    return (
      <View style={styles.container} >
       <Text style={{color:'white', fontSize:43, fontWeight: 'bold'}}>fixEat</Text> 
         <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  
  }

export default function  Home({navigation,route}) {
  const [isRendered,setIsRendered] = useState(true)
  useEffect(()=>{
    setTimeout(function(){  
     setIsRendered(false)  
    }, 2500);  
  },[])
  
  return (
  
isRendered ?  
  <Splashscreen navigation ={navigation}/>:
    <HomeMain navigation={navigation}/>


  
  
    
  
  
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   backgroundColor: '#ff471a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
