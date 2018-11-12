/**
 * Favorite Music
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, FlatList, View} from 'react-native';
import ArtistBox from './ArtistBox';

export default class ArtistsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: props.artists
    }
  }

  renderItem = (artist) => {
    return <ArtistBox artist={artist.item}/>
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50
  },
});
