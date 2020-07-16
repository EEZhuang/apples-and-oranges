import React, { Component } from 'react';
import { calcTimeDelta } from 'react-countdown'
import { StyleSheet, View, Image, Text, TouchableOpacity, TouchableHighlight, Button, Linking, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Config from 'react-native-config';

/*
 * Creates a display of all your fridge items sorted based on expiration date
 */
class Fridge extends Component {
  constructor (props) {
    super(props);
    this.wrapInFridge = this.wrapInFridge.bind(this);
    this.getShelves = this.getShelves.bind(this);
    this.getAllFoodItems = this.getAllFoodItems.bind(this);

    // All food items in your fridge
    this.state = {
      allFoodItems: []
    };
  }

  // Checks if fridge screen comes back into focus to rerender
  componentDidMount() {
    this.getAllFoodItems();
    this._navListener = this.props.navigation.addListener('focus', () => {
      this.getAllFoodItems();
     });
  }

  // Takes user to add item screen
  add() {
    this.props.navigation.navigate('Add')
  }

  // Wraps the shelves in the external fridge view
  wrapInFridge() {
      const Shelves = () => this.getShelves();

      return (
        <View style={styles.center}>
          <ScrollView style={styles.scroll}>
          <Text style={styles.title}>Food in your fridge 🍳</Text>
            <Text style={styles.subtitle}>You have {this.state.allFoodItems.length} items in your fridge!</Text>
            <Shelves />
            {/* <View style={styles.buttonGroup}>
              <TouchableOpacity onPress={() => this.add()}>
                <Text style={styles.button}>Went grocery shopping? Add more!</Text>
              </TouchableOpacity>
      </View> */}
          </ScrollView>
        </View>

      );
  }

  // Puts all food items on shelves
  getShelves() {
    let allFoodItems = this.state.allFoodItems;

    // Column mimics fridge
    let shelves = [];
    // Row
    let shelf = [];
    let numItems = 0;

    // Traverse items in order
    let i = 0;
    for (i; i < allFoodItems.length; i++) {
      let food = allFoodItems[i];
      let timeLeft = calcTimeDelta(food["exp-date"]).days;
      let key = food['name'].concat(food['exp-date']);
      let foodItem =
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Details', { json: food })}
          underlayColor='#dcdcdc'
          key={key}
        >
          <View>
            <Text style={{fontSize:50, alignItems:'center'}}>{food.emoji}</Text>
            <View style={styles.progressBar}><View style={{backgroundColor: '#056608', height: 5, zIndex: 1, width: 55 * timeLeft/20, maxWidth: 55}}></View></View>
          </View>
         </TouchableHighlight>
      shelf.push(foodItem);
      numItems++;

      // If row is filled or last row, add shelf to shelves
      if (numItems % 4 === 0 || numItems === allFoodItems.length) {
        shelves.push(
          <View key={i} style={styles.center}>
            <View style={{width: 375, height: 20}}/>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{width: 30, height: 70}}></View>
              <View style={{width: 60, height: 70}}>{shelf[0]}</View>
              <View style={{width: 30, height: 70}}></View>
              <View style={{width: 60, height: 70}}>{shelf[1]}</View>
              <View style={{width: 30, height: 70}}></View>
              <View style={{width: 60, height: 70}}>{shelf[2]}</View>
              <View style={{width: 30, height: 70}}></View>
              <View style={{width: 60, height: 70}}>{shelf[3]}</View>
              <View style={{width: 30, height: 70}}></View>
            </View>
            <View style={{width: 375, height: 10, backgroundColor: 'powderblue'}}/>
          </View>
        );

        // Reset to empty shelf
        shelf = [];
      }
    };

    return shelves;
  }

  // gets all food items for user
  getAllFoodItems() {
      // get all food items
    fetch(Config.STARTER_KIT_SERVER_URL + '/food', {method: 'GET'})
    .then(res => res.json())
    .then(json => this.setState({ allFoodItems: json }))
    .catch((error) => {
      Alert.alert('Error', 'There was a problem retrieving food items');
      console.error(error);
    });
  }

  render = () => {
    const Fridge = () => this.wrapInFridge();

    return (
      <Fridge />
    );
  };
}

const styles = StyleSheet.create({
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 75
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 10
  },
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 16,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingBottom: 10,
  },
  button: {
    backgroundColor: '#056608',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 15,
  },
  progressBar: {
    backgroundColor: 'red',
    width: 55,
    height: 5,
  }
});

export default Fridge;
