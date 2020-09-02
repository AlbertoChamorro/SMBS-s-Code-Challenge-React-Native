// Native Components
import React from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

// Components
import Error from '../Error';
import SectionListLayout from '../SectionListLayout';
import SeparatorListItem from '../SeparatorListItem';
import Anime from '../Anime';

class Animes extends React.Component {

    getKey = item => item.id;

    renderEmptyComponent = () => {
        if (!this.props.isLoading)
            return <Error message='No se encontraron registros' />
        else
            return <ActivityIndicator />
    }

    renderItem = ({ item }) => {
        return (
            <Anime {...item} isLoading={this.props.isLoading} key={item.key} onSelectedItem={this.onSelectedItem} />
        );
    };

    onSelectedItem = id => {
        console.log(id);
        this.props.navigation.push('AnimeDetail', {
            animeId: parseInt(id)
        })
    };

    itemSeparator = () => <SeparatorListItem orientation="right" />

    render() {
        return (
            <SectionListLayout title='Animes'>
                <FlatList horizontal
                    keyExtractor={this.getKey}
                    data={this.props.list}
                    ListEmptyComponent={this.renderEmptyComponent}
                    renderItem={this.renderItem}
                    ItemSeparatorComponent={this.itemSeparator}>

                </FlatList>
            </SectionListLayout>
        );
    }
}

export default Animes;
