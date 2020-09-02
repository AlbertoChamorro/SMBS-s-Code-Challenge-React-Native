import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function SeparatorListItem(props) {
    switch (props.orientation) {
        case 'top':
            return <View style={[
                styles.borderTop,
                {
                    borderTopColor: setColor(props.color)
                }
            ]} />
        case 'right':
            return <View style={[
                styles.borderRight,
                {
                    borderRightColor: setColor(props.color)
                }
            ]} />
        case 'bottom':
            return <View style={[
                styles.borderBottom,
                {
                    borderBottomColor: setColor(props.color)
                }
            ]} />
        case 'left':
            return <View style={[
                styles.borderLeft,
                {
                    borderLeftColor: setColor(props.color)
                }
            ]} />
        default:
            return <View style={[
                styles.borderTop,
                {
                    borderTopColor: setColor(props.color)
                }
            ]} />
    }
}

function setColor(color) {
    return (color) ? props.color : '#E0E0E0'
}

const styles = StyleSheet.create({
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0'
    },
    borderRight: {
        flex: 1,
        marginHorizontal: 5,
        borderRightWidth: 1,
        borderRightColor: '#E0E0E0'
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0'
    },
    borderLeft: {
        flex: 1,
        marginHorizontal: 5,
        borderLeftWidth: 1,
        borderLeftColor: '#E0E0E0'
    }
});