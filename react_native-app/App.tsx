import React from "react";
import {NativeBaseProvider} from "native-base";
import {FlatListComponens} from "./src/components/flatList/FlatListComponent";


export default function App() {
return(
    <NativeBaseProvider>
        <FlatListComponens/>
    </NativeBaseProvider>

)
}







/*
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import {Main} from "./src/components/main/Main";



export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style={'light'}/>
            <Main/>
        </NavigationContainer>
    )
}

*/

