import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, StatusBar, Text, View } from "react-native";
import Splash from "./Screens/Splash";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NextScreen from "./Screens/NextScreen";
import Login from "./Screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./Screens/Tabs/HomeScreen";
import Orders from "./Screens/Tabs/Orders";
import Settings from "./Screens/Tabs/Settings";
import IconFile from "./Config/IconFile";
import Profile from "./Screens/SettingOptions/Profile";
import HowItWorks from "./Screens/SettingOptions/HowItWorks";
import Terms from "./Screens/SettingOptions/Terms";
import Privacy from "./Screens/SettingOptions/Privacy";
import RestaurantDetail from "./Screens/Tabs/RestaurantDetail";
import Notification from "./Screens/Notification";


export default function Route() {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();

    function HomeTabs() {
        return (
            <Tab.Navigator screenOptions={{
                headerShown: false,
                tabBarStyle: { height: 100 },
            }} initialRouteName="home">

                <Tab.Screen name="orders" component={Orders} options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ fontSize: 14, color: 'black', bottom: 3, fontWeight: focused ? '800' : '500' }}>Orders</Text>
                    ),
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'black',
                    tabBarItemStyle: { left: 19 },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <View>
                                    <Image source={IconFile.DOT} style={{ alignSelf: 'center', bottom: 5, height: 7.5, width: 7.5 }} />
                                    <Image source={IconFile.ORDERSELECTED} style={{ height: 22, width: 32 }} />
                                </View>
                            );
                        }
                        else {
                            return <Image source={IconFile.ORDER} style={{ height: 25, width: 35 }} />
                        }
                    },
                    tabBarIconStyle: { height: 50 },
                    tabBarLabelStyle: { fontSize: 14, bottom: 3 }
                }} />
                <Tab.Screen name="home" component={HomeScreen} options={{
                    tabBarLabel: '',
                    tabBarIconStyle: { bottom: 15 },
                    tabBarIcon: () => (
                        <Image source={IconFile.HOME} style={{ height: 85, width: 85 }} />
                    ),
                }} />
                <Tab.Screen name="settings" component={Settings} options={{
                    tabBarLabel: ({ focused }) => (
                        <Text style={{ fontSize: 14, color: 'black', bottom: 3, fontWeight: focused ? '900' : '500' }}>Settings</Text>
                    ),
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'black',
                    tabBarItemStyle: { right: 20 },
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <View>
                                    <Image source={IconFile.DOT} style={{ alignSelf: 'center', bottom: 5, height: 7.5, width: 7.5 }} />
                                    <Image source={IconFile.SETTINGSSELECTED} style={{ height: 25, width: 25 }} />
                                </View>
                            );
                        }
                        else {
                            return <Image source={IconFile.SETTINGS} style={{ height: 25, width: 30 }} />
                        }
                    },
                    tabBarIconStyle: { height: 50 },
                    tabBarLabelStyle: { fontSize: 14, bottom: 3 }
                }} />
            </Tab.Navigator>
        );
    }
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <StatusBar barStyle={'dark-content'} />
                <Stack.Navigator>
                    <Stack.Screen name="splash" component={Splash} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="nextscreen" component={NextScreen} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="login" component={Login} options={{
                        headerShown: false,

                    }} />
                    <Stack.Screen name="main" component={HomeTabs} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="profile" component={Profile} options={{ headerShown: false }} />
                    <Stack.Screen name="working" component={HowItWorks} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="terms" component={Terms} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="privacy" component={Privacy} options={{
                        headerShown: false
                    }} />
                    <Stack.Screen name="details" component={RestaurantDetail} options={{
                        // headerShown: false
                    }} />
                    <Stack.Screen name="notification" component={Notification} options={{
                        headerShown: false
                    }} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>

    );
}