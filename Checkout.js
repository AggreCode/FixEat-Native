import React,{useEffect} from 'react'
import { StyleSheet, Text, View ,Dimensions, Alert,  ScrollView,Image,Button,TouchableOpacity} from 'react-native'
import {useStateValue} from  './StateProvider'
import { FontAwesome } from '@expo/vector-icons';

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
    let total=0;
     basket.forEach((item)=>{
         total+=item.price
     }
     )
     useEffect(()=>{
       
     },[basket])
     const AddOrder=()=>{
         if(total<150)
         Alert.alert('Min Order Value Rs 150')
         else{
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
     
     {
         basket.map((item,id)=>(
             <Checkout_indi
              key={id}
              id={item.id}
              name={item.name}
              place={item.place}
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
        marginTop: 5,
        marginBottom: 13,
        marginLeft: 80,
        borderRadius: 11
    }
})
