import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screen/Home';
import Cart from '../screen/Cart';

const MainNav = () => {
    const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Cart' component={Cart}/>
    </Stack.Navigator>
  )
}

export default MainNav

const styles = StyleSheet.create({})