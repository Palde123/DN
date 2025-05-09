import { Image, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import IconFile from "../../Config/IconFile";

export default function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.back} source={IconFile.BACK} />
                </TouchableOpacity>
                <Text style={styles.heading}>Profile</Text>
            </View>
            <Image style={styles.profilePhoto} source={IconFile.PROFILEPHOTO} />
            <View style={styles.inputView}>
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.textInput} />
                <Text style={styles.label}>Logged in with</Text>
                <View>
                    <TextInput style={styles.textInput} />
                    <Image style={styles.google} source={IconFile.GOOGLE} />
                </View>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 70
    },
    top: {
        flexDirection: 'row',
        gap: 133
    },
    heading: {
        fontSize: 22,
        fontWeight: '600',
        letterSpacing: 1,
        color: 'rgb(46,46,46)'
    },
    back: {
        marginLeft: 25,
        height: 18,
        width: 25
    },
    profilePhoto: {
        alignSelf: 'center',
        height: 125,
        width: 125,
        borderRadius: 62.5,
        marginTop: 40
    },
    inputView: {
        marginTop: 40,
        marginLeft: 40,
        marginRight: 40
    },
    label: {
        fontSize: 15,
        color: 'rgb(137, 137, 137)'
    },
    textInput: {
        paddingVertical: 16,
        borderWidth: 0.3,
        borderColor: 'rgb(145, 145, 145)',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        marginBottom: 30,
        fontSize: 16.5,
        fontWeight: '700',
        color: 'rgb(59, 59, 59)',
    },
    google: {
        left: Platform.OS === 'ios' ? 320 : 290,
        bottom: 72,
        height: 32,
        width: 32
    }
})