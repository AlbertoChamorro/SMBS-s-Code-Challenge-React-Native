// Native Components
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

function FieldKeyLayout(props) {
    return (
        <React.Fragment>
            <View style={props.style}>
                <Text style={styles.title}>{props.title || 'xxxx'}</Text>
                {props.children}
            </View>
        </React.Fragment>
    );
}

FieldKeyLayout.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object.isRequired,
};

let styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default FieldKeyLayout;