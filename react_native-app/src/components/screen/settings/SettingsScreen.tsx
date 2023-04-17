import React from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {StackSettingsProps} from "../types";

interface SettingsScreenPropsType extends StackSettingsProps {
    age: number
}

export const SettingsScreen = ({age, route, navigation}: SettingsScreenPropsType) => {
    const params = route.params
    return (
        <View>
            <Text>SettingsScreen</Text>
            {params && (
                <>
                    <Text>name:{params.name}</Text>
                    <Text>myAge:{params.myAge}</Text>
                    <Text>{params.isDoneCourse ? 'isDoneCourse' : 'OOOPS...not isDoneCourse'}</Text>
                </>
            )
            }
            <Text>age:{age}</Text>
        </View>
    )
};


const styles = StyleSheet.create({});