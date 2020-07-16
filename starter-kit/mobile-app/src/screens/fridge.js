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
    paddingBottom: 10
  },
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 16,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingBottom: 20,
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
  }
});

class Fridge extends Component {
  constructor (props) {
    super(props);
    this.wrapInFridge = this.wrapInFridge.bind(this);
    this.getShelves = this.getShelves.bind(this);

    this.state = {
      allFoodItems: []
    };
  }

  componentDidMount() {
    // get all food items
    fetch('http://localhost:3000/food', {method: 'GET'})
      .then(res => res.json())
      .then(json => this.setState({ allFoodItems: json }))
      .catch((error) => {
        Alert.alert('Error', 'There was a problem retrieving food items');
        console.error(error);
      });
  }

  wrapInFridge() {
      const Shelves = () => this.getShelves();

      return (
        <View style={styles.center}>
          <ScrollView style={styles.scroll}>
          <Text style={styles.title}>Food in your fridge</Text>
            <Text style={styles.subtitle}>You have {this.state.allFoodItems.length} items in your fridge!</Text>
            <Shelves />
          </ScrollView>
        </View>

      );
  }

  getShelves() {
    let allFoodItems = this.state.allFoodItems;

    // Column
    let shelves = [];
    // Row
    let shelf = [];
    let numItems = 0;

    // Traverse items in order
    let i = 0;
    for (i; i < allFoodItems.length; i++) {
      let food = allFoodItems[i];
      let foodItem =
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Details', { json: food })}
          underlayColor='#dcdcdc'
        >
          <View>
            <Text style={{fontSize:50}}>o</Text>
            <Text style={{fontSize:50}}>{food.emoji}</Text>
          </View>
         </TouchableHighlight>
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
    };

    return shelves;
  }

  render = () => {
    const Fridge = () => this.wrapInFridge();

    return (
      <Fridge />
    );
  };
}

export default Fridge;
