import { Modal, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addCart, fetchData } from '../redux/actions';

const DachSach = () => {
    const listBook = useSelector(state => state.sach.Sachitems);
    const dispatch = useDispatch();
    const [modalVisible, setmodalVisible] = useState(false);

    const [item, setitem] = useState([])
    const [ma_sach, setma_sach] = useState('')
    const [tieu_de, settieu_de] = useState('')
    const [tac_gia, settac_gia] = useState('')
    const [nam_xuat_ban, setnam_xuat_ban] = useState('')
    const [so_trang, setso_trang] = useState('')
    const [the_loai, setthe_loai] = useState('')

    useEffect(() => {
        dispatch(fetchData())
    }, [dispatch])

    const ChitietModal = () => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setmodalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Chi tiết sách</Text>
                        <Text style={styles.modalText}>Mã sách : {ma_sach}</Text>
                        <Text style={styles.modalText}>Tiêu đề : {tieu_de}</Text>
                        <Text style={styles.modalText}>Tác giả : {tac_gia}</Text>
                        <Text style={styles.modalText}>Năm xb : {nam_xuat_ban}</Text>
                        <Text style={styles.modalText}>Số trang : {so_trang}</Text>
                        <Text style={styles.modalText}>Thể loại : {the_loai}</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {
                                dispatch(addCart(item))
                                ToastAndroid.show("Đã thêm vào giỏ hàng",0)
                            }}>
                            <Text style={styles.textStyle}>Thêm vào giỏ hàng</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setmodalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Cancel</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        )
    }
    return (
        <View>
            {listBook.map(item => (
                <Pressable onPress={()=>{
                    setmodalVisible(true)
                    setitem(item)
                    setma_sach(item.ma_sach)
                    settieu_de(item.tieu_de)
                    setnam_xuat_ban(item.nam_xuat_ban)
                    setso_trang(item.so_trang)
                    settac_gia(item.tac_gia)
                    setthe_loai(item.the_loai)
                }}
                key={item.id} style={{ padding: 20, marginBottom: 20, borderWidth: 1 }}>
                    <Text>Ma book : {item.ma_sach}</Text>
                    <Text>Tieu de : {item.tieu_de}</Text>
                    <Pressable onPress={()=> {
                        dispatch(addCart(item))
                        ToastAndroid.show("Đã thêm vào giỏ hàng",0)
                    }}
                    style={{ padding: 20, backgroundColor: 'green' }}>
                        <Text>Them vao gio hang</Text>
                    </Pressable>
                </Pressable>
            ))}
            <ChitietModal/>
        </View>
    )
}

export default DachSach

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
      },
    modalView: {
        width: '90%',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonOpen: {
        backgroundColor: '#F194FF',
      },
      buttonClose: {
        backgroundColor: '#2196F3',
        marginBottom: 10
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
})