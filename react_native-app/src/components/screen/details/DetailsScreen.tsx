import React from 'react';
import {View, Text, Button} from 'react-native';
import {StyleSheet} from 'react-native';
import {useAppNavigation} from "../../../hooks/useAppNavigation";

interface DetailsScreenPropsType {

}

export const DetailsScreen = ({}: DetailsScreenPropsType) => {
    const navigation = useAppNavigation()
    return (
        <View>
            <Text>DetailsScreen</Text>
            <Button title={"Jump to Home screen"} onPress={() => {
            navigation.navigate('Settings',{name:'Kirrll',myAge:33,isDoneCourse:false})}}/>
        </View>
    )
};


const styles = StyleSheet.create({});