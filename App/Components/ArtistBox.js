import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class App extends Component {
  render() {
    const { artist } = this.props;
    return (
      <View style={styles.artistBox}>
        <Image style={styles.image} source={{uri: artist.image}} />
        <View style={styles.info}>
          <Text style={styles.name}>{artist.name}</Text>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon name="ios-heart" size={30} color="gray"/>
              <Text style={styles.count}>{artist.likes}</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="ios-chatboxes" size={30} color="gray"/>
              <Text style={styles.count}>{artist.comments}</Text>
            </View>
          </View>
        </View>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  artistBox: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    margin: 5,
    elevation: 2, //Android Shadow
    shadowColor: 'black',
    shadowOpacity: 0.2,
    textShadowOffset: {
      height: 1,
      width: -2
    }
  },
  image: {
    width: 150, 
    height: 150
  },
  info: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  name: {
    color: '#333',
    fontSize: 20,
    marginTop: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 10,
  },
  iconContainer: {
    alignItems: 'center',
    flex: 1,
  },
  count: {
    color: 'gray',
  }
});
