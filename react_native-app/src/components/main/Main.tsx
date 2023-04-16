import {View, StyleSheet, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "../screen/homeScreen/HomeScreen";
import {MainStackType} from "../screen/types";
import {DetailsScreen} from "../screen/details/DetailsScreen";
import {SettingsScreen} from "../screen/settings/SettingsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

/*const Stack = createNativeStackNavigator<MainStackType>()*/
const Tab = createBottomTabNavigator<MainStackType>()

export const Main = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator>
                <Tab.Screen name={'Home'} component={HomeScreen}/>
                <Tab.Screen name={'Details'} component={DetailsScreen}/>
                <Tab.Screen name={'Settings'}>{(props) =>
                    <SettingsScreen {...props} age={33}/>
                }</Tab.Screen>
            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    }
})