import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import sadImage from '../assets/sad.png';

export default function Error(props) {
    return (
        <View style={styles.container}>
            <Image source={sadImage}
                style={styles.image}>
            </Image>
            <Text style={styles.message}>{props.message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 16
    },
    image: {
        tintColor: '#F06292',
        width: 50,
        height: 50
    },
    message: {
        fontSize: 14,
        color: '#F06292'
    }
});