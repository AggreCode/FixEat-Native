'use-strict'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { TextInput } from 'react-native'
import {auth} from './Firebase.js'
import { StyleSheet, Text, View,Alert, TouchableOpacity,Image } from 'react-native'
import {useStateValue} from './StateProvider';

const Login =({navigation})=>{
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  useEffect(()=>{
    // const unsubscribe = auth.onAuthStateChanged((User)=> {
    //     if(User)
    //   {navigation.replace('Home')}
    // })
    // return unsubscribe
   },[])
 
  const [,dispatch] = useStateValue()
  const login =(e) =>{
      e.preventDefault();
     
   
      auth.signInWithEmailAndPassword(username.concat('@yahoo.com'),password)
      .then(async (userCredential)=>{
        
        var user = userCredential.user;
        if(user){
        
        navigation.replace('Root')
      }
          
      })
      .catch((err)=> Alert.alert(err.message))
  }

    return (
        <KeyboardAvoidingView>
            <TextInput
            style={styles.input}
            placeholder='Username'
            onChangeText={setUsername}
            value={username}

            />

            <TextInput
            secureTextEntry={true}
             style={styles.input}
             placeholder='Password'
             onChangeText={setPassword}
             value={password}
            />
            <TouchableOpacity style={styles.loginButton}  onPress={login}>
            <Text style={{fontSize: 18, color: '#fff'}}>Login</Text>   
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}
const Register =()=>{
  const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const register=e =>{
      e.preventDefault();
     auth.createUserWithEmailAndPassword(username.concat('@yahoo.com'),password)
      .then((authUser)=>{
        authUser.user.updateProfile({
            displayName: username
        })
       alert('You are successfully registered')
    })
    
      
      
      .catch((err)=> Alert.alert(err.message))
  }

    return (
      <KeyboardAvoidingView>
      <TextInput
      style={styles.input}
      placeholder='Username'
      onChangeText={setUsername}
      value={username}

      />

      <TextInput
      secureTextEntry={true}
       style={styles.input}
       placeholder='Password'
       onChangeText={setPassword}
       value={password}
      />
      <TouchableOpacity style={styles.loginButton} onPress={register}>
      <Text style={{fontSize: 18, color: '#fff'}}>Register</Text>   
      </TouchableOpacity>
  </KeyboardAvoidingView>
    )
}

const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
  }) => (
      <View style={styles.Ocontainer}>
          <View style={styles.imageB}>
              </View>
              <Image style={styles.stretch}
                 source={{uri: 'https://thumbs.dreamstime.com/b/chicken-biryani-traditional-indian-rice-dish-served-clay-pot-top-view-image-one-meal-108805407.jpg'}}
              />
         
          <View style={styles.container}>
            <View style={styles.logo}>
           
            <Text style={styles.label}>{label}</Text>
            </View>
   
      <View style={styles.row}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[
              styles.button,
              selectedValue === value && styles.selected,
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value && styles.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.container2}>
        {children}
      </View>
    </View>
      </View>
    
  )

const Auth = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false
        })
    }, [])
 

    const [auth, setAuth] = useState("Login");

    return (
      <PreviewLayout
       label={'fixEat'}
        values={["Login", "Signup"]}
        selectedValue={auth}
        setSelectedValue={setAuth}
      >
    {
        auth==='Login' ?
    <Login navigation={navigation}/>: <Register />

    }   
      </PreviewLayout>
    );
}

export default Auth

// const styles = StyleSheet.create({
//     container: {
//         height: 500,
//         width: 300,
//         marginLeft: 32,
//         marginTop: 32,
//         backgroundColor: '#fff',
//     },
//     header: {
//         flexDirection: 'row',
//         marginTop: 80,
//         marginLeft: 32,
//         backgroundColor: '#ffe6e6',
//         width: 120,
//         height: 38,
//         borderTopLeftRadius: 12,
//         borderBottomLeftRadius: 12
//     },
//     tableft: {
//         backgroundColor: '#ffe6e6',
//         width: 120,
//         height: 38,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderTopLeftRadius: 12,
//         borderBottomLeftRadius: 12
//     },
//     tabright: {
//         backgroundColor: '#ffe6e6',
//         width: 120,
//         height: 38,
//         alignItems: 'center',
//         justifyContent: 'center',
//         borderTopRightRadius: 12,
//         borderBottomRightRadius: 12,

//     },
//     selectedLeft: {
//         backgroundColor: '#ff4d4d',
//         borderTopRightRadius: 12,
//         borderBottomRightRadius: 12
//     },
//     selectedRight: {
//         backgroundColor: '#ff4d4d',
//         borderTopLeftRadius: 12,
//         borderBottomLeftRadius: 12
//     },
//     selectedText: {
//         color: '#fff'
//     }
// })
const styles = StyleSheet.create({
    Ocontainer:{
         width: '100%',
         position: 'absolute'
    },
    logo:{
      flexDirection: 'row',
      justifyContent:'center',
    
      marginTop:50,
      marginLeft: 100,
      width: 100,
     
    }
  ,
        container: {
                position: 'relative',
                top: -534,
                    height: 500,
                    width: 320,
                    marginLeft: 20,
                    marginTop: 80,
                    backgroundColor: '#fff',
                    borderRadius: 14
                },
                container2: {
                   justifyContent :'center',
                   marginTop: 34,
                   alignItems:'center',

                },

                input: {
                    height: 40,
                    width: 240,
                    margin: 12,
                   borderBottomColor: '#ccc',
                   borderBottomWidth: 1
                  },
                  loginButton:{
                       marginTop: 19,
                       marginLeft: 13,
                    backgroundColor: 'red',
                    width:240,
                    height: 38,
                    justifyContent: 'center',
                    alignItems: 'center'
                  },
    row: {
      flexDirection: "row",
      alignItems:'center',
      justifyContent: 'center',
      marginTop: 20,
        marginLeft: 20,
        backgroundColor: '#ffe6e6',
        width: 280,
        height: 39,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
           
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
    },
    button: {
      height: 36,
      backgroundColor: "#ffe6e6",
    alignItems:'center',
     justifyContent:'center',
    
      width: 139,
      textAlign: "center",

    },
    selected: {
      backgroundColor: "#ff4d4d",
      borderWidth: 0,
      borderTopLeftRadius: 12,
      borderBottomLeftRadius: 12,
         
      borderTopRightRadius: 12,
      borderBottomRightRadius: 12,
    },
    buttonLabel: {
      fontSize: 16,
      fontWeight: "500",
      color: "coral",
    },
    selectedLabel: {
      color: "white",
    },
    label: {
      textAlign: "center",
      marginBottom: 10,
      fontSize: 34,
      fontWeight: 'bold'
    },
    stretch:{
        position: 'relative',
        top: -300,
        left: -80,
        width: 600,
        height: 600,
        marginLeft: 80,
        resizeMode: 'stretch',
        borderRadius: 250,
        zIndex: 0.456
        },
       
  });
  
