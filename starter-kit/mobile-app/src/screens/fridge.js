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
    paddingBottom: 20,
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
  shelves: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  fruit: {
    fontSize: 50,
    margin: 10,
    borderWidth: 1,
  }
});

// Get all food items for the user
// Calculate how many shelves needed
// Display shelves
// Display food items on shelves
// Display Progress Bar


class Fridge extends Component {
  constructor (props) {
    super(props);
    this.getFood = this.getFood.bind(this)
    this.renderFood = this.renderFood.bind(this);
    this.add = this.add.bind(this);

    this.state = {
      allFoodItems: []
    };
  }

  async componentDidMount() {
    await this.getFood();
  }

  getFood() {
    fetch('http://localhost:3000/food', {method: 'GET'})
      .then(res => res.json())
      .then((json) => {
        this.setState({ allFoodItems: json })
      })
      .catch((error) => {
        Alert.alert('Error', 'There was a problem retrieving food items');
        console.error(error);
      });
  }

  add() {
    this.props.navigation.navigate('Add')
  }

  details(item) {
    console.log(item);
    this.props.navigation.navigate('Details', { json: item })
  }

  renderFood() {
    this.getFood();
    const allFoodItems = this.state.allFoodItems;

    const mapping = allFoodItems.map((item) => {
      return (
        <TouchableHighlight onPress={() => this.details(item)} underlayColor='#dcdcdc'>
          <View>
            <Text style={styles.fruit}>{item.emoji}</Text>
          </View>
        </TouchableHighlight>
      );
    })

    return (
      <View style={styles.center}>
        <View style={styles.shelves}>
          {mapping}
        </View>   
      </View>
    );
  }

  render = () => {
    const shelves = this.renderFood();

    return (
      <View style={styles.center}>
          <ScrollView style={styles.scroll}>
            <Text style={styles.title}>Food in your fridge</Text>
            <Text style={styles.subtitle}>You have {this.state.allFoodItems.length} items in your fridge!</Text>
              {shelves}
            <View style={styles.buttonGroup}>
              <TouchableOpacity onPress={() => this.add()}>
                <Text style={styles.button}>Went grocery shopping? Add more!</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
    );
  };
}

export default Fridge;
