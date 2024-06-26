import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Banner from '../Components/Banner'
import Danhsach from '../Components/Danhsach'

const Home = ({navigation}) => {
  return (
    <View>
      <Banner/>
      <Pressable onPress={()=>navigation.navigate('Cart')}
       style={{backgroundColor: 'green', padding: 20, borderWidth: 1}}>
        <Text>Giỏ hàng của tôi</Text>
      </Pressable>
      <Danhsach/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})