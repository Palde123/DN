import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconFile from "../Config/IconFile";

export default function Notification({ navigation }) {
    return (
        <>
            <View style={styles.view}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backButton} source={IconFile.BACK} />
                </TouchableOpacity>

                <Text style={styles.heading}>Notifications </Text>
            </View>
            <View style={styles.textView}>
                <Text style={styles.text}>Jonathan had Ordered  Loaded Potato Fries for you</Text>
            </View>
            <Text style={styles.time}>09.00PM</Text>

        </>

    );
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: 75,
        alignItems: 'center'
    },
    heading: {
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 1,
        color: 'rgb(56, 56, 56)',
    },
    backButton: {
        position: 'absolute',
        right: Platform.OS === 'android' ? 160 : 173,
        height: 18,
        width: 24
        // top: Platform.OS === 'ios' ? 23 : 23,
    },
    textView: {
        bottom: Platform.OS === 'android' ? 730 : 766,
        marginHorizontal: 20
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
        letterSpacing: 1,
        lineHeight: 25,
        color: 'rgb(43, 43, 43)'
    },
    time: {
        bottom: Platform.OS === 'android' ? 723 : 755,
        marginHorizontal: 20,
        color: 'rgb(179, 179, 179)',
        fontWeight: '500'
    }
})