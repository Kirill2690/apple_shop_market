import {useEffect, useRef, useState} from "react";
import {description, images, img_scroll, ItemType, prices, raiting, titles} from "../../data/data";
import {
    FlatList,
    Image,
    ListRenderItem,
    Pressable,
    RefreshControl,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {BasketIcon} from "../svg/BasketIcon";
import {PADDING} from "../../constants/contants";
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {Empty} from "../empty/Empty";
import {styles} from "./styles";
import {Raiting} from "../raiting/Raiting";


export const FlatListComponent=()=>{
    const [fakeData, setFakeData] = useState<ItemType[]>([...Array(8)].map((_, index) => ({
        id: index + 1,
        title: titles[index % titles.length],
        price: prices[index % prices.length],
        image: images[index % images.length],
        description: description[index % description.length],
        raiting: raiting[index % raiting.length]

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
                <Raiting value={raiting.length}/>
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
            description: description[index % description.length],
            raiting: raiting[index % raiting.length]

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
                    description: description[index % description.length],
                    raiting: raiting[index % raiting.length]
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
            {contentVerticalOffset > 400 && <TouchableOpacity style={styles.scrollToTop} onPress={() => {
                flatListRef.current?.scrollToOffset({animated: true, offset: 0})
            }}>
                <Image source={img_scroll} style={styles.scrollImg}/>
            </TouchableOpacity>}
        </View>

    );
}