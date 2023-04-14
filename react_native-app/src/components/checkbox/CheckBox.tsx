import React from 'react';
import {Checkbox, HStack} from "native-base";



export const CheckBoxComponent = () => {
    return <HStack space={6}>
        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" />
        <Checkbox value="test" accessibilityLabel="This is a dummy checkbox" defaultIsChecked />
    </HStack>;
};


