import React from 'react';
import {View, Text, Button} from 'react-native';
import {StyleSheet} from 'react-native';
import {useAppNavigation} from "../../../hooks/useAppNavigation";
import {BasketIcon} from "../../svg/BasketIcon";
import {createDrawerNavigator} from "@react-navigation/drawer";

interface HomeScreenPropsTypes {

}

export const HomeScreen = (props: HomeScreenPropsTypes) => {
    const navigation = useAppNavigation()
    console.log("HomeScreen props", JSON.stringify(props, null, 2))
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title={"Jump to Details screen"} onPress={() => {
                navigation.navigate('Details')
            }}/>
            <Button
                onPress={() => navigation.navigate('MyModal')}
                title="Open Modal"
            />
        </View>
    )
};


const styles = StyleSheet.create({});



