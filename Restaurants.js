import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native'
// import {List,ListItem} from 'react-native-elements'
import { db } from './Firebase'
import { useStateValue } from './StateProvider'

const Restaurant_indi = ({ image, name, place, navigation, dishes }) => {

  return <TouchableOpacity onPress={() => navigation.navigate('dishes', {
    dishes,
    name
  })} style={styles.ele_container} activeOpacity={0.6}>

    <Image style={styles.stretch}
      source={{ uri: image }} />


    <View style={styles.inner_ele}>
      <Text style={styles.title}>{name}</Text>
      <Text>{place}</Text>
    </View>

  </TouchableOpacity>
}

const Restaurants = ({ navigation }) => {


  const [{ restaurants }, dispatch] = useStateValue()
  return (
    <View style={styles.container}>

      <View>


      </View>
      <ScrollView>

        {
          restaurants?.map((item) => (

            <Restaurant_indi
              navigation={navigation}
              id={item.id}
              dishes={item.dishes}
              name={item.title}
              place={item.place}
              image={item.Rimage}
            />

          ))
        }

      </ScrollView>

    </View>
  )
}

export default Restaurants

const styles = StyleSheet.create({
  container: {
    flex: 1
    , height: '700%'
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
  title2: {
    fontSize: 18,
  },
  ele_container: {
    flexDirection: 'column',
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
  inner_ele: {
    flexDirection: 'column',
    marginTop: 20,
    marginLeft: 15
  }
})
