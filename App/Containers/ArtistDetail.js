import React, { Component } from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import { getArtist } from '../api';

export default class ArtistDetailView extends Component {
  
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
    console.warn(this.state.bio)
    return (
      <View style={styles.container}>
        {this.state.image !== '' && <Image source={{uri: this.state.image}} style={styles.image}/>}
        <View style={styles.textblock}>
          <Text style={styles.title}>{this.state.title}</Text>
          <Text style={styles.paragraph}>{this.state.bio}</Text>
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

