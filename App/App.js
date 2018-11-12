/**
 * Favorite Music
 * @format
 * @flow
 */

import React, {Component} from 'react';
import ArtistList from './Components/ArtistList';

export default class FavoriteMusic extends Component {

  render() {
    const artist = {
      'name': 'David Bowie',
      'image': 'https://www.christies.com/media-library/images/features/articles/2016/01/11/david-bowie/mainimage.jpg',
      'likes': 200,
      'comments': 24
    };
    const Artists = Array(10).fill(artist);
    return (
      <ArtistList artists={Artists}/>
    );
  }
}

