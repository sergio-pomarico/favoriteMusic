import React, { Component } from 'react';
import ArtistList from './Components/ArtistList';
import getArtists from './api';

export default class FavoriteMusic extends Component {

  constructor(){
    super()
    this.state = {
      artists: []
    }
  }

  componentDidMount() {
    getArtists().then(artists => {
      this.setState({
        artists: artists
      })
    });
  }

  render() {
    const artists = this.state.artists;
    return (
      <ArtistList artists={artists}/>
    );
  }
}

