import React from 'react';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {FlatListComponent} from "../flatList/FlatListComponent";


interface PropsTypes {

}

const Stack = createNativeStackNavigator()

export const StackNav = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Product'} component={FlatListComponent}/>
        </Stack.Navigator>


    )
};


const styles = StyleSheet.create({});