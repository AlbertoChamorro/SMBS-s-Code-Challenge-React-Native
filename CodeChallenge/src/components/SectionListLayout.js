import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function SectionListLayout(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            {props.children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 6,
        paddingHorizontal: 10,
    },
    title: {
        color: '#5f6368',
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 6,
        marginLeft: -2
    }
});