import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

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
    width: '50%',
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 36,
    color: '#323232',
    paddingBottom: 5
  },
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 16,
    color: '#323232',
    textDecorationColor: '#D0E2FF',
    textDecorationLine: 'underline',
    paddingBottom: 5,
    paddingTop: 5
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
    textAlign: 'center',
    marginTop: 15
  },
  form: {
    flex: 1,
    paddingTop: 15
  },
  formInput: {
    fontSize: 20,
    lineHeight: 30,
    minHeight: 30,
    marginTop: 10,
    marginBottom: 10
  }
})

class Add extends Component {
  state = {
    name: '',
    exp: null,
  }

  // POST to localhost:3000
  submit = () => {

  }

  render = () => {
    return (
      <View style={styles.center}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.title}>Add food item</Text>
          <Text style={styles.subtitle}>Enter the details of your new grocery store find!</Text>
          <View style={styles.form}>
            <TextInput 
              style={styles.formInput}
              placeholder="Item name"
              label="Item name"
              value={this.state.name} 
              onChangeText={(text) => this.setState({name: text})}
            />
            <TextInput 
              style={styles.formInput} 
              placeholder="Expiration date (yyyy-mm-dd)" 
              value={this.state.expDate}
              onChangeText={(text) => this.setState({exp: text})}
            />
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={() => submit()}>
              <Text style={styles.button}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Add
