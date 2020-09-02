// Native Components
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';

function FieldKeyText(props) {
    return (
        <Text style={styles.value}>{props.value || 'xxxx'}</Text>
    );
}

FieldKeyText.propTypes = {
    value: PropTypes.string.isRequired,
};

let styles = StyleSheet.create({
    value: {
        margin: 2,
        fontSize: 15
    }
});

export default FieldKeyText;
