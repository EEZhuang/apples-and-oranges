import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, TouchableHighlight, Button, Linking, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF'
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 75
  },
  image: {
    alignSelf: 'flex-start',
    height: '20%',
    width:'50%',
    resizeMode: 'contain'
  },
  foodItem: {
    alignSelf: 'flex-start',
    /*
    height: '50%',
    width: '50%',
    */
    height: 70,
    width: 70,
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 15
  },
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 24,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingBottom: 5,
    paddingTop: 20
  },
  content: {
    fontFamily: 'IBMPlexSans-Light',
    color: '#323232',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  buttonGroup: {
    flex: 1,
    paddingTop: 15,
    width: 175
  },
  button: {
    backgroundColor: '#1062FE',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 15
  },
  foodButton: {

  }
});

// Get all food items for the user
// Calculate how many shelves needed
// Display shelves
// Display food items on shelves
// Display Progress Bar


class Fridge extends Component {

  render = () => {
    const Fridge = () => wrapInFridge();

    return (
      <Fridge />
    );
  };
}

function wrapInFridge() {
    const Shelves = () => getShelves();

    return (
      <View style={styles.center}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.subtitle}>Fridge!</Text>
          <Shelves />
        </ScrollView>
      </View>

    );
}

function getShelves() {
  let allFoodItems = getAllFoodItems();

  // Create items on shelf in groups of four
  // Return/Display list of shelves

  // Column
  let shelves = [];
  // Row
  let shelf = [];
  let numItems = 0;

  // Traverse items in order
  allFoodItems.forEach(function(food) {
    let foodItem = createFoodItem(food);
    shelf.push(foodItem);
    numItems++;

    // Row is filled or last row
    if (numItems % 4 === 0 || numItems === allFoodItems.length) {
      shelves.push(
        <View style={styles.center}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
            {shelf}
          </View>
          <View style={{width: 370, height: 10, backgroundColor: 'powderblue'}}/>
        </View>
      );

      // Reset to empty shelf
      shelf = [];
    }
  });

  return shelves;
}

function getAllFoodItems() {
  // get all food items
  /*
  */
  let allFoodItems;
  fetch('http://localhost:3000/food', {method: 'GET'})
    .then((json) => {
      Alert.alert('Success!', 'Successfully retrieved all food items')
      console.log(json.json());
      //allFoodItems = json.payload();
    })
    .catch((error) => {
      Alert.alert('Error', 'There was a problem retrieving food items');
      console.error(error);
    })

  return allFoodItems;

  //return [{tomato:"tomato"}, {tomato:"tomato"}, {tomato:"tomato"}, {tomato:"tomato"}, {tomato:"tomato"}, {tomato:"tomato"}];
  //return [{tomato:"tomato"}, {tomato:"tomato"}, {tomato:"tomato"}, {tomato:"tomato"}];
};

function createFoodItem(foodItem) {
  return (
    <TouchableHighlight
      onPress={()=>{}}
      underlayColor='#dcdcdc'
    >
      <View>
        <Image
          style={styles.foodItem}
          source={require('../images/tomato.png')}
        />
      </View>
     </TouchableHighlight>
  );
};

export default Fridge;
