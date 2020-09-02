// Native Components
import React from 'react';
import { ActivityIndicator } from 'react-native';

// Components
import Header from '../components/Header';
import AnimeDetail from '../components/AnimeDetail';

// Services
import animeService from '../services/AnimeService';

class AnimeDetailScreen extends React.Component {

  state = {
    isLoading: true,
    anime: {},
    genres: []
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
      const { animeId } = this.props.route.params;
      this.getAnime(animeId);
      this.getGenreByAnime(animeId);
    }
  }

  getAnime = async (id) => {
    this.setState({ isLoading: true });
    let result = await animeService.getAnime(id);
    this.setState({
      anime: result,
      isLoading: false
    });
  }

  getGenreByAnime = async (id) => {
    this.setState({ isLoading: true });
    let result = await animeService.getGenresByAnime(id);
    this.setState({
      genres: result,
      isLoading: false
    });
  }


  render() {

    let component;
    if (this._isMounted && !this.state.isLoading) {
      component = <AnimeDetail anime={this.state.anime} genres={this.state.genres} />;
    } else {
      component = <ActivityIndicator />
    }

    return (
      <React.Fragment>
        <Header />
        {component}
      </React.Fragment>
    );
  }

}

export default AnimeDetailScreen;
