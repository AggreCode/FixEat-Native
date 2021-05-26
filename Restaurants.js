import React from 'react'
import { StyleSheet, Text, View ,Image, ScrollView,FlatList,TouchableOpacity} from 'react-native'
// import {List,ListItem} from 'react-native-elements'
const data =[
    {   id: '1',
        image : 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
        ,name: 'Hotel Armaan',
        place: 'Gurujanguli',
        
    },
    {  id: '2',
        image : 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
        ,name: 'Hotel Armaan',
        place: 'Gurujanguli',
    },
    {   id: '3',
        image : 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
        ,name: 'Hotel Armaan',
        place: 'Gurujanguli',
    },
    {   id: '1',
    image : 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    ,name: 'Hotel Armaan',
    place: 'Gurujanguli',
    
},
{  id: '2',
    image : 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    ,name: 'Hotel Armaan',
    place: 'Gurujanguli',
},
{   id: '3',
    image : 'https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
    ,name: 'Hotel Armaan',
    place: 'Gurujanguli',
}
]

  

const Restaurant_indi = ({image,name,place,navigation})=>{
  return  <TouchableOpacity onPress={()=> navigation.navigate('dishes',{
      name,place
  })} style={styles.ele_container} activeOpacity={0.6}>

      <Image style={styles.stretch}
      source={{uri: 'https://thumbs.dreamstime.com/b/chicken-biryani-traditional-indian-rice-dish-served-clay-pot-top-view-image-one-meal-108805407.jpg'}}/>


      <View style={styles.inner_ele}>
      <Text style={styles.title}>{name}</Text>
      <Text>{place}</Text>
      </View>
     
    </TouchableOpacity>
}

const Restaurants = ({navigation}) => {
    // const renderItem = ({ item }) => (
      
    //       <Restaurant_indi 
    // id={item.id}
    // image = {item.image}
    // name={item.name}
    // place={item.place}
    // />
      
    
    
    // );
     
    return (
        <View  style={styles.container}>
           
            <View>
              
            
            </View>
            <ScrollView>
               {/* <FlatList
               data={data}
               renderItem={renderItem}
             
               /> */}
               {
                   data.map((item)=>(
                  
                    <Restaurant_indi 
                    navigation={navigation}
              id={item.id}
              image = {item.image}
              name={item.name}
              place={item.place}
              />
               
                   ))
               }

            </ScrollView>
          
        </View>
    )
}

export default Restaurants

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
        height: 250,
        marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12
      
    },
    stretch: {
        width: 328,
        height: 160,
        marginRight: 20,
        resizeMode: 'stretch',
        borderRadius: 16
      },
      inner_ele:{
          flexDirection: 'column',
          marginTop: 20,
          marginLeft: 15
      }
})
