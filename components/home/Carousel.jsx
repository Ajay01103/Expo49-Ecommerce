import { View } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants/index'

const Carousel = () => {
    const images = [
        "https://5.imimg.com/data5/WG/WN/MY-41057716/designer-bedroom-furniture-set-500x500.jpg",
        "https://5.imimg.com/data5/AP/YY/MY-41057716/master-bed-room-500x500.jpg",
        "https://5.imimg.com/data5/SE/RU/MI/SELLER-6059900/office-partition-services-500x500.jpg",
    ]
    return (
        <View style={{ flex: 1, marginTop: 4, alignItems: "center" }}>
            <SliderBox
                images={images}
                dotColor="#27592d"
                inactiveDotColor={COLORS.secondary}
                paginationBoxVerticalPadding={4}
                dotStyle={{
                    width: 8,
                    height: 8,
                    borderRadius: 12,
                    marginHorizontal: 0,
                    padding: 0,
                    margin: 0
                }}
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                paginationBoxStyle={{
                    position: "absolute",
                    bottom: 0,
                    padding: 0,
                    alignItems: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                    paddingVertical: 10
                }}
                ImageComponentStyle={{ borderRadius: 10, width: '97%', marginTop: 5 }}
                imageLoadingColor="#2196F3"
            />
        </View>
    )
}

export default Carousel