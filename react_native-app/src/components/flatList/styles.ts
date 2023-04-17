import {Platform, StyleSheet} from "react-native";
import {PADDING, WIDTH} from "../../constants/contants";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cecece'
    },
    itemPhone: {
        backgroundColor: '#fff',
        width: (WIDTH - PADDING * 2) / 2 - 8,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.4)',
        borderRadius: 5,
        paddingTop: 12

    },
    phoneImage: {
        width: (WIDTH - PADDING * 2) / 2 - 8,
        height: (WIDTH - PADDING * 2) / 2 - 8
    },
    infoPhone: {
        marginTop: 19,
        marginBottom: 22,
        paddingLeft: 12,
        paddingRight: 15
    },
    phoneName: {
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 16
    },
    containerPhonePrice: {
        marginTop: 17,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    header: {
        borderWidth: 1,
        marginHorizontal: -PADDING,
        paddingTop: Platform.OS === 'ios' ? 50 : 20,
        backgroundColor: '#21201E',
        marginBottom: 19

    },
    footer: {
        marginHorizontal: -PADDING,
        backgroundColor: '#21201E'
    },
    scrollToTop: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollImg: {
        width: 50,
        height: 50,
    }
});
