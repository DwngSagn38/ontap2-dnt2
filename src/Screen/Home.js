import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Banner from '../Components/Banner'
import Danhsach from '../Components/Danhsach'

const Home = () => {
  return (
    <View>
      <Banner/>
      <Danhsach/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})