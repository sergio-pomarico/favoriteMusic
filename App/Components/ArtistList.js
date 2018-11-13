import React, {Component} from 'react';
import { StyleSheet, FlatList, View} from 'react-native';
import ArtistBox from './ArtistBox';

export default class ArtistsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      dataSource: []
    }
  }

  renderItem = (artist) => {
    return <ArtistBox artist={artist.item}/>
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
    paddingTop: 50
  },
});
