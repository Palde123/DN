import { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, StyleSheet, Platform } from 'react-native';
import IconFile from '../Config/IconFile';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const slides = [{ id: '1', image: IconFile.TUT1, description: 'Find Restaurants around you\nto explore the delicacies\nthey are serving!', }, { id: '2', image: IconFile.TUT2, description: 'Order Something for you\nor your friend in a few\nsimple steps!', }, { id: '3', image: IconFile.TUT3, description: 'Get a QR code that can be\nscanned by the Restaurant\nto serve the order!', }, { id: '4', image: IconFile.TUT4, description: 'Cheers!', },];

export default function NextScreen({ navigation }) {
    const flatListRef = useRef(); const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.navigate('login');
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            flatListRef.current.scrollToIndex({ index: currentIndex - 1, animated: true });
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleSkip = () => {
        navigation.navigate('login');
    };

    const renderItem = ({ item }) => (
        <View style={styles.slideContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={[styles.description, item.description === "Cheers!" && styles.cheers]}>{item.description}</Text>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ref={flatListRef}
                data={slides}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={(event) => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
                scrollEventThrottle={16}
            />
            <View style={styles.topBar}>
                {currentIndex !== 0 && (
                    <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                        <Image style={styles.backImage} source={IconFile.BACK} />
                    </TouchableOpacity>
                )}
                {currentIndex !== slides.length - 1 && (
                    <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                )}
            </View>
            <View style={styles.navigationContainer}>
                <TouchableOpacity onPress={handleNext}>
                    <LinearGradient
                        colors={['rgb(62, 128, 214)', 'rgb(28, 98, 185)', 'rgb(0,67,148)']}
                        style={[styles.nextButton, currentIndex === slides.length - 1 && styles.exploreButton]}
                    >
                        <Text style={styles.nextText}>
                            {currentIndex === slides.length - 1 ? "Let's Explore" : 'Next'}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    slideContainer: {
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        position: 'absolute',
        top: Platform.OS === 'ios' ? 60 : 59,
        paddingHorizontal: 20,
    },
    image: {
        width: Platform.OS == 'android' ? 405 : 430,
        height: 400,
        resizeMode: 'contain',
        marginVertical: 30,
        marginTop: Platform.OS === 'android' ? 55 : 65
    },
    description: {
        fontSize: Platform.OS === 'android' ? 22 : 23.5,
        color: 'rgb(53,53,53)',
        textAlign: 'center',
        lineHeight: 35,
        top: Platform.OS === 'ios' ? 17 : 3,
        fontWeight: '500',
        letterSpacing: 0.8,
        // fontFamily: 'Inter-Italic-VariableFont_opsz,wght'
    },
    backButton: {
        position: 'absolute',
        left: 24.5,
        top: Platform.OS === 'ios' ? 23 : 23,

    },
    backImage: {
        height: 17,
        width: 23,
    },
    skipButton: {
        position: 'absolute',
        right: 18,
        top: Platform.OS === 'ios' ? 20 : 15,
    },
    skipText: {
        fontSize: 23,
        color: 'rgb(51,51,51)',
        fontWeight: '500',
    },
    nextButton: {
        // backgroundColor: 'rgb(28, 98, 185)',
        paddingVertical: Platform.OS === 'android' ? 12 : 0,
        paddingHorizontal: 25,
        borderRadius: 15,
        width: Platform.OS === 'ios' ? 435 : 360,
        alignItems: 'center',
        justifyContent: 'center',
        height: Platform.OS === 'android' ? 60 : 65,
        bottom: Platform.OS === 'android' ? 50 : 37.5,
        alignSelf: 'center'

    },
    nextText: {
        color: 'white',
        fontSize: 19,
        fontWeight: '700',
        letterSpacing: 1,
        // right: 10
        right: Platform.OS === 'android' ? 0 : 25
    },
    exploreButton: {
        // backgroundColor: 'rgb(28, 98, 185)',
        paddingVertical: Platform.OS === 'android' ? 12 : 0,
        paddingHorizontal: 25,
        borderRadius: 15,
        width: Platform.OS === 'ios' ? 435 : 360,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        bottom: Platform.OS === 'android' ? 50 : 37.5,
    },
    cheers: {
        fontSize: 26,
        fontWeight: 'bold',
        top: Platform.OS === 'android' ? 30 : 40
    }
});
