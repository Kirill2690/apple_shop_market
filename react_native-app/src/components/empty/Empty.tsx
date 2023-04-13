import {StyleSheet, Text, View} from "react-native";


export const Empty = () => {
    return (
        <View style={styles.emptyContent}>
            <Text style={styles.emptyTitle}>
                Oops!This place looks empty
            </Text>
            <Text style={styles.emptySubTitle}>
                Refresh page or clear filter
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    emptyContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    emptyTitle: {
        fontWeight: '500',
        fontSize: 20,
        lineHeight: 24
    },
    emptySubTitle: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 24
    }

})