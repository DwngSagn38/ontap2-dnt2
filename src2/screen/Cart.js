import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
    const listCart = useSelector(state => state.cart.Cartitems);
    const dispatch = useDispatch()

  return (
    <View>
      {listCart = 0 ? <Text>Giỏ hàng rỗng</Text>
      : listCart.map(item => (
        <View>
            
        </View>
      )) }
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({})