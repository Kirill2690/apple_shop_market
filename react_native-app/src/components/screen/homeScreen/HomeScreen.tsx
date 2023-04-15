import React from 'react';
import {View, Text, Button} from 'react-native';
import {StyleSheet} from 'react-native';
import {useAppNavigation} from "../../../hooks/useAppNavigation";

interface HomeScreenPropsTypes {

}

export const HomeScreen = ({}: HomeScreenPropsTypes) => {
    const navigation = useAppNavigation()
    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title={"Jump to Details screen"} onPress={() => {
                navigation.navigate('Details')
            }}/>
        </View>
    )
};


const styles = StyleSheet.create({});



