import React, { Component } from 'react';
import ArtistList from '../Components/ArtistList';
import { getArtists } from '../api';

export default class HomeView extends Component {

  constructor(){
    super()
    this.state = {
      artists: []
    }
  }

  static navigationOptions = {
    title: 'Artists',
  };

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
      <ArtistList artists={artists} />
    );
  }
}

