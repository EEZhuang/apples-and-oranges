import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { emojify } from 'react-emojione'
import Config from 'react-native-config';
// import { sha256 } from 'react-native-sha256'

const styles = StyleSheet.create({
  center: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
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
    paddingBottom: 5
  },
  subtitle: {
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 16,
    color: '#323232',
    textDecorationColor: '#e0e0e0',
    textDecorationLine: 'underline',
    paddingBottom: 5,
    paddingTop: 5
  },
  content: {
    fontFamily: 'IBMPlexSans-Medium',
    color: '#323232',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 16
  },
  buttonGroup: {
    flex: 1,
    paddingTop: 15,

  },
  button: {
    backgroundColor: '#056608',
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
    fontFamily: 'IBMPlexSans-Light',
    fontSize: 20,
    lineHeight: 30,
    minHeight: 30,
    marginBottom: 10,
    borderColor: '#e0e0e0',
    padding: 10,
    borderWidth: 1
  }
})

/*
 * Creates the add food item screen to allow users to track their food items
 */
class Add extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)

    this.state = {
      name: '',
      emoji: '',
      expDate: null
    }
  }

  // POST to localhost:3000
  submit () {
    return fetch(Config.STARTER_KIT_SERVER_URL + '/food', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        emoji: this.state.emoji,
        'exp-date': this.state.expDate
      })
    }).then((json) => {
      Alert.alert('Success!', 'Food item data saved correctly')
      this.setState({
        name: '',
        emoji: '',
        expDate: null
      })
      this.props.navigation.navigate('Fridge')
    })
      .catch((error) => {
        Alert.alert('Error', 'There was a problem saving food item data')
        console.error(error)
      })
  }

  // Displays the item name, emoji, and expiration date input field
  render () {
    return (
      <View style={styles.center}>
        <ScrollView style={styles.scroll}>
          <Text style={styles.title}>Add food item 🍎</Text>
          <Text style={styles.subtitle}>Enter the details of your new grocery store find!</Text>
          <View style={styles.form}>
            <Text style={styles.content}>Item name</Text>
            <TextInput
              style={styles.formInput}
              placeholder="Apple"
              value={this.state.name}
              onChangeText={(text) => this.setState({ name: text})}
              onBlur={() => {
                const name = this.state.name.toLowerCase();
                const emoji = emojify(':' + name + ':', {output: 'unicode'})
                if (emoji[0] !== ':') {
                  this.setState({emoji: emoji})
                }
              }}
            />
            <Text style={styles.content}>Display emoji</Text>
            <TextInput
              style={styles.formInput}
              placeholder="{example: 🍎}"
              value={this.state.emoji}
              onChangeText={(text) => this.setState({ emoji: text })}
            />
            <Text style={styles.content}>Expiration date (yyyy-mm-dd)</Text>
            <TextInput
              style={styles.formInput}
              placeholder="2020-07-15"
              value={this.state.expDate}
              onChangeText={(text) => this.setState({ expDate: text })}
            />
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity onPress={() => this.submit()}>
              <Text style={styles.button}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Add
