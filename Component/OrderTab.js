import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyOrder from "../OrdersTab/MyOrder";
import ForaFriend from "../OrdersTab/ForaFriend";
import Orderedforme from "../OrdersTab/Orderedforme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Platform } from "react-native";

export default function OrderTab() {
    const Tab = createBottomTabNavigator();
    return (
        <SafeAreaProvider>
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarPosition: 'top',
                tabBarIcon: () => null,
                tabBarStyle: { height: 60, width: Platform.OS === 'android' ? 375 : 400, alignSelf: 'center', borderRadius: 19, backgroundColor: 'white', borderColor: 'rgb(151, 151, 151)', borderWidth: 0.7 },
            }}>
                <Tab.Screen name="MyOrder" component={MyOrder} options={{
                    tabBarLabel: 'My Orders',
                    tabBarLabelStyle: { fontSize: 14, bottom: 15.7, fontWeight: 'bold', color: 'white', backgroundColor: 'rgb(0,73,155)', paddingHorizontal: 18, paddingVertical: 5, borderRadius: 10 }
                }} />
                <Tab.Screen name="ForaFriend" component={ForaFriend} options={{
                    tabBarLabel: 'For a Friend',
                    tabBarLabelStyle: { fontSize: 14, bottom: 15.7, fontWeight: 'bold' }
                }} />
                <Tab.Screen name="Orderedforme" component={Orderedforme} options={{
                    tabBarLabel: 'Ordered for me',
                    tabBarLabelStyle: { fontSize: 14, bottom: 15.7, fontWeight: 'bold' }
                }} />
            </Tab.Navigator>
        </SafeAreaProvider>

    );
}