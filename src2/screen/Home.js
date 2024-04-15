import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Banner from '../component/Banner'
import DachSach from '../component/DachSach'

const Home = ({navigation}) => {
  return (
    <View>
      <Banner/>
      <Pressable onPress={()=> {navigation.navigate("Cart")}}
      style={{padding: 20, backgroundColor: 'red', alignItems: 'center', margin: 20}} >
        <Text>Giỏ hàng của tôi</Text>
      </Pressable>
      <DachSach/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})