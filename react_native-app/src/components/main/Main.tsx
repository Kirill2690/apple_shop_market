import {View,StyleSheet,Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export const Main=()=>{
return(
    <View style={styles.container}>
        <Text>Main</Text>
    </View>
)
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center',
        backgroundColor:'#FFFFFF'
    }
})