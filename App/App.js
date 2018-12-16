import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeView from './Containers/Home';
import Artist from './Containers/Artist';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeView
  },
  Details: {
    screen: Artist
  },
});

export default class FavoriteMusic extends Component {
  render() {
    return <RootStack/>
  }
}

