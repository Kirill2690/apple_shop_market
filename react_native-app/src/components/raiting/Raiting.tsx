import React from 'react';
import { View,Text } from 'react-native';
import { StyleSheet } from 'react-native';
import {Colors} from "../../constants/colors";
import {HStack} from "native-base";
import {FontAwesome} from "@expo/vector-icons"

interface RaitingPropsType {
value:number,
  text?:string
}

export const Raiting = ({value,text}:RaitingPropsType) => {
  const size=12
  const color=Colors.paypal
  return (
      <HStack space={0.4} mt={1} alignItems='center'>
        <FontAwesome
        name={value>=1?"star":value>=0.5?"star-half-o":'star-o'}
        color={color}
        size={size}/>
          <FontAwesome
              name={value>=1?"star":value>=0.5?"star-half-o":'star-o'}
              color={color}
              size={size}/>
          <FontAwesome
              name={value>=2?"star":value>=1.5?"star-half-o":'star-o'}
              color={color}
              size={size}/>
          <FontAwesome
              name={value>=3?"star":value>=2.5?"star-half-o":'star-o'}
              color={color}
              size={size}/>
          <FontAwesome
              name={value>=4?"star":value>=3.5?"star-half-o":'star-o'}
              color={color}
              size={size}/>


      </HStack>



  )
};



const styles = StyleSheet.create({

});