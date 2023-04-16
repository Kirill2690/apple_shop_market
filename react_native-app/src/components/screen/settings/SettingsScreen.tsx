import React from 'react';
import { View,Text } from 'react-native';
import { StyleSheet } from 'react-native';
import {StackSettingsProps} from "../types";

interface SettingsScreenPropsType extends StackSettingsProps{
    age:number
}

export const SettingsScreen= ({age,route,navigation}:SettingsScreenPropsType) => {
    const {name,myAge,isDoneCourse}=route.params
  return (
    <View>
      <Text>SettingsScreen</Text>
        <Text>age:{age}</Text>
        <Text>name:{name}</Text>
        <Text>myAge:{myAge}</Text>
        <Text>{isDoneCourse?'isDoneCourse':'OOOPS...not isDoneCourse'}</Text>
    </View>
  )
};



const styles = StyleSheet.create({
    
});