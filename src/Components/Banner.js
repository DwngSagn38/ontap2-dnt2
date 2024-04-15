import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = () => {
  
  return (
    <View style={{marginBottom: 10}}>
      <Image style={{width: '100%', height: 250}}
       source={{uri : 'https://i.pinimg.com/236x/6b/3c/cb/6b3ccbe429af038b0b84eb7f2d428f6f.jpg'}}/>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({})