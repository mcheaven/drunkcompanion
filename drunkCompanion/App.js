/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
'use strict';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import AddDrink from './app/components/AddDrink';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  state = {
    consumedDrinks: []
  }

  handleAddDrink = (drink) => {
    const {consumedDrinks} = this.state;
    this.setState({
      consumedDrinks: [drink, ...consumedDrinks]
    })
  }

  render() {
    const {consumedDrinks} = this.state;
    console.log(consumedDrinks)
    // TODO: render consumedDrinks with pictures and stuff
    const consumedDrinksShowcase = consumedDrinks.map(drink => (<Text key={drink.id}>{drink.item.title}</Text>))
    return (
      <View style={styles.container}>
        <AddDrink onPressItem={this.handleAddDrink} />
        {consumedDrinksShowcase}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  tobi: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#FF0000',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
