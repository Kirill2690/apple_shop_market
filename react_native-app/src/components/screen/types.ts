import {NativeStackScreenProps} from "@react-navigation/native-stack";

export type MainStackType = {
    Home: undefined,
    Details: undefined,
    Settings:{
        name:string,
        myAge:number,
        isDoneCourse:boolean
    }
}



export  type StackSettingsProps=NativeStackScreenProps<MainStackType,'Settings'>