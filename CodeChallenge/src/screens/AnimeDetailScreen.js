// Native Components
import React from 'react';
import { ActivityIndicator, Linking } from 'react-native';

// Components
import BaseComponent from '../components/base/BaseComponent';
import Header from '../components/Header';
import AnimeDetail from '../components/AnimeDetail';

// Services
import animeService from '../services/AnimeService';

class AnimeDetailScreen extends BaseComponent {

  state = {
    isLoading: true,
    anime: {},
    genres: [],
    episodes: []
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
      this.getEpisodesByAnime(animeId);
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

  getEpisodesByAnime = async (id) => {
    this.setState({ isLoading: true });
    let result = await animeService.getEpisodesByAnime(id);
    this.setState({
      episodes: result,
      isLoading: false
    });
  }

  async playVideo(id) {
    if (!id || id == 0) {
      console.error('Invalid youtube id!!')
      super.createDialog('Error', 'Invalid youtube id!!', {
        showOkButton: true
      });
      return;
    }

    let url = `youtube://${id}`;
    try {
      let supported = await Linking.canOpenURL(url)
      if (supported) {
        await Linking.openURL(url);
      } else {
        await Linking.openURL(`https://www.youtube.com/watch?v=${id}`);
      }
    } catch (e) {
      await Linking.openURL(`https://www.youtube.com/watch?v=${id}`);
    }
  }

  async sharedAnime(data) {
    super.shareData(`We are pleased to share with you the ${data.name} series of the ${data.subtype} category`);
  }

  render() {
    let component;
    if (this._isMounted && !this.state.isLoading) {
      component = <AnimeDetail anime={this.state.anime}
        genres={this.state.genres}
        episodes={this.state.episodes}
        onPlayVideo={this.playVideo}
        onSharedAnime={this.sharedAnime}
      />;
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
