import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeCart } from '../Redux/actions/actionCart'

const Cart = () => {
    const listCart = useSelector(state => state.cart.Items)
    const dispatch = useDispatch();
    return (
        <View>

            {listCart == 0
            ? <Text style={{textAlign: 'center'}}>Giỏ hàng rỗng</Text>
            : listCart.map(item => (
                <View key={item.id} style={{ padding: 20, borderWidth: 1, marginBottom: 12 }}>
                    <Text>Mã sach : {item.ma_sach}</Text>
                    <Text>Tiêu đề : {item.tieu_de}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Pressable style={{padding: 10, backgroundColor: 'green'}}
                         onPress={()=>dispatch(removeCart(item))}>
                            <Text>Giảm</Text>
                        </Pressable>
                        <Text>Số lượng : {item.quantity}</Text>
                        <Pressable style={{padding: 10, backgroundColor: 'green'}}
                         onPress={()=>dispatch(addToCart(item))}>
                            <Text>Tăng</Text>
                        </Pressable>
                    </View>
                </View>
            ))}
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({})