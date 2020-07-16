import React from 'react';
import { calcTimeDelta } from 'react-countdown'
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, TouchableHighlight, Linking, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Config from 'react-native-config';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 25,
    paddingTop: 50
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 15
  },
  percentage: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 24,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingTop: 10,
    paddingBottom: 15
  },
  comment: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 24,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
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
    fontSize: 16
  },
  buttonGroup: {
    flex: 1,
    paddingTop: 15,
    width: 175
  },
  button: {
    backgroundColor: '#056608',
    color: '#FFFFFF',
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign:'center',
    marginTop: 15
  },
  nameInput: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    height: 50
  },
  emojiInput: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 36,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    height: 50,
    width: 50
  },
  dateInput: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 16,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    height: 50
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 15,
    borderColor: '#056608'
  },});

/*
 * The details page lists all information about the food item like the expiration date
 */
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      emoji: null,
    };
  }

  exit() {
    this.props.navigation.navigate('Fridge')
  }

  render() {
    return (
      <View style={styles.center}>
        <TouchableOpacity onPress={() => this.exit()}>
          <Text style={styles.button}>&lt;</Text>
        </TouchableOpacity>
        <View style={{width: 15, height: 15}}></View>
        <Text style={styles.title}>Analytics</Text>
        <View style={{width: 15, height: 25}}></View>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
             style = {{
               borderRadius: 50,
               borderWidth: 15,
               width: 100,
               height: 100,
               backgroundColor:'#ffffff',
               borderColor: '#056608',
               justifyContent: 'center',
               alignItems: 'center'
             }}
             underlayColor = '#ffffff'
             >
             <Text style={styles.percentage}> 10% </Text>
           </TouchableHighlight>
           <View style={{width: 15, height: 70}}></View>
           <View style={{flexDirection: 'column'}}>
              <View style={{width: 15, height: 1}}></View>
              <Text style={styles.comment}>Good job! You saved</Text>
              <Text style={styles.comment}>more carbon than last </Text>
              <Text style={styles.comment}>week!</Text>
           </View>
          </View>
          <View style={{width: 15, height: 25}}></View>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
             style = {{
               borderRadius: 50,
               borderWidth: 15,
               width: 100,
               height: 100,
               backgroundColor:'#ffffff',
               borderColor: '#056608',
               justifyContent: 'center',
               alignItems: 'center'
             }}
             underlayColor = '#ffffff'
             >
             <Text style={styles.percentage}> 22% </Text>
           </TouchableHighlight>
           <View style={{width: 15, height: 70}}></View>
           <View style={{flexDirection: 'column'}}>
              <View style={{width: 15, height: 1}}></View>
              <Text style={styles.comment}>Most commonly</Text>
              <Text style={styles.comment}>unconsumed item: </Text>
              <Text style={styles.comment}>🍌 (22% excess)</Text>
           </View>
          </View>
          <View style={{width: 15, height: 25}}></View>
          <View style={{flexDirection: 'row'}}>
            <TouchableHighlight
             style = {{
               borderRadius: 50,
               borderWidth: 15,
               width: 100,
               height: 100,
               backgroundColor:'#ffffff',
               borderColor: '#056608',
               justifyContent: 'center',
               alignItems: 'center'
             }}
             underlayColor = '#ffffff'
             >
             <Text style={styles.percentage}>16</Text>
           </TouchableHighlight>
           <View style={{width: 15, height: 70}}></View>
           <View style={{flexDirection: 'column'}}>
              <View style={{width: 15, height: 1}}></View>
              <Text style={styles.comment}>Item that contributes</Text>
              <Text style={styles.comment}>the most greenhouse gas:</Text>
              <Text style={styles.comment}>🥩 (16 CO2e)</Text>
           </View>
          </View>
        </View>
      </View>
    );
  }
}
export default Details;
