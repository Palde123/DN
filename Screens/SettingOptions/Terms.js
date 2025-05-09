import { StyleSheet, Text, View, TouchableOpacity, Image, Platform } from "react-native";
import IconFile from "../../Config/IconFile";

export default function Terms({ navigation }) {
    return (
        <View>
            <View style={styles.topBar}>
                <Text style={styles.heading}>Terms and Conditions</Text>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image style={styles.backImage} source={IconFile.BACK} />
                </TouchableOpacity>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>A terms and conditions agreement signifies the relationship between the developer of a product or service and its end users. This legal document is not to be taken lightly, since it can protect a company from lawsuits, intellectual property theft, credit card chargebacks, and more.
                    We provide more detailed information in our blog about why you should have terms and conditions for your business, but if you’re reading this, you’re probably aware of that already. {'\n'}{'\n'}
                    In this post, we’ll show you the 15 best terms and conditions examples we found on the internet. These are publicly curated examples from large brands and well-known companies, for you to use as your personal swipe file. Later down the post, we’ve also included a free terms and conditions template that’s yours to use, edit, and repurpose.{'\n'}{'\n'}
                    Editors Note: Terms and conditions are also often referred to as terms of service or terms of use. When curating these examples, we've included all three variations from across the internet. So the examples mentioned here are also terms of service examples and terms of use examples.
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
        left: Platform.OS === 'ios' ? 91 : 80,
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