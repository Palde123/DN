
import React, { useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Dimensions, StyleSheet, Platform } from 'react-native';
import IconFile from '../../Config/IconFile';


const { width } = Dimensions.get('window');

const slides = [
    {
        id: '1',
        image: IconFile.TUT1,
        description: 'Find Restaurants around you\nto explore the delicacies\nthey are serving!',
    },
    {
        id: '2',
        image: IconFile.TUT2,
        description: 'Order Something for you\nor your friend in a few\nsimple steps!',
    },
    {
        id: '3',
        image: IconFile.TUT3,
        description: 'Get a QR code that can be\nscanned by the Restaurant\nto serve the order!',
    },
    {
        id: '4',
        image: IconFile.TUT4,
        description: 'Cheers!',
    },
];

export default function NextScreen({ navigation }) {
    const flatListRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < slides.length - 1) {
            flatListRef.current.scrollToIndex({ index: currentIndex + 1, animated: true });
            setCurrentIndex(currentIndex + 1);
        } else {
            navigation.goBack();
        }
    };

    const handleBack = () => {
        navigation.goBack();
    };


    const renderItem = ({ item, index }) => (
        <View style={styles.slideContainer}>
            <View style={styles.topBar}>
                <Text style={styles.heading}>How it works</Text>
                <TouchableOpacity onPress={handleBack} style={styles.backButton}>
                    <Image style={styles.backImage} source={IconFile.BACK} />
                </TouchableOpacity>
            </View>

            <Image source={item.image} style={styles.image} />
            <Text style={styles.description}>{item.description}</Text>
            <View >
                <TouchableOpacity onPress={handleNext} style={[styles.nextButton, index === slides.length - 1 && styles.exploreButton]}>

                    <Text style={styles.nextText}>
                        {index === slides.length - 1 ? "Done" : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    );

    return (
        <FlatList
            ref={flatListRef}
            data={slides}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    heading: {
        left: Platform.OS === 'ios' ? 110 : 100,
        fontSize: 22.5,
        fontWeight: 'bold',
        marginTop: Platform.OS === 'ios' ? 20 : 14,
        color: 'rgb(55, 55, 55)'
    },
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
        marginTop: Platform.OS === 'ios' ? 70 : 60
    },
    description: {
        fontSize: 24,
        color: 'rgb(53,53,53)',
        textAlign: 'center',
        lineHeight: 40,
        top: Platform.OS === 'ios' ? 15 : 3,
        fontWeight: '500',
        letterSpacing: 0.8,
        // fontFamily: 'Inter-Italic-VariableFont_opsz,wght'
    },
    backButton: {
        position: 'absolute',
        left: 3,
        top: Platform.OS === 'ios' ? 27 : 23,
    },
    backImage: {
        height: 17,
        width: 23,
    },
    skipButton: {
        position: 'absolute',
        right: 20,
        top: 0,
    },
    skipText: {
        fontSize: 23,
        color: 'rgb(51,51,51)',
        fontWeight: '500',
    },
    nextButton: {
        backgroundColor: 'rgb(28, 98, 185)',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 15,
        width: Platform.OS === 'ios' ? 380 : 360,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        top: Platform.OS === 'android' ? 84 : 101
    },
    nextText: {
        color: 'white',
        fontSize: 19,
        fontWeight: '700',
        letterSpacing: 1
    },
    exploreButton: {
        backgroundColor: 'rgb(28, 98, 185)',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 15,
        width: Platform.OS === 'ios' ? 380 : 360,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        top: Platform.OS === 'android' ? 120 : 130
    }
});