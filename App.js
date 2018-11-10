/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  render() {
    const image = 'https://www.christies.com/media-library/images/features/articles/2016/01/11/david-bowie/mainimage.jpg';
    const name = 'David Bowie';
    const likes = 200;
    const comments = 25;
    return (
      <View style={styles.container}>
        <View style={styles.artistBox}>
          <Image style={styles.image} source={{uri: image}} />
          <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Icon name="ios-heart" size={30} color="gray"/>
                <Text style={styles.count}>{likes}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Icon name="ios-chatboxes" size={30} color="gray"/>
                <Text style={styles.count}>{comments}</Text>
              </View>
            </View>
          </View>   
        </View>
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
  artistBox: {
    backgroundColor: '#fff',
    flexDirection: 'row'
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
