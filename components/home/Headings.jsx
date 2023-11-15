import { View, Text, TouchableOpacity } from 'react-native'
import { COLORS, SIZES } from '../../constants/index'
import { Ionicons } from "@expo/vector-icons"


const Headings = () => {
  return (
    <View style={{ marginTop: SIZES.medium, marginBottom: -SIZES.xSmall, marginHorizontal: 12 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
        <Text style={{ fontFamily: "semibold", fontSize: SIZES.xLarge - 2 }}>
            New Arrivals
        </Text>
        <TouchableOpacity>
            <Ionicons name='ios-grid' size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings