import {ReactNode} from "react";
import {View} from "react-native";

interface ZStackPropsType{
    children:JSX.Element[]|JSX.Element,
    reverse?:boolean
}

export const ZStack=({children}:ZStackPropsType)=>{
    return(
        <View>
            {children}
        </View>
    )
}