import React, {ReactNode} from "react";
import {View} from "react-native";

interface ZStackPropsType {
    children: JSX.Element[] | JSX.Element,
    reverse?: boolean
}

//create function ---> add every children new
// property-absolute

const getAbsoluteChuldren = (children: JSX.Element[] | JSX.Element) => {
    let childrenArray = React.Children.toArray(children)
    return childrenArray.map((child: any) => {
        return React.cloneElement(
            child, {position: 'absolute'},
            child.props.children
        )
    })
}


export const ZStack = ({children}: ZStackPropsType) => {
    return (
        <View style={{position:'relative'}}>
            {getAbsoluteChuldren(children)}
        </View>
    )
}