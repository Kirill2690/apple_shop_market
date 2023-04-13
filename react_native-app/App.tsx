/*
import {
    FlatList, Image,
    ListRenderItem, Platform, Pressable,
    StatusBar,
    StyleSheet, Text,
    View
} from 'react-native';

import {WIDTH} from "./src/constants/contants";
import {PADDING} from "./src/constants/contants";
import {BasketIcon} from "./src/components/svg/BasketIcon";
import {Header} from './src/components/header/Header'
import {Footer} from "./src/components/footer/Footer";
import {Empty} from "./src/components/empty/Empty";


const images = [
    require('./assets/image1.png'),
    require('./assets/image2.png'),
    require('./assets/image3.png'),
    require('./assets/image4.png'),
    require('./assets/image5.png'),
    require('./assets/image6.png'),
]


const titles = [
    'Apple Iphone 13 128GB Blue',
    'Apple Iphone 14 Pro 128GB Space Black',
    'Apple Iphone 12 128GB Purple',
    'Apple Iphone SE 128Gb 2022 Midnight',
    'Apple Iphone 13 512GB Midnight',
    'Apple Iphone 14 Pro Max 256GB Purple',

]

const prices = [999, 1199, 799, 599, 899, 1199]


export default function App() {
    const fakeData: ItemType[] = [...Array(12)].map((_, index) => ({
        id: index + 1,
        title: titles[index % titles.length],
        price: prices[index % prices.length],
        image: images[index % images.length],

    }))
    const renderItem: ListRenderItem<ItemType> = ({item}) => {

        return <View style={styles.itemPhone}>
            <Image style={styles.phoneImage} source={item.image} resizeMode={'contain'}/>
            <View style={styles.infoPhone}>
                <Text style={styles.phoneName}>{item.title}</Text>
                <View style={styles.containerPhonePrice}>
                    <Text>$ {item.price}</Text>
                    <Pressable>
                        <BasketIcon/>
                    </Pressable>
                </View>

            </View>
        </View>
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <FlatList data={fakeData} renderItem={renderItem} numColumns={2}
                      contentContainerStyle={{paddingHorizontal: PADDING,flexGrow:1}}
                      columnWrapperStyle={{justifyContent: 'space-between'}}
                      ListHeaderComponent={Header}
                      ListHeaderComponentStyle={styles.header}
                      stickyHeaderIndices={[0]}
                      ListFooterComponent={Footer}
                      ListFooterComponentStyle={styles.footer}
                      ListEmptyComponent={Empty}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cecece'
    },
    itemPhone: {
        backgroundColor: '#fff',
        width: (WIDTH - PADDING * 2) / 2 - 8,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        borderRadius: 5,
        paddingTop: 12

    },
    phoneImage: {
        width: (WIDTH - PADDING * 2) / 2 - 8,
        height: (WIDTH - PADDING * 2) / 2 - 8
    },
    infoPhone: {
        marginTop: 19,
        marginBottom: 22,
        paddingLeft: 12,
        paddingRight: 15
    },
    phoneName: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16
    },
    containerPhonePrice: {
        marginTop: 17,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    header: {
        borderWidth: 1,
        marginHorizontal: -PADDING,
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        backgroundColor: '#21201E',
        marginBottom: 19

    },
    footer: {
        marginHorizontal: -PADDING,
        backgroundColor: '#21201E'
    }
});


type ItemType = {
    id: number,
    title: string,
    price: number,
    image: any
}

*/


import {ChildrenComponents} from "./src/components/children/ChildrenComponents";

export default  function App(){
    return(
        <ChildrenComponents/>
    )
}