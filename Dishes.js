import React,{useLayoutEffect,useState} from 'react'
import { StyleSheet, Button,Text, Image,View,ScrollView,TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

import {useStateValue} from './StateProvider';
import { AntDesign } from '@expo/vector-icons';

const data =[
    {   id: '1',
        image : 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
        ,name: 'Biriyani',
        price: '100'
       
        
    },
    {  id: '2',
        image : 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
        ,name: 'Biriyani',
        price: '100'
        
    },
    {   id: '3',
        image : 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
        ,name: 'Biriyani',
        price: '100'
    },
    {   id: '1',
    image : 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    ,name: 'Biriyani',
    price: '100'
    
},
{  id: '2',
    image : 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    ,name: 'Biriyani',
    price: '100'
},
{   id: '3',
    image : 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    ,name: 'Biriyani',
    price: '100'
}
]

const Dish_indi = ({image,dispatch,name,place,price,navigation})=>{
   const [amount,setAmount] = useState(1)
   const handlePlus=()=>{
       setAmount(amount+1)
   }
    const handleMinus=()=>{
       setAmount(amount-1)
       if(amount<=1)
       setAmount(1)
   }
   const Add=()=>{
       dispatch({
           type: 'ADD_TO_BASKET',
           item:{
               name,price: price*amount,place
           }
       })
   }
   
    return  <View style={styles.dish_contain} style={styles.ele_container} activeOpacity={0.6}>
  
        <Image style={styles.stretch}
        source={{uri: 'https://thumbs.dreamstime.com/b/chicken-biryani-traditional-indian-rice-dish-served-clay-pot-top-view-image-one-meal-108805407.jpg'}}/>
  
  
        <View style={styles.inner_ele}>
        <View style={{flexDirection: 'column',marginTop: 8,marginLeft:4}}> 
              <Text style={styles.title}>{name}</Text>
              <View style={{flexDirection: 'row'}}>
                <FontAwesome style={{marginTop: 2}}name="rupee" size={17} color="black" />
             <Text style={{fontSize: 16}}>{price}</Text>
              </View>
            
        </View>
  
        <View style={styles.quantify}>
      
         <TouchableOpacity style={styles.quantify_in} onPress={handlePlus}>
         <FontAwesome5 name="plus" size={15} color="#ff471a" />
         </TouchableOpacity>
           <Text style={{fontSize: 17,marginTop: 3, color:"#ff0000"}}>{amount}</Text>
          <TouchableOpacity style={styles.quantify_in} onPress={handleMinus}>
         <FontAwesome5 name="minus" size={15} color="#ff471a" />
         </TouchableOpacity>
        </View>
        
        </View>
           <TouchableOpacity onPress={Add} style={styles.cart_button} activeOpacity={0.5}>
            <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}> ADD TO CART</Text>

             </TouchableOpacity>

       
      </View>
  }
  



const Dishes = ({navigation,route}) => {
    const [{restaurants,basket},dispatch] = useStateValue()
    useLayoutEffect(()=>{
      navigation.setOptions({
          headerTitle: route.params.name,
          headerRight: () =>(
              <TouchableOpacity onPress={()=>navigation.navigate('checkout')}  activeOpacity={0.5} style={{marginRight: 15,flexDirection:'row',justifyContent:'space-between'}}>
         <Text style={{fontSize: 21}}>{basket.length} </Text>   
           <AntDesign name="shoppingcart" size={32} color="black" />
              </ TouchableOpacity>
          )
      })
    },[basket])
    return (
    
            <View  style={styles.container}>
           
           <View>
             
           
           </View>
           
           <ScrollView horizontal={true}>
              {/* <FlatList
              data={data}
              renderItem={renderItem}
            
              /> */}
              {
                  data.map((item)=>(
                 
                   <Dish_indi 
                   navigation={navigation}
                   dispatch={dispatch}
             id={item.id}
             image = {item.image}
             name={item.name}
             place={route.params.name}
             price={item.price}
             />
              
                  ))
              }

           </ScrollView>
         
       </View>

    )
}

export default Dishes

const styles = StyleSheet.create({
    container:{
        flex:1
        ,height: '700%'
   },
   item: {
       backgroundColor: '#f9c2ff',
       padding: 20,
       marginVertical: 8,
       marginHorizontal: 16,
     },
     title: {
       fontSize: 20,
     },
     title2:{
       fontSize: 18,
     },
   ele_container:{
     flexDirection:'column',
       backgroundColor: '#fff',
      width: 280,
       height: 300,
       marginVertical: 8,
   marginHorizontal: 4,
   borderRadius: 16
     
   },
   stretch: {
       width: 280,
       height: 190,
       marginRight: 20,
       resizeMode: 'stretch',
       borderRadius: 16
     },
     inner_ele:{
         flexDirection: 'row',
        justifyContent:'space-between'
     },
     quantify:{
         marginTop: 15,
         width: 78,
         height: 34,
         flexDirection: 'row',
         justifyContent: 'space-between',
          fontWeight: 'normal',
          borderWidth: 1,
          borderColor: '#ff4d4d',
          backgroundColor: '#ffcccc',
          marginVertical: 4,
          borderRadius: 12,
          marginRight: 6

     },
     quantify_in:{
       marginVertical: 3,
         padding: 3,
            marginHorizontal: 2,
           
      
     },
     dish_contain:{
            flexDirection: 'row',
     },
     cart_button:{
         marginTop: 10,
         marginHorizontal: 70,
         justifyContent: 'center',
         alignItems: 'center',
       
        borderRadius: 12,
        backgroundColor:'#ff3333' ,
        height: 35
     }
})
