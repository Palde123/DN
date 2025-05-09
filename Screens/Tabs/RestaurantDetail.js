import { View, Text, Image, StyleSheet } from "react-native";
import { data } from "../../Data/Restaurant";


export default function RestaurantDetail({ route }) {
    const RestId = route.params.RestId;
    const restaurant = data.find((rest) => rest.id === RestId)
    return (
        <View style={styles.container}>
            <Text>{restaurant.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 90
    }
})