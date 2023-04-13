import {StyleSheet, View, ViewProps} from "react-native";


interface BoxPropsType extends ViewProps{
    bgr: string,
    width: number,
    height?: number
}

export const Box = ({children,bgr, width, height,...restProps}: BoxPropsType) => {
    if (children) {
        return <View {...restProps} style={[{
            backgroundColor: bgr,
            borderWidth: 1,
            width,
            margin: 3,
            height: height ?? width
        }]}>{children}</View>
    }
    return <View {...restProps} style={[restProps.style, {
        backgroundColor: bgr,
        borderWidth: 1,
        width,
        margin: 3,
        height: height ?? width
    }]}>{children}</View>
}




