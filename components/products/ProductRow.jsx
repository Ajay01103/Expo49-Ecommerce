import { FlatList, View } from 'react-native'
import { SIZES } from '../../constants/index'
import ProductCardView from './ProductCardView'

const ProductRow = () => {
  const products = [1, 2, 3, 4]  
  return (
    <View style={{ marginTop: 10, padding: 8}}>
        <FlatList 
         data={products}
         renderItem={({item}) => (
            <ProductCardView />
         )}
         horizontal
         contentContainerStyle={{ columnGap: SIZES.medium}}
         showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default ProductRow