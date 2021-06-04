import React,{useEffect,useState} from 'react'
import { StyleSheet, Text, View ,Dimensions,KeyboardAvoidingView, Alert,  ScrollView,Image,Button,TouchableOpacity} from 'react-native'
import {useStateValue} from  './StateProvider'
import { FontAwesome } from '@expo/vector-icons';
import {auth,db} from './Firebase'
import  firebase from 'firebase'
import { TextInput } from 'react-native';

const Checkout_indi =({name,place,price,id,dispatch})=>{
    const removeBasket=()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id
        })
    }
    return(
        <View style={styles.indi}>
              <Image style={styles.stretch}
        source={{uri: 'https://thumbs.dreamstime.com/b/chicken-biryani-traditional-indian-rice-dish-served-clay-pot-top-view-image-one-meal-108805407.jpg'}}/>
  <View style={styles.inner_ele}>
  <Text style={{fontWeight:'bold',fontSize: 18}}>{name}</Text>
           <Text style={{fontWeight:'400',marginTop: 4,fontSize: 18}}>{place}</Text>
           <Text style={{marginTop: 2,fontSize: 18}}><FontAwesome style={{marginTop: 4}}name="rupee" size={17} color="black" />
    {price}</Text>
  </View>
  <TouchableOpacity onPress={removeBasket}  style={styles.button} activeOpacity={0.6}>
  <Text style={{fontSize:15, color:'#fff'}}>Remove</Text>
    </TouchableOpacity>
          
        </View>
    )
}


const Checkout = ({navigation}) => {
    const [{basket}, dispatch] = useStateValue()
    const [address,setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    let total=0;
     basket.forEach((item)=>{
         total+=item.price*item.amount
     }
     )
     useEffect(()=>{
       
     },[basket])
     const AddOrder=()=>{
        if(address === '') 
        {return alert("please fill the address")
          }
           if(name=== '')
          alert("please fill the name")
          if(phone=== ''|| phone.length !== 10)
          alert("please provide valid phone number")
         if(!auth.currentUser){
            Alert.alert('please login')
            navigation.replace('auth')
         }
         
         if(total<150)
         Alert.alert('Min Order Value Rs 150')
         else{
            db.collection('userOrders')
            .doc(auth.currentUser.email.substring(0,auth.currentUser.email.length - 10))
            .collection('order')
            .add({   name, phone, basket,address,total
            })
            db.collection('orders')
 
            .add({  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              name, phone, basket,address,total
            })
         

            dispatch({
                type: 'ADD_ORDER',
                item: basket
            })
            dispatch({
               type: 'REMOVE_BASKET'
           })
           Alert.alert('order placed')
          navigation.navigate('order')
         }
        
     }
    

    return (
        <View  style={styles.container}>
              <ScrollView > 
     <KeyboardAvoidingView>
         <TextInput style={[styles.input,{height: 80}]} value={address} onChangeText={setAddress} placeholder='Enter Delivery Address'/>
         <TextInput style={styles.input} value={name} onChangeText={setName} placeholder='Enter  Name'/>
         <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder='Enter Phone number'/>
     </KeyboardAvoidingView>
     {
         basket.map((item,id)=>(
             <Checkout_indi
              key={id}
              id={item.id}
              name={item.food}
              place={item.restaurant}
              price={item.price}
              dispatch={dispatch}
             />
         ))
     }
  </ScrollView>
  <View style={styles.rashid}>
      <View style={styles.hr}>
      <Text style={{fontSize:16}}>Order Price  :- <FontAwesome style={{marginTop: 4}}name="rupee" size={17} color="black" /> {total} /</Text>
      <Text style={{fontSize:16,marginTop: 4,marginBottom:4}}>Delivery Price :- <Text style={{color:'green'}}>Free</Text></Text>
  
      </View>
      <Text style={{fontSize:16,marginTop: 4}}>Total Price  :- <FontAwesome style={{marginTop: 4}}name="rupee" size={17} color="black" />{total} /-</Text>
      <TouchableOpacity onPress={AddOrder} style={styles.fbutton} activeOpacity={0.6}>
  <Text style={{fontSize:15, color:'#fff'}}>Confirm Order</Text>
    </TouchableOpacity>
          
  </View>
        </View>
     
    )
}

export default Checkout

const styles = StyleSheet.create({
    container:{
    flex: 1,

     
    },
   
    input:{
        width: 290,
        backgroundColor: '#fff',
        borderColor: '#ccc',
     marginHorizontal: 10,

     marginVertical: 10,
        height: 40,
        padding: 10
    },
    stretch:{
        width: 100,
       height: 80,
       marginRight: 20,
       resizeMode: 'stretch',
       borderRadius: 16
    },
    indi:{
        flexDirection:'row',
       marginBottom: 8,
       height: 130,
       padding: 20,
    
        backgroundColor: '#fff'
    },
    inner_ele:{
        flexDirection: 'column',
       
    },
    button:{
        width: 80,
        height: 35,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#ff9999',
        marginTop: 60,
        marginLeft: 20,
        borderRadius: 11
    },
    
    rashid:{
      height:180,
      padding:20,
    
       backgroundColor: '#f2f2f2'
    },
    hr:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    fbutton:{
        width: 180,
        height: 40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#ff471a',
        marginTop: 10,
        marginBottom: 6,
        marginLeft: 80,
        borderRadius: 11
    }
})
