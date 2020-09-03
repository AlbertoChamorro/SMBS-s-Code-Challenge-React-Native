// Native Components
import React from 'react';
import { FlatList } from 'react-native';

// Components
import Error from '../Error';
import SeparatorListItem from '../SeparatorListItem';
import Genre from '../Genre';

class Genres extends React.Component {

    getKey = item => item.id;

    renderEmptyComponent = () => <Error message='No se encontraron generos' />;

    renderItem = ({ item }) => {
        return (
            <Genre genre={item} key={item.key} />
        );
    };

    itemSeparator = () => <SeparatorListItem orientation="right" />

    render() {
        return (
            <FlatList horizontal
                keyExtractor={this.getKey}
                data={this.props.list}
                ListEmptyComponent={this.renderEmptyComponent}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.itemSeparator}>

            </FlatList>
        );
    }
}

export default Genres;
