import React from "react";
import {NativeBaseProvider, StatusBar} from "native-base";
import {FlatListComponent} from "./src/components/flatList/FlatListComponent";
import {LoginScreen} from "./src/components/screen/register/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack=createNativeStackNavigator()
export default function App() {
return(
    <NativeBaseProvider>
     <NavigationContainer>
         <StatusBar hidden={true} />
         <Stack.Navigator>
             <Stack.Screen name={'Login'} component={LoginScreen}/>
             <Stack.Screen  name={'Product'} component={FlatListComponent}/>
         </Stack.Navigator>
     </NavigationContainer>
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

