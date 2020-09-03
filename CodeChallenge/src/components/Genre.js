// Native Components
import React from 'react';
import PropTypes from 'prop-types';
import { Avatar } from 'react-native-elements';

function Genre(props) {

    const { genre } = props;

    return (<Avatar rounded
        size="medium"
        title={genre.attributes.name}
        titleStyle={{
            fontSize: 10
        }}
        containerStyle={{
            borderColor: '#fff',
            borderWidth: 1,
            backgroundColor: '#555a64',
            opacity: 0.9
        }} />);
}

Genre.propTypes = {
    genre: PropTypes.object,
    genre: PropTypes.shape({
        attributes: PropTypes.object,
        attributes: PropTypes.shape({
            name: PropTypes.string.isRequired,
        })
    }),
};

export default Genre;
