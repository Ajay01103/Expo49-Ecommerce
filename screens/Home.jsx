import { View, Text } from 'react-native'
import { Ionicons, Fontisto } from "@expo/vector-icons"
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { COLORS } from '../constants'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appbarWrapper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={24} />

          <Text style={styles.location}>Los Angelis</Text>

          <View style={{ alignItems: "flex-end"}}>
            <View style={styles.cartCount}>
            <Text style={{ fontFamily: "regular", fontWeight: "600", fontSize: 10, color: COLORS.lightWhite }}>1</Text>
            </View>
            <Fontisto name='shopping-bag' size={24} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home