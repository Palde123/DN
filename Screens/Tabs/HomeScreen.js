// import { FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import IconFile from "../../Config/IconFile";
// import { useNavigation } from "@react-navigation/native";

// const Restaurants = [
//     {
//         id: '1',
//         imageURL: IconFile.R1,
//         title: 'Wilde Bar & Restaurant',
//         speciality: 'Food, Cocktails',
//         location: 'Johnson street, New York, USA'
//     },
//     {
//         id: '2',
//         imageURL: IconFile.R2,
//         title: 'Reclaimed Bar & Restaurant',
//         speciality: 'Beverages',
//         location: 'Johnson street, New York, USA'
//     },
//     {
//         id: '3',
//         imageURL: IconFile.R3,
//         title: 'Grill 23 & Bar',
//         speciality: 'Fast Foods',
//         location: 'Johnson street, New York, USA'
//     },
//     {
//         id: '4',
//         imageURL: IconFile.R4,
//         title: 'Momofuku Ssam Bar',
//         speciality: 'Liqueurs',
//         location: 'Johnson street, New York, USA'
//     },
// ]

// export default function HomeScreen() {
//     const navigation = useNavigation();
//     return (
//         <>
//             <View style={styles.logoContainer}>
//                 <Image style={styles.logo} source={IconFile.LOGO} />
//                 <View style={styles.locationView}>
//                     <Text style={styles.locationText}>Location</Text>
//                     <Image style={styles.refresh} source={IconFile.REFRESH} />
//                 </View>
//                 <Text style={styles.NY}>New York, USA</Text>
//                 <TouchableOpacity onPress={() => navigation.navigate('notification')}>
//                     <Image style={styles.notification} source={IconFile.NOTIFICATION} />
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <Image style={styles.search} source={IconFile.SEARCH} />
//                 </TouchableOpacity>
//             </View>

// <View style={styles.FlatlistView}>
//     <FlatList
//         data={Restaurants}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => {
//             return (
//                 <>
//                     <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('details', {
//                         RestId: item.id
//                     })}>
//                         <View>
//                             <Image style={styles.image} source={item.imageURL} />
//                         </View>
//                     </TouchableOpacity>
//                     <View style={styles.listTextView}>
//                         <Text style={styles.title}>{item.title}</Text>
//                         <Text style={styles.information}>{item.speciality}</Text>
//                     </View>
//                     <Text style={styles.informationL}>{item.location}</Text>

//                 </>


//             );
//         }}
//     />
// </View>


//         </>

//     );
// }
// const styles = StyleSheet.create({
// logoContainer: {
//     marginTop: Platform.OS === 'android' ? 65 : 75,
//     marginLeft: 20,
//     flexDirection: 'row',
//     marginBottom: 15
// },
// logo: {
//     height: 44,
//     width: 59
// },
// locationView: {
//     flexDirection: 'row',
//     marginLeft: 9,
//     // marginTop: 10
// },
// refresh: {
//     marginLeft: 5,
//     height: 18,
//     width: 18
// },
// locationText: {
//     fontSize: 15,

// },
// NY: {
//     fontSize: 17.5,
//     fontWeight: '500',
//     top: 15,
//     right: 82,
//     marginTop: 7
// },
// notification: {
//     height: 27,
//     width: 22,
//     left: Platform.OS === 'ios' ? 52 : 26
// },
// search: {
//     height: 25,
//     width: 25,
//     left: Platform.OS === 'ios' ? 80 : 51
// },
// list: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10
// },
// listTextView: {
//     marginHorizontal: 22
// },
// image: {
//     width: Platform.OS === 'android' ? 375 : 400,
//     height: Platform.OS === 'android' ? 190 : 200,
//     borderRadius: 15
// },
// FlatlistView: {
//     bottom: 7,
// },
// title: {
//     fontWeight: 'bold',
//     fontSize: 17,
//     color: 'rgb(54,54,54)',
//     flex: 1,
//     marginTop: 10,
// },
// information: {
//     color: 'rgb(148, 148, 148)',
//     fontWeight: '500'
// },
// informationL: {
//     color: 'rgb(148, 148, 148)',
//     fontWeight: '500',
//     marginHorizontal: 22,
//     marginBottom: 16
// }
// })

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, Image, Platform, FlatList, TouchableOpacity } from "react-native";
import IconFile from "../../Config/IconFile";
import { useNavigation } from "@react-navigation/native";
import { fetchPostsStart } from "../../Redux/Slices/PostSlice";

const HomeScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPostsStart());
    }, [dispatch]);
    if (loading)
        return (
            <Text>Error :{error}</Text>
        );


    return (
        <>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={IconFile.LOGO} />
                <View style={styles.locationView}>
                    <Text style={styles.locationText}>Location</Text>
                    <Image style={styles.refresh} source={IconFile.REFRESH} />
                </View>
                <Text style={styles.NY}>New York, USA</Text>
                <TouchableOpacity onPress={() => navigation.navigate('notification')}>
                    <Image style={styles.notification} source={IconFile.NOTIFICATION} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.search} source={IconFile.SEARCH} />
                </TouchableOpacity>
            </View>
            <View style={styles.FlatlistView}>
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <TouchableOpacity style={styles.list} onPress={() => navigation.navigate('details', {
                                    RestId: item.id
                                })}>
                                    <View>
                                        <Image style={styles.image} source={item.imageURL} />
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.listTextView}>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={styles.information}>{item.speciality}</Text>
                                </View>
                                <Text style={styles.informationL}>{item.location}</Text>

                            </>


                        );
                    }}
                />
            </View>
        </>

    );
}
const styles = StyleSheet.create({
    logoContainer: {
        marginTop: Platform.OS === 'android' ? 65 : 75,
        marginLeft: 20,
        flexDirection: 'row',
        marginBottom: 15
    },
    logo: {
        height: 44,
        width: 59
    },
    locationView: {
        flexDirection: 'row',
        marginLeft: 9,
        // marginTop: 10
    },
    refresh: {
        marginLeft: 5,
        height: 18,
        width: 18
    },
    locationText: {
        fontSize: 15,

    },
    NY: {
        fontSize: 17.5,
        fontWeight: '500',
        top: 15,
        right: 82,
        marginTop: 7
    },
    notification: {
        height: 27,
        width: 22,
        left: Platform.OS === 'ios' ? 52 : 26
    },
    search: {
        height: 25,
        width: 25,
        left: Platform.OS === 'ios' ? 80 : 51
    },
    list: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },
    listTextView: {
        marginHorizontal: 22
    },
    image: {
        width: Platform.OS === 'android' ? 375 : 400,
        height: Platform.OS === 'android' ? 190 : 200,
        borderRadius: 15
    },
    FlatlistView: {
        bottom: 7,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'rgb(54,54,54)',
        flex: 1,
        marginTop: 10,
    },
    information: {
        color: 'rgb(148, 148, 148)',
        fontWeight: '500'
    },
    informationL: {
        color: 'rgb(148, 148, 148)',
        fontWeight: '500',
        marginHorizontal: 22,
        marginBottom: 16
    }
})
export default HomeScreen;