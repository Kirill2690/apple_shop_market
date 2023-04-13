import {StyleSheet, View, Text} from "react-native";


export const Footer = () => {
    return (
        <View style={styles.footerContent}>
            <Text style={styles.footerText}>
                © 2023 It-Incubator.io.All rights reserved
            </Text>
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