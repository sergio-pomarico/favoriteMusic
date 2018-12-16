import React, {Component} from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ArtistBox from './ArtistBox';

class ArtistsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: []
    }
  }

  renderItem = (artist) => {
    return (
      <TouchableOpacity onPress={() => {this.handlePress(artist.item)}}>
        <ArtistBox artist={artist.item}/>
      </TouchableOpacity>
    )
  }

  handlePress = (artist) => {
    this.props.navigation.push('Details', {
      artist: artist
    })
  }

  componentWillReceiveProps(newProps){
    if (newProps !== this.props) {
      this.setState({
        dataSource: newProps.artists
      })
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(artist, index) => artist.name.replace(/\s/g,'_')+'_'+index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 10
  },
});

export default withNavigation(ArtistsList);