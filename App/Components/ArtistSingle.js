import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

export default class ArtistSingle extends Component {
  render() {
    const { artist } = this.props; 
    return (
      <View style={styles.container}>
        {artist.image !== '' && <Image source={{uri: artist.image}} style={styles.image}/>}
        <View style={styles.textblock}>
          <Text style={styles.title}>{artist.title}</Text>
          <Text style={styles.paragraph}>{artist.bio}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column' 
  }, 
  image: {
    backgroundColor: 'gray',
    flex: 1,
  },
  textblock: {
    flex: 1
  },
  title: {
    textAlign: 'center',
    marginTop: 15,
    fontWeight: 'bold',
    fontSize: 20
  },
  paragraph: {
    paddingHorizontal: 15,
    marginTop: 15,
    textAlign: 'justify'
  }
});