import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useStateValue} from  './StateProvider'


const Checkout_indi =({name,place,price})=>{
    return(
        <View>
           <Text>
           {name}
           </Text>
           <Text>
           {place}
           </Text>
             <Text>
           {price}
           </Text>
        </View>
    )
}


const Checkout = () => {
    const [{basket}, dispatch] = useStateValue()


    return (
        <View>
     
           {
               basket.map((item,id)=>(
                   <Checkout_indi
                    key={id}
                    name={item.name}
                    place={item.place}
                    price={item.price}
                   />
               ))
           }
        </View>
    )
}

export default Checkout

const styles = StyleSheet.create({})
