import {StyleSheet, View, ViewProps} from "react-native";


interface BoxPropsType extends ViewProps {
    bgr: string,
    width: number,
    height?: number,
    mt?: number,      //marginTop
    mr?: number,      //marginRight
    mb?: number,     //marginBottom
    ml?: number      //marginLeft

}

export const Box = ({children, bgr, width, height, mt, mb, ml, mr, ...restProps}: BoxPropsType) => {
    if (children) {
        return <View {...restProps} style={[{
            backgroundColor: bgr,
            borderWidth: 1,
            width,
            margin: 3,
            height: height ?? width,
            marginTop: mt ? mt : undefined,
            marginRight: mr ? mr : undefined,
            marginBottom: mb ? mb : undefined,
            marginLeft: ml ? ml : undefined
        }]}>{children}</View>
    }
    return <View {...restProps} style={[restProps.style, {
        backgroundColor: bgr,
        borderWidth: 1,
        width,
        margin: 3,
        height: height ?? width,
        marginTop: mt ? mt : undefined,
        marginRight: mr ? mr : undefined,
        marginBottom: mb ? mb : undefined,
        marginLeft: ml ? ml : undefined
    }]}>{children}</View>
}




