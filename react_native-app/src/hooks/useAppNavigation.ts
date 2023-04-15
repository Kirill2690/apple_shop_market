import {NavigationProp, useNavigation} from "@react-navigation/native";
import {MainStackType} from "../components/screen/types";


export type NavigationUseType = NavigationProp<MainStackType>

export const useAppNavigation = () => useNavigation<NavigationUseType>()
