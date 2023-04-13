import {Pressable, StyleSheet, View} from "react-native";
import {BurgerIcon} from "../svg/BurgerIcon";
import {BasketIcon} from "../svg/BasketIcon";


export const Header=()=>{
    return(
        <View style={styles.headerContent}>
            <Pressable>
                <BurgerIcon/>
            </Pressable>
            <Pressable>
                <BasketIcon colorFill={'#FFF'}/>
            </Pressable>
        </View>
    )
}


const styles=StyleSheet.create({
    headerContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:16,
        paddingVertical:12
    }
})