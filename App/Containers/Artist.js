import React, { Component } from 'react';
import ArtistSingle from '../Components/ArtistSingle';
import { getArtist } from '../api';

export default class ArtistView extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      title: '',
      bio: '',
      image: ''
    }
  }

  componentDidMount(){
    const { navigation } = this.props;
    const artist = navigation.getParam('artist');

    getArtist(artist.name).then( fullArtist => {
      this.setState({
        title: fullArtist.name,
        bio: fullArtist.bio,
        image: fullArtist.image
      })
    })
  }

  static navigationOptions = ({ navigation }) => {
    const artist = navigation.getParam('artist')
    return {
      title: artist.name,
    };
  };

  render() {
    return (
      <ArtistSingle artist={this.state}/>
    );
  }
}
