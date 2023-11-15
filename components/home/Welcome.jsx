import { TouchableOpacity, Text, View } from 'react-native'
import { COLORS, SIZES } from '../../constants/index'
import { Feather, Ionicons } from "@expo/vector-icons"
import { TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Welcome = () => {
    const navigation = useNavigation()
    return (
        <View>
            <View style={{ width: "100%" }}>
                <Text style={{ fontFamily: "bold", fontSize: SIZES.xLarge - 5, marginHorizontal: 12, marginTop: SIZES.xSmall }}>
                    Find The Most
                </Text>
                <Text style={{ fontFamily: "bold", fontSize: SIZES.xxLarge - 10, marginHorizontal: 10, marginTop: -4, color: COLORS.primary, }}>
                    Luxurious Furniture
                </Text>
            </View>

            <View style={{ flexDirection: "row", padding: 4, marginHorizontal: 8, justifyContent: "center", alignContent: "center", backgroundColor: COLORS.secondary, borderRadius: SIZES.medium, marginVertical: 12 }}>
                <TouchableOpacity>
                    <Feather name='search' size={24} style={{ marginHorizontal: 10, color: COLORS.gray }} />
                </TouchableOpacity>
                <View style={{ flex: 1, backgroundColor: COLORS.secondary, marginRight: SIZES.small, borderRadius: SIZES.small }}>
                    <TextInput 
                    onPressIn={() => navigation.navigate("Search")}
                    style={{ fontFamily: "regular", width: "100%", paddingHorizontal: 8 }}
                    placeholder='what are you looking for' />
                </View>

                <View>
                    <TouchableOpacity style={{ width: 50, backgroundColor: "#27592d", height: 30, borderRadius: SIZES.medium, alignItems: "center" }}>
                        <Ionicons name='camera-outline' size={SIZES.xLarge} color="#f2f2f2" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Welcome