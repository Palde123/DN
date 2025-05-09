import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from "react-native";
import IconFile from "../../Config/IconFile";

export default function Terms({ navigation }) {
    return (
        <View>
            <View style={styles.topBar}>
                <Text style={styles.heading}>Privacy Policy</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image style={styles.backImage} source={IconFile.BACK} />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>This policy explains how Narola Infotech collects, uses, and shares your personal information when you use our services. By using our services, you agree to these terms.
                    We may collect information like your name, email, and IP address when you register or interact with our website/app. We also use cookies to track website traffic.{'\n'}{'\n'}
                    We use your data to provide and improve our services, personalize your experience, and communicate with you. We may share your data with third parties, such as analytics providers, with your consent or as required by law.
                    You have the right to access, correct, or delete your personal data. You can contact us at [email address] to exercise these rights. We also offer opt-out options for certain data uses.
                    We take reasonable measures to protect your data, but no security system is foolproof. We may update this policy periodically, so check back for changes.{'\n'}{'\n'}
                    By using our services, you acknowledge and agree to our privacy practices.
                    Note: This is a simplified example. A real-world privacy policy would likely be longer and more detailed, especially if it covers specific data processing activities like targeted advertising or international data transfers. It's crucial to consult with legal counsel to ensure your privacy policy complies with applicable laws, such as GDPR, CCPA, or CalOPPA.
                </Text>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    textContainer: {
        marginTop: Platform.OS === 'android' ? 115 : 125,
        marginHorizontal: 20,
    },
    text: {
        fontSize: 15.5,
        lineHeight: 23,
        fontWeight: '600',
        color: 'rgb(51,51,51)'
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        top: Platform.OS === 'ios' ? 60 : 59,
        paddingHorizontal: 20,
    },
    heading: {
        left: Platform.OS === 'ios' ? 125 : 115,
        fontSize: 22.5,
        fontWeight: 'bold',
        marginTop: Platform.OS === 'ios' ? 20 : 14,
        color: 'rgb(55, 55, 55)'
    },
    backButton: {
        position: 'absolute',
        left: 22,
        top: Platform.OS === 'ios' ? 27 : 23,
    },
    backImage: {
        height: 17,
        width: 23,
    },
})