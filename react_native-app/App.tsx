/*
import {
    FlatList, Image,
    ListRenderItem, Platform, Pressable, RefreshControl,
    StatusBar,
    StyleSheet, Text, TouchableOpacity,
    View
} from 'react-native';

import {WIDTH} from "./src/constants/contants";
import {PADDING} from "./src/constants/contants";
import {BasketIcon} from "./src/components/svg/BasketIcon";
import {Header} from './src/components/header/Header'
import {Footer} from "./src/components/footer/Footer";
import {Empty} from "./src/components/empty/Empty";
import {useEffect, useRef, useState} from "react";


const img_scroll=require('./assets/up-arrow_icon-icons.com_62213.png')

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
    const [fakeData, setFakeData] = useState<ItemType[]>([...Array(12)].map((_, index) => ({
        id: index + 1,
        title: titles[index % titles.length],
        price: prices[index % prices.length],
        image: images[index % images.length],

    })))

    const flatListRef = useRef<FlatList>(null)
    const [contentVerticalOffset, setContentVerticalOffset] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [page, setPage] = useState(1)

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
    const onEndReached = () => {
        if (isLoading || page >= 3) return
        setIsLoading((prev) => !prev)
        setPage((prev) => prev + 1)
    }
    useEffect(() => {
        const newFakeData = [...Array(6)].map((_, index) => ({
            id: page * (index + 1) + index + 1,
            title: titles[index % titles.length],
            price: prices[index % prices.length],
            image: images[index % images.length],
        }))
        setTimeout(() => {
            setFakeData((prev) => [...prev, ...newFakeData])
            setIsLoading(false)
        }, 3000)
    }, [page])

    useEffect(() => {
        if (isRefreshing) {
            setTimeout(() => {
                setFakeData([...Array(12)].map((_, index) => ({
                    id: index + 1,
                    title: titles[index % titles.length],
                    price: prices[index % prices.length],
                    image: images[index % images.length],
                })))
                setIsRefreshing(false)
                setPage(1)
            }, 3000)

        }
    }, [isRefreshing])

    const onRefresh = () => {
        setIsRefreshing(true)
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <FlatList onEndReachedThreshold={0.2}
                      onEndReached={onEndReached} ref={flatListRef} data={fakeData} renderItem={renderItem}
                      numColumns={2}
                      contentContainerStyle={{paddingHorizontal: PADDING, flexGrow: 1}}
                      columnWrapperStyle={{justifyContent: 'space-between'}}
                      ListHeaderComponent={Header}
                      ListHeaderComponentStyle={styles.header}
                      stickyHeaderIndices={[0]}
                      ListFooterComponent={() => <Footer isLoading={isLoading}/>}
                      ListFooterComponentStyle={styles.footer}
                      ListEmptyComponent={Empty}
                      refreshControl={
                          <RefreshControl
                              refreshing={isRefreshing}
                              onRefresh={onRefresh}
                          />

                      }
                      onScroll={(event) => {
                          setContentVerticalOffset(event.nativeEvent.contentOffset.y)
                      }}
            />
            {contentVerticalOffset > 400 && <TouchableOpacity style={styles.scrollToTop}  onPress={() => {
                flatListRef.current?.scrollToOffset({animated: true, offset: 0})
            }}>
                <Image source={img_scroll} style={styles.scrollImg}/>
            </TouchableOpacity>}
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
    },
    scrollToTop: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollImg:{
        width: 50,
        height: 50,
    }
});


type ItemType = {
    id: number,
    title: string,
    price: number,
    image: any
}


*/

import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {Main} from "./src/components/main/Main";



export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style={'light'}/>
            <Main/>
        </NavigationContainer>
    )
}


