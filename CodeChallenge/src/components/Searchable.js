// Native Components
import React from 'react';
import useSearchable from '../customHooks/useSearchable';

// https://github.com/oblador/react-native-vector-icons/issues/965
import { SearchBar } from 'react-native-elements';
import PropTypes from 'prop-types';

function Searchable(props) {
    const { query, setQuery } = useSearchable(props.elements, props.onChangeText);
    return (
        <SearchBar
            placeholder={props.placeholder}
            lightTheme
            round
            onChangeText={setQuery}
            value={query}
            autoCorrect={true}
        />
    );
}

Searchable.propTypes = {
    elements: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired
};

export default Searchable;
