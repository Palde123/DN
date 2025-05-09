import { StyleSheet, Text, View } from "react-native";
import OrderTab from "../../Component/OrderTab";

export default function Orders() {
    return (
        <>
            <View style={styles.main}>
                <Text style={styles.heading}>Orders</Text>
            </View>
            <OrderTab />
        </>

    );
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 24,
        fontWeight: '600',
        letterSpacing: 1,
        color: 'rgb(44,44,44)',
        marginTop: 70,
        alignSelf: 'center',
        marginBottom: 12
    },
    main: {
        backgroundColor: 'white'
    }
})