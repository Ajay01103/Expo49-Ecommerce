import { View, Image, Text, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../../constants/index'
import { Ionicons } from "@expo/vector-icons"

const ProductCardView = () => {
  return (
    <TouchableOpacity>
        <View style={{ width: 200, height: 240, marginEnd: 14, borderRadius: SIZES.medium, backgroundColor: COLORS.secondary }}>
          <View style={{ flex: 1, width: 182, marginLeft: SIZES.small / 2, marginTop: SIZES.small / 2, borderRadius: SIZES.small, overflow: "hidden" }}>
            <Image 
            style={{ aspectRatio: 1, resizeMode: "stretch", borderRadius: SIZES.medium}}
            source={{ uri: "https://5.imimg.com/data5/WG/WN/MY-41057716/designer-bedroom-furniture-set-500x500.jpg" }}
            />
          </View>

            <View style={{ padding: SIZES.small }}>
                <Text numberOfLines={1} style={{ fontFamily: "bold", fontSize: 14 }}>Product</Text>
                <Text style={{ color: "#808080", marginTop: -2, marginBottom: -1 }}>Product</Text>
                <Text style={{ fontFamily: "semibold", marginBottom: -6 }}>$199</Text>
            </View>

            <TouchableOpacity style={{ position: "absolute", top: "80%", right: 12 }}>
                <Ionicons name='cart' size={30} color={COLORS.primary} />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
  )
}

export default ProductCardView