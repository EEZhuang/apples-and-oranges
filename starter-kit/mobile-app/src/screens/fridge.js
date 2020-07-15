import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, Linking } from 'react-native';
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
  }
});

// Get all food items for the user
// Calculate how many shelves needed
// Display shelves
// Display food items on shelves
// Display Progress Bar

const Fridge = () => (
  <View style={styles.center}>
    <ScrollView style={styles.scroll}>
      <Text style={styles.subtitle}>Fridge!</Text>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <Image
          style={styles.foodItem}
          source={require('../images/tomato.png')}
        />
        <Image
          style={styles.foodItem}
          source={require('../images/tomato.png')}
        />
        <Image
          style={styles.foodItem}
          source={require('../images/tomato.png')}
        />
        <Image
          style={styles.foodItem}
          source={require('../images/tomato.png')}
        />
      </View>
      <View style={{width: 370, height: 10, backgroundColor: 'powderblue'}}/>
    </ScrollView>
  </View>
);

export default Fridge;
