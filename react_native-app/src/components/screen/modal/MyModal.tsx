import React from 'react';
import {View, Text, Button} from 'react-native';
import {StyleSheet} from 'react-native';
import {useAppNavigation} from "../../../hooks/useAppNavigation";


interface MyModalPropsType {

}

export const MyModal = ({}: MyModalPropsType) => {
    const navigation = useAppNavigation()
    const onPressHandler=()=>{
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>This is a modal!</Text>
            <Button onPress={onPressHandler} title="Dismiss"/>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize:30
    }
});