import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import IconFile from "../../Config/IconFile";
import { CommonActions } from "@react-navigation/native";

export default function Settings({ navigation }) {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.heading}>Settings</Text>
            </View>
            <View style={styles.iconView}>
                <TouchableOpacity onPress={() => navigation.navigate('profile')} style={styles.commonView}>
                    <Image style={styles.icons} source={IconFile.PROFILE} />
                    <Text style={styles.label}>Profile</Text>
                    <Image style={styles.next} source={IconFile.NEXT} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('working')} style={styles.commonView}>
                    <Image style={styles.icons} source={IconFile.WORKING} />
                    <Text style={styles.label}>How it works</Text>
                    <Image style={styles.next1} source={IconFile.NEXT} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('terms')} style={styles.commonView}>
                    <Image style={styles.icons1} source={IconFile.TERMS} />
                    <Text style={styles.label}>Terms and Conditions</Text>
                    <Image style={styles.next2} source={IconFile.NEXT} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('privacy')} style={styles.commonView}>
                    <Image style={styles.icons} source={IconFile.PRIVACY} />
                    <Text style={styles.label}>Privacy Policy</Text>
                    <Image style={styles.next3} source={IconFile.NEXT} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.commonView} onPress={() => navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [{ name: 'login' }],
                    })
                )}>
                    <Image style={styles.icons} source={IconFile.LOGOUT} />
                    <Text style={styles.label}>Logout</Text>
                    <Image style={styles.next4} source={IconFile.NEXT} />
                </TouchableOpacity>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 62.5,
        alignItems: 'center'
    },
    commonView: {
        flexDirection: 'row',
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 15,
        paddingVertical: 11,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderColor: 'rgb(230, 230, 230)'
    },
    heading: {
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 1,
        color: 'rgb(44,44,44)',
        marginTop: Platform.OS === 'ios' ? 10 : 5
    },
    icons: {
        height: 28,
        width: 26
    },
    icons1: {
        height: 30,
        width: 26
    },
    label: {
        marginLeft: 16.5,
        fontSize: 20,
        color: 'rgb(49, 49, 49)',
        fontWeight: Platform.OS === 'android' ? '500' : '600'
    },
    iconView: {
        marginTop: 25
    },
    next: {
        left: Platform.OS === 'ios' ? 287 : 260,
        alignSelf: 'center',
        height: 10,
        width: 6,
    },
    next1: {
        left: Platform.OS === 'ios' ? 231 : 201,
        alignSelf: 'center',
        height: 10,
        width: 6
    },
    next2: {
        left: Platform.OS === 'ios' ? 151 : 119,
        alignSelf: 'center',
        height: 10,
        width: 6
    },
    next3: {
        left: Platform.OS === 'ios' ? 221 : 190,
        alignSelf: 'center',
        height: 10,
        width: 6
    },
    next4: {
        left: Platform.OS === 'ios' ? 281 : 254,
        alignSelf: 'center',
        height: 10,
        width: 6
    },
})