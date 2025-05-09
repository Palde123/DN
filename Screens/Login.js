import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconFile from "../Config/IconFile";

export default function Login({ navigation }) {
    return (
        <>
            {/* <View style={styles.MainImageContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.whiteBack} source={IconFile.WHITEBACK} />
                </TouchableOpacity>
                <Image style={styles.mainImage} source={IconFile.LOGIN} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.WelcomeText}>Welcome to</Text>
                <Text style={styles.AppName}>Drink for a Friend</Text>
            </View>
            <View style={styles.LoginViaContainer}>
                <Text style={styles.LoginViaText}>Login via</Text>
            </View> */}
            <View style={styles.iconView}>
                <TouchableOpacity style={styles.IconStyle} onPress={() => navigation.navigate('main')}>
                    <Image style={styles.icons} source={IconFile.APPLE} />
                </TouchableOpacity >
                <TouchableOpacity style={styles.IconStyle}>
                    <Image source={IconFile.FACEBOOK} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.IconStyle}>
                    <Image source={IconFile.GOOGLE} />
                </TouchableOpacity>
            </View >
            <View style={styles.LoginViaContainer}>
                <Text style={styles.LoginViaText}>Login via</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.WelcomeText}>Welcome to</Text>
                <Text style={styles.AppName}>Drink for a Friend</Text>
            </View>
            <Image style={styles.mainImage} source={IconFile.LOGIN} />
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.whiteBack} source={IconFile.WHITEBACK} />
            </TouchableOpacity>
        </>

    );
}
const styles = StyleSheet.create({
    MainImageContainer: {
        marginTop: 85,
        alignItems: 'center',
        right: 22,
    },
    mainImage: {
        height: Platform.OS === 'android' ? 410 : 450,
        width: Platform.OS === 'android' ? 322 : 340,
        bottom: 750,
        alignSelf: 'center',
        right: 22,
        marginTop: Platform.OS === 'ios' ? 15 : 50
    },
    textContainer: {
        bottom: 150,
        marginLeft: 29,
    },
    WelcomeText: {
        fontSize: 26,
        fontWeight: '400',
        color: 'rgb(50, 50, 50)',
        letterSpacing: Platform.OS === 'ios' ? 1 : 0
    },
    AppName: {
        fontSize: 35,
        marginTop: Platform.OS === 'ios' ? 7 : 1,
        fontWeight: 'bold',
        color: 'rgb(41,41,41)',
        letterSpacing: Platform.OS === 'ios' ? 1 : 0
    },
    LoginViaContainer: {
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? 600 : 570
    },
    LoginViaText: {
        fontSize: 19.5,
        fontWeight: '500',
        color: 'rgb(141,141,141)'
    },
    iconView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: Platform.OS === 'ios' ? 30 : 26,
        gap: Platform.OS === 'ios' ? 36.5 : 28,
    },
    icons: {
        height: 45,
        width: 45,
    },
    IconStyle: {
        height: 98,
        width: 98,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgb(195, 195, 195)',
        alignItems: 'center',
        justifyContent: 'center',
        top: Platform.OS === 'ios' ? 750 : 720
    },
    whiteBack: {
        alignSelf: 'center',
        right: Platform.OS === 'ios' ? 170 : 155,
        bottom: 20,
    }
})