// Native Components
import React from 'react';

// Components
import Header from '../components/Header';
import AnimeDetail from '../components/AnimeDetail';

class AnimeDetailScreen extends React.Component {

  state = {
    isLoading: true,
    animes: []
  };

  constructor(props) {
    super(props)
    this._isMounted = false;
  }

  render() {

    // { route, navigation }
    // const { animeId } = route.params;
    //  {JSON.stringify(animeId)} | navigation.goBack()

    return (
      <React.Fragment>
        <Header />
        <AnimeDetail />
      </React.Fragment>
    );
  }

}

export default AnimeDetailScreen;
