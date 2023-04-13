import React, {ReactNode} from "react";
import {ScrollView, View} from "react-native";
import {PADDING, WIDTH} from "../../constants/contants";

interface HStackPropsType {
    children: ReactNode

}


export const HStack = ({children}: HStackPropsType) => {
    let sumWidtch = 0
    React.Children.forEach(children, (child, index) => {
        if (!React.isValidElement(child)) return
        const {width} = child.props
        sumWidtch += width
    })
    if ((WIDTH - PADDING * 2) < sumWidtch) {
        return <ScrollView horizontal
                           showsHorizontalScrollIndicator={false}
                           style={{marginHorizontal: -PADDING}}>
            {children}
        </ScrollView>
    }
    return (
        <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
            {children}
        </View>
    )
}