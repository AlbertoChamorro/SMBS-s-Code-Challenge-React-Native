// Native Components
import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

function Episode(props) {

    const { episode } = props;

    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
            <Icon name='video-camera' type='font-awesome' />
            <View style={{ marginStart: 8 }}>
                <Text>
                    {episode.attributes.canonicalTitle || '----'}
                </Text>
                <Text>
                    {`Chapter ${episode.attributes.number || '----'}`}
                </Text>
            </View>
        </View>
    );
}

Episode.propTypes = {
    episode: PropTypes.object
};

export default Episode;
