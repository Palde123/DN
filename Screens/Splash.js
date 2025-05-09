import { Image, Platform, StyleSheet, Text, View } from "react-native";
import IconFile from "../Config/IconFile";
import { useEffect } from "react";

export default function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('nextscreen');
        }, 1500);
    }, []);
    return (
        <>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={IconFile.LOGO} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>Drink for a Friend</Text>
            </View>
        </>

    );
}
const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginTop: '85%',
        height: Platform.OS === 'android' ? 150 : 155,
        width: 190
    },
    textContainer: {
        marginTop: 16
    },
    text: {
        textAlign: 'center',
        fontSize: 26.5,
        fontWeight: '600',
        color: 'rgb(51,51,51)'
    }
})