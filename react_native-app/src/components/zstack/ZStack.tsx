import {ReactNode} from "react";
import {View} from "react-native";

interface ZStackPropsType{
    children:JSX.Element[]|JSX.Element,
    reverse?:boolean
}

export const VStack=({children}:VStackProps)=>{
    return(
        <View>
            {children}
        </View>
    )
}