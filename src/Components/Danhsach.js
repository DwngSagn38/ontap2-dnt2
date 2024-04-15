import { Modal, Pressable, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSach } from '../Redux/actions/actions';
import { addToCart } from '../Redux/actions/actionCart';

const Danhsach = () => {
  const listSach = useSelector(state => state.sach.items);
  const dispatch = useDispatch();
  const [modalVisible, setmodalVisible] = useState(false)

  const [row, setrow] = useState([])
  const [ma_sach, setma_sach] = useState("");
  const [tieu_de, settieu_de] = useState("");
  const [tac_gia, settac_gia] = useState("");
  const [nam_xuat_ban, setnam_xuat_ban] = useState("");
  const [so_trang, setso_trang] = useState("");
  const [the_loai, setthe_loai] = useState("");


  useEffect(() => {
    dispatch(fetchSach())
  }, [dispatch]);

  // modal option
  const ChitietModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.cardCotainer}>
          <View />
          <View style={styles.cardModal}>
            <Text style={styles.textBold}>
              Chi tiết sách
            </Text>

            <Text style={styles.textBold}>
              Mã sach : {ma_sach}
            </Text>
            <Text style={styles.textBold}>
              Tiêu đề : {tieu_de}
            </Text>
            <Text style={styles.textBold}>
              Tác giả : {tac_gia}
            </Text>
            <Text style={styles.textBold}>
              Năm xb : {nam_xuat_ban}
            </Text>
            <Text style={styles.textBold}>
              Số trang : {so_trang}
            </Text>
            <Text style={styles.textBold}>
              Thể loại : {the_loai}
            </Text>
            <Pressable
              style={styles.btn}
              onPress={() => { 
                dispatch(addToCart(row))
                ToastAndroid.show("Đã thêm vào giỏ hàng",0)
                setmodalVisible(false) }}>
              <Text style={{ color: 'white' }}>Thêm vào giỏ hàng</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
    )
  }
  return (
    <View>

      {listSach.map(row => (
        <Pressable key={row.id} 
        onPress={() => { 
          setrow(row)
          setmodalVisible(true)
          setma_sach(row.ma_sach)
          settieu_de(row.tieu_de)
          settac_gia(row.tac_gia)
          setnam_xuat_ban(row.nam_xuat_ban)
          setso_trang(row.so_trang)
          setthe_loai(row.the_loai)
         }}
          style={{ padding: 20, marginBottom: 10, borderWidth: 1, margin: 12 }}>
          <Text>Ma sach : {row.ma_sach}</Text>
          <Text>Tieu de : {row.tieu_de}</Text>
          <Pressable onPress={()=>{
            dispatch(addToCart(row))
            ToastAndroid.show("Đã thêm vào giỏ hàng",0)
          }}
            style={styles.btn}>
            <Text>Thêm vào giỏ hàng</Text>
          </Pressable>
        </Pressable>
      ))}

      <ChitietModal />
    </View>
  )
}

export default Danhsach

const styles = StyleSheet.create({
  textBold: {
    fontSize: 14,
    fontWeight: '400',
  }, cardCotainer: {
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cardModal: {
    width: "90%",
    marginBottom: 40,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
   btn:{ padding: 10, backgroundColor: 'green', marginTop: 20 }
})