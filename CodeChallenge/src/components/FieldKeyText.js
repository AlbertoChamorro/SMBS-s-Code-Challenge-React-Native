// Native Components
import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import ReadMore from 'react-native-read-more-text';

function FieldKeyText(props) {
    if (props.showMoreText) {
        return <ReadMore numberOfLines={props.maxLines}
            renderTruncatedFooter={renderTruncatedFooter}
            renderRevealedFooter={renderRevealedFooter}>
            <Text style={styles.value}>
                {props.value || 'xxxx'}
            </Text>
        </ReadMore>
    }
    return (
        <Text style={styles.value}>{props.value || 'xxxx'}</Text>
    );
}

FieldKeyText.propTypes = {
    value: PropTypes.string.isRequired,
    showMoreText: PropTypes.bool,
    maxLines: PropTypes.number
};

FieldKeyText.defaultProps = {
    showMoreText: false,
    maxLines: 5
};

const renderTruncatedFooter = (handlePress) => {
    return (
        <Text style={{ color: '#3379ca', marginTop: 5 }} onPress={handlePress}>
            Read more
        </Text>
    );
}

const renderRevealedFooter = (handlePress) => {
    return (
        <Text style={{ color: '#3379ca', marginTop: 5 }} onPress={handlePress}>
            Show less
        </Text>
    );
}

let styles = StyleSheet.create({
    value: {
        margin: 2,
        fontSize: 15
    }
});

export default FieldKeyText;
