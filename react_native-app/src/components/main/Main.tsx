import {View, StyleSheet, Text} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "../screen/homeScreen/HomeScreen";
import {MainStackType} from "../screen/types";
import {DetailsScreen} from "../screen/details/DetailsScreen";
import {SettingsScreen} from "../screen/settings/SettingsScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

/*const Stack = createNativeStackNavigator<MainStackType>()*/
const Tab = createBottomTabNavigator<MainStackType>()

export const Main = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-home'
                                : 'ios-home-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        } else if (route.name === 'Details') {
                            iconName = focused ? 'ios-ellipsis-horizontal-circle' : 'ios-ellipsis-horizontal-circle-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: 'green',
                    tabBarInactiveTintColor: 'gray',
                })}
            >
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