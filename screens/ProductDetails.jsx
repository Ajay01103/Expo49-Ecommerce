import { View, Text, TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { SIZES, COLORS } from '../constants/index'
import { Ionicons } from "@expo/vector-icons"


const ProductDetails = ({ navigation }) => {
  return (
    <View>
      {/* <View style={{ marginHorizontal: 20, flexDirection: "row", justifyContent: "space-between", alignItems: "center", position: "absolute",
       top: SIZES.xxLarge, width: SIZES.width - 44, zIndex: 999 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-circle' size={30} color="#65636F" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Ionicons name='heart' size={30} color="#E82222" />
        </TouchableOpacity>
      </View> */}

      <View>
        <Image 
        width="100%"
        height={250}
        source={{ uri: "https://5.imimg.com/data5/WG/WN/MY-41057716/designer-bedroom-furniture-set-500x500.jpg" }}
        style={{ resizeMode: "stretch" }}
        />
      </View>

      <View style={{ marginTop: -SIZES.large }}>

      </View>
    </View>
  )
}

export default ProductDetails