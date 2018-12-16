import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeView from './Containers/Home';
import ArtistDetail from './Containers/ArtistDetail';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeView
  },
  Details: {
    screen: ArtistDetail
  },
});

export default class FavoriteMusic extends Component {
  render() {
    return <RootStack/>
  }
}

