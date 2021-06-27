import React,{useLayoutEffect,useEffect,useState} from 'react'
import { StyleSheet, Text, View,ScrollView,ActivityIndicator,TouchableOpacity,Image } from 'react-native'
import {useStateValue} from  './StateProvider'
import { FontAwesome } from '@expo/vector-icons';
import {db,auth} from './Firebase.js'

const getOrder= async({user,setOrders})=>{
 
    let orders=[]
      const allData =await db.collection('userOrders').doc(auth.currentUser.email.substring(0,auth.currentUser.email.length - 10)).collection('order').get()
   
      allData.docs.forEach((order)=>{
        let obj = {id:order.id, price:order.data().total }
       orders.push(obj)
   
      })
   setOrders(orders)
    
    
       
     }

const Checkout_indi =({price,id,dispatch})=>{
    const removeOrder=()=>{
        db.collection('orders')
        .doc(auth.currentUser.email.substring(0,auth.currentUser.email.length - 10))
        .collection('order')
        .doc(id)
        .delete()
        .then(function () {
      
      
     
      alert('Order cancelled')
       
        })
        .catch((err) => alert(err))
    }
    return(
        <View style={styles.indi}>
             
  <View style={styles.inner_ele}>
  <Text style={{marginTop: 2,fontSize: 18}}>Order id:-{id}</Text>
           <Text style={{marginTop: 2,fontSize: 18}}><FontAwesome style={{marginTop: 4}}name="rupee" size={17} color="black" />
    {price}</Text>
  </View>
  <TouchableOpacity onPress={removeOrder}  style={styles.button} activeOpacity={0.6}>
  <Text style={{fontSize:15, color:'#fff'}}>Cancel</Text>
    </TouchableOpacity>
          
        </View>
    )
}



const Order = ({navigation}) => {
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle: 'Your Orders'
        })
    },[])
  const [{order},dispatch] = useStateValue()
  const [Orders,setOrders]= useState([])
  const [load,setLoad]= useState(true)
  useEffect( ()=>{
   
    if(!auth.currentUser)
    {
      alert("please sign in first")
     navigation.replace('auth')
    }
  else{

  getOrder({setOrders})
 
//   setTimeout(()=>{
//     setLoad(false)
// },2000)
setLoad(false)
 
  }

    },[Orders])
   
    return (
        <View  style={styles.container}>
      {load? <View  style={{marginTop: 200}}>
         <ActivityIndicator size="large" color="#ff471a" />
         </View> :
       <ScrollView > 

       {
          Orders.map((item,id)=>(
              <Checkout_indi
               key={id}
               id={item.id}
            
               price={item.price}
               dispatch={dispatch}
              />
          ))
       }
       </ScrollView>
      } 
        </View>
    )
}

export default Order

const styles = StyleSheet.create({
    container:{
    flex: 1,

     
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
      height:150,
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
        marginTop: 5,
        marginBottom: 13,
        marginLeft: 80,
        borderRadius: 11
    }
})
