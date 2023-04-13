import React, {ReactNode} from "react";
import {View} from "react-native";

interface ZStackPropsType {
    children: JSX.Element[] | JSX.Element,
    reverse?: boolean
}

//create function ---> add every children new
// property-absolute

const getAbsoluteChuldren = (children: JSX.Element[] | JSX.Element, reverse: boolean) => {
    let childrenArray = React.Children.toArray(children)
    if (reverse) {
        childrenArray = childrenArray.reverse()
    }
    return childrenArray.map((child: any) => {
        return React.cloneElement(
            child, {position: 'absolute'},
            child.props.children
        )
    })
}


export const ZStack = ({children, reverse = false}: ZStackPropsType) => {
    return (
        <View style={{position: 'relative'}}>
            {getAbsoluteChuldren(children, reverse)}
        </View>
    )
}