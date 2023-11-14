import { View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES } from '../constants/index'
import { Ionicons, Feather } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

const Search = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View style={{ flexDirection: "row", padding: 4, justifyContent: "center", alignContent: "center", backgroundColor: COLORS.secondary, borderRadius: SIZES.medium, marginVertical: 12 }}>
        <TouchableOpacity onPressIn={() => navigation.navigate("Home")}>
          <Ionicons name='camera-outline' size={24} style={{ marginHorizontal: 10, color: COLORS.gray }} />
        </TouchableOpacity>
        <View style={{ flex: 1, backgroundColor: COLORS.secondary, marginRight: SIZES.small, borderRadius: SIZES.small }}>
          <TextInput
            style={{ fontFamily: "regular", width: "100%", paddingHorizontal: 8 }}
            placeholder='what are you looking for' />
        </View>

        <View>
          <TouchableOpacity style={{ width: 50, backgroundColor: "#27592d", height: 30, borderRadius: SIZES.medium, alignItems: "center" }}>
            <Feather name='search' size={24} color={COLORS.offwhite} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search