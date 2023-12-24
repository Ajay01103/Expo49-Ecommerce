import { View, Text, TouchableOpacity, Image } from "react-native"
import React, { useState } from "react"
import { SIZES, COLORS } from "../constants/index"
import { Ionicons, SimpleLineIcons, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons"

const ProductDetails = ({ navigation }) => {
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }
  return (
    <View>
      <View>
        <Image
          width="100%"
          height={280} // later check for the width previous width was 250
          source={{
            uri: "https://5.imimg.com/data5/WG/WN/MY-41057716/designer-bedroom-furniture-set-500x500.jpg",
          }}
          style={{ resizeMode: "stretch" }}
        />
      </View>

      <View
        style={{
          marginTop: -SIZES.large,
          backgroundColor: COLORS.lightWhite,
          width: SIZES.width,
          borderTopLeftRadius: SIZES.medium,
          borderTopRightRadius: SIZES.medium,
        }}
      >
        <View
          style={{
            marginHorizontal: 20,
            paddingBottom: SIZES.large,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: SIZES.width - 44,
            top: 20,
          }}
        >
          <Text style={{ fontFamily: "bold", fontSize: SIZES.medium, textAlign: "center" }}>
            Product
          </Text>
          <View style={{ backgroundColor: COLORS.secondary, borderRadius: SIZES.large }}>
            <Text
              style={{
                paddingHorizontal: 10,
                fontFamily: "semibold",
                fontSize: SIZES.medium,
                textAlign: "center",
              }}
            >
              $ 66.00
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingBottom: SIZES.small,
            flexDirection: "row",
            justifyContent: "space-between",
            width: SIZES.width - 10,
            // height: "100%",
            alignItems: "center",
            top: 5,
          }}
        >
          <View
            style={{
              top: SIZES.large,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginHorizontal: SIZES.large,
            }}
          >
            {[1, 2, 3, 4, 5].map((rating, i) => (
              <Ionicons
                key={i}
                name="star"
                size={24}
                color="gold"
              />
            ))}
            <Text
              style={{
                color: COLORS.gray,
                fontFamily: "medium",
                marginLeft: 4,
                top: 3,
                textAlign: "center",
              }}
            >
              (4.8)
            </Text>
          </View>

          <View
            style={{
              top: SIZES.large,
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              marginHorizontal: SIZES.large,
            }}
          >
            <TouchableOpacity onPress={() => increment()}>
              <SimpleLineIcons
                name="plus"
                size={20}
                color="black"
              />
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 6 }}>{count}</Text>
            <TouchableOpacity onPress={() => decrement()}>
              <SimpleLineIcons
                name="minus"
                color="black"
                size={20}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: SIZES.large * 2, marginHorizontal: SIZES.large }}>
          <Text style={{ fontFamily: "medium", fontSize: SIZES.large - 2 }}>Description</Text>
          <Text
            style={{
              fontFamily: "regular",
              fontSize: SIZES.small,
              textAlign: "justify",
              marginBottom: SIZES.small,
            }}
          >
            The characteristics of the furniture can be described in various ways. These include the
            design, materials used, functionality, and overall aesthetic appeal. The design of the
            furniture refers to its shape, style, and arrangement of elements. The materials used in
            the construction of the furniture can range from wood, metal, plastic, or a combination
            of these. The functionality of the furniture refers to its purpose and how well it
            serves its intended use. Lastly, the overall aesthetic appeal of the furniture
            encompasses its visual appeal, color, texture, and any decorative elements incorporated
            into its design.
          </Text>
        </View>

        <View style={{ marginBottom: SIZES.small }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginHorizontal: 12,
              backgroundColor: COLORS.secondary,
              padding: 5,
              borderRadius: SIZES.large,
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="location-outline"
                size={20}
              />
              <Text style={{ fontFamily: "regular", marginLeft: 4 }}>Las Vegas, USA</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="truck-delivery-outline"
                size={20}
              />
              <Text style={{ fontFamily: "regular", paddingHorizontal: 4 }}>Free Delivery</Text>
            </View>
          </View>
        </View>

        <View
          style={{
            paddingBottom: SIZES.small,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: SIZES.width - 44,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: SIZES.width * 0.7,
              backgroundColor: "#4C997B",
              paddingTop: 8,
              paddingBottom: 8,
              // padding: SIZES.small,
              borderRadius: SIZES.large,
              marginLeft: 12,
            }}
          >
            <Text
              style={{
                fontFamily: "regular",
                fontSize: SIZES.medium,
                color: COLORS.lightWhite,
                textAlign: "center",
              }}
            >
              Buy Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 65,
              height: 38,
              borderRadius: 45,
              marginLeft: 18,
              paddingTop: 8,
              paddingBottom: 8,
              paddingHorizontal: 10,
              margin: SIZES.small,
              backgroundColor: "#2C312F",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Fontisto
              name="shopping-bag"
              size={24}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ProductDetails
