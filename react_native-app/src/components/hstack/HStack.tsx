import React, {ReactNode} from "react";
import {View} from "react-native";

interface HStackPropsType {
    children: ReactNode

}



export const HStack = ({children}: HStackPropsType) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {children}
        </View>
    )
}