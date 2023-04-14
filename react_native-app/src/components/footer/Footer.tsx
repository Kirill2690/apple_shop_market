import {StyleSheet, View, Text, ActivityIndicator} from "react-native";


type FooterPropsType = {
    isLoading: boolean
}


export const Footer = ({isLoading}: FooterPropsType) => {
    return (
        <View style={styles.footerContent}>
            {isLoading ? <ActivityIndicator/> :
                <Text style={styles.footerText}>
                    © 2023 It-Incubator.io.All rights reserved
                </Text>}

        </View>
    )
}


const styles = StyleSheet.create({
    footerContent: {
        paddingTop: 15,
        paddingBottom: 25,
        alignItems: 'center'
    },
    footerText: {
        color: '#FFF'
    }
})