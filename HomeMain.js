import React ,{useLayoutEffect} from 'react'
import { StyleSheet, Text, View,Dimensions,Image ,Button,Alert, TouchableOpacity} from 'react-native'

import { Entypo } from '@expo/vector-icons';

const SLIDER_WIDTH = Dimensions.get('window').width + 80
 const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const HomeMain = ({navigation}) => {
    const isCarousel = React.useRef(null)
    const [index, setIndex] = React.useState(0)
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown: true,
        headerRight : ()=>(
          <TouchableOpacity style={{marginRight: 18}}  onPress={()=> navigation.navigate('auth')}>
         <Text style={{marginBottom: 8,fontSize: 16,fontWeight: 'bold'}}>Login <Entypo name="login" size={24} color="black" /> </Text>
          </TouchableOpacity>
        )
      })
      },[])
    return (
        <View style={styles.container}>
         
          <TouchableOpacity style={styles.container2}>
             <Button
               title="Order Now"
               color="#ff471a"
               onPress={() => navigation.navigate('Restaurants')}
             />
          </TouchableOpacity>
        </View>
    )
}

export default HomeMain

const styles = StyleSheet.create({
    container:{
          flex: 1
    },
    header:{
      
        padding: 15,
        backgroundColor: '#ff471a',
        height: 50
    },
    headerText:{
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    },
    image: {
        width: ITEM_WIDTH,
        height: 200,
      },
      container2: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50
      }
})
