import {View, StyleSheet, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "../screen/homeScreen/HomeScreen";
import {MainStackType} from "../screen/types";
import {DetailsScreen} from "../screen/details/DetailsScreen";
import {SettingsScreen} from "../screen/settings/SettingsScreen";

const Stack = createNativeStackNavigator<MainStackType>()

export const Main = () => {
    return (
        <View style={styles.container}>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeScreen}/>
                <Stack.Screen name={'Details'} component={DetailsScreen}/>
                <Stack.Screen name={'Settings'}>{(props) =>
                    <SettingsScreen {...props} age={33}/>
                }</Stack.Screen>
            </Stack.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"

    }
})