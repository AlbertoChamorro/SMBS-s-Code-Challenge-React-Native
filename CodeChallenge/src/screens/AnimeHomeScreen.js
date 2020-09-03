// Native Components
import React from 'react';
import { View } from 'react-native';

// Components
import Header from '../components/Header';
import Searchable from '../components/Searchable';
import Animes from '../components/containers/AnimeList';

// Services
import animeService from '../services/AnimeService';

class AnimeHomeScreen extends React.Component {

    state = {
        isLoading: true,
        animes: []
    };

    constructor(props) {
        super(props)
        this._isMounted = false;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    async componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.search(null)
        }
    }

    search = async (text) => {
        this.setState({ isLoading: true });
        let result = await animeService.getAnimes(text);
        this.setState({
            animes: result,
            isLoading: false
        });
    }

    render() {
        return (
            <View>
                <Header>
                    <Searchable placeholder={'Search...'}
                        onChangeText={this.search}
                        elements={this.state.animes}
                    />
                </Header>
                <Animes list={this.state.animes} navigation={this.props.navigation} isLoading={this.state.isLoading} />
            </View >
        );
    }
}

export default AnimeHomeScreen;
