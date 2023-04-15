import React from 'react';
import { View,Text } from 'react-native';
import { StyleSheet } from 'react-native';

interface SettingsScreenPropsType {
    age:number
}

export const SettingsScreen= ({age}:SettingsScreenPropsType) => {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  )
};



const styles = StyleSheet.create({
    
});