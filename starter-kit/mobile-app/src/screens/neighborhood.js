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
    paddingBottom: 10,
    paddingTop: 50
  },
  scroll: {
    paddingLeft: 20,
    paddingRight: 20,
    alignSelf: 'stretch',
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 15
  },
  name: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 15,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingBottom:5
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
    marginTop: 15,
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
 * The neighborhood page lists all information about the food items that are offered by friends
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
        <ScrollView style={styles.scroll}>
        <TouchableOpacity style={{width: 34.5}} onPress={() => this.exit()}>
          <Text style={styles.button}>&lt;</Text>
        </TouchableOpacity>
        <View style={{width: 15, height: 15}}></View>
        <Text style={styles.title}>Neighborhood</Text>
        <View style={{width: 15, height: 25}}></View>
        <View style={{flexDirection: 'column'}}>

          <View style={{flexDirection: 'row'}}>
           <View style={{width: 20, height: 70}}></View>
           <View style={{flexDirection: 'column'}}>
            <Text style={styles.name}>Jian Huang</Text>
            <Text style={{fontSize:70, alignItems:'center'}}>🥦</Text>
           </View>
           <View style={{width: 40, height: 70}}></View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={{width:200}}>
                <Text style={styles.button}>Claim</Text>
              </TouchableOpacity>
            </View>
           <View style={{width: 40, height: 70}}></View>
          </View>
          <View style={{width: 15, height: 25}}></View>

          <View style={{flexDirection: 'row'}}>
           <View style={{width: 20, height: 70}}></View>
           <View style={{flexDirection: 'column'}}>
            <Text style={styles.name}>Julia Guo</Text>
            <Text style={{fontSize:70, alignItems:'center'}}>🍇</Text>
           </View>
           <View style={{width: 40, height: 70}}></View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={{width:200}}>
                <Text style={styles.button}>Claim</Text>
              </TouchableOpacity>
            </View>
           <View style={{width: 40, height: 70}}></View>
          </View>
          <View style={{width: 15, height: 25}}></View>

          <View style={{flexDirection: 'row'}}>
           <View style={{width: 20, height: 70}}></View>
           <View style={{flexDirection: 'column'}}>
            <Text style={styles.name}>Jessica Zheng</Text>
            <Text style={{fontSize:70, alignItems:'center'}}>🍓</Text>
           </View>
           <View style={{width: 20, height: 70}}></View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={{width:200}}>
                <Text style={styles.button}>Claim</Text>
              </TouchableOpacity>
            </View>
           <View style={{width: 40, height: 70}}></View>
          </View>
          <View style={{width: 15, height: 25}}></View>

          <View style={{flexDirection: 'row'}}>
           <View style={{width: 20, height: 70}}></View>
           <View style={{flexDirection: 'column'}}>
            <Text style={styles.name}>Justin Chen</Text>
            <Text style={{fontSize:70, alignItems:'center'}}>🥬</Text>
           </View>
           <View style={{width: 35, height: 70}}></View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={{width:200}}>
                <Text style={styles.button}>Claim</Text>
              </TouchableOpacity>
            </View>
           <View style={{width: 40, height: 70}}></View>
          </View>
          <View style={{width: 15, height: 25}}></View>

          <View style={{flexDirection: 'row'}}>
           <View style={{width: 20, height: 70}}></View>
           <View style={{flexDirection: 'column'}}>
            <Text style={styles.name}>Emily Zhuang</Text>
            <Text style={{fontSize:70, alignItems:'center'}}>🥑</Text>
           </View>
           <View style={{width: 26, height: 70}}></View>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={{width:200}}>
                <Text style={styles.button}>Claim</Text>
              </TouchableOpacity>
            </View>
           <View style={{width: 40, height: 70}}></View>
          </View>
          <View style={{width: 15, height: 25}}></View>
        </View>
        </ScrollView>
      </View>
    );
  }
}
export default Details;
