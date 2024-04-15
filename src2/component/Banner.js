import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Banner = () => {
  return (
    <View>
      <Image style={{width: '100%', height: 250}}
      source={{ uri: 'https://i.pinimg.com/236x/7b/c0/ba/7bc0ba60beb8fb13648a320c00a0dfac.jpg'}}/>
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({})