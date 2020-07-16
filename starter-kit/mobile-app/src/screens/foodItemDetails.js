import React from 'react';
import { calcTimeDelta } from 'react-countdown'
import { StyleSheet, View, Image, Text, TouchableOpacity, Button, Linking, TextInput, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
  }
});

/*
 * The details page lists all information about the food item like the expiration date
 */
class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      update: false,
      json: null,
      name: null,
      expDate: null,
      emoji: null,
      edit: false
    };
  }

  // Sets state when the component is created
  componentDidMount() {
    this.setState({json: this.props.route.params.json, name: this.props.route.params.json.name, expDate: this.props.route.params.json['exp-date'], emoji: this.props.route.params.json.emoji});
  }

  // Sets state if the component updates
  componentDidUpdate(prevProps) {
    if ((JSON.stringify(this.props.route.params.json) != JSON.stringify(this.state.json)) && this.state.update == false) {
      this.setState({json: this.props.route.params.json, name: this.props.route.params.json.name, expDate: this.props.route.params.json['exp-date'], emoji: this.props.route.params.json.emoji});
    }
  }

  // Updates the item info when necessary
  updateJSON() {
    return fetch('http://localhost:3000/update', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([this.state.json, {name: this.state.name, 'exp-date': this.state.expDate, emoji: this.state.emoji}])
      }).then((json) => {
        Alert.alert('Success!', 'Food item data updated correctly')
        this.setState({json : {name: this.state.name, 'exp-date': this.state.expDate, emoji: this.state.emoji}});

      })
        .catch((error) => {
          Alert.alert('Error', 'There was a problem updating food item data')
      })
  }

  // Calculate number of days until expiration
  calcDaysLeft(expDate) {
    return calcTimeDelta(expDate).days;
  }

  // Updates the name of the item
  updateName(text) {
    this.setState({name: text.trim()});
  }

  // Updates the expiration date of the item
  updateExpDate(text) {
    this.setState({expDate: text.trim()});
  }

  // Updates the emoji for the item
  updateEmoji(text) {
    this.setState({emoji: text.trim()})
  }

  // Displays the name of the food item
  displayName() {
    if (this.state.edit == true) {
      return (<TextInput onChangeText={text => this.updateName(text)} defaultValue={this.state.name} style={styles.nameInput} />);
    } else {
      return (
        <Text style={styles.title}>{this.state.name}</Text>
      );
    }
  }

  // Displays the emoji of the food item
  displayEmoji() {
    if (this.state.edit == true) {
      return (<TextInput onChangeText={text => this.updateEmoji(text)} defaultValue={this.state.emoji} style={styles.emojiInput} />);
    } else {
      return <Text style={styles.title}>{this.state.emoji}</Text>
    }
  }

  // Displays the expiration date of the food item
  displayExpDate() {
    if (this.state.edit == true) {
      return (<TextInput onChangeText={text => this.updateExpDate(text)} defaultValue={this.state.expDate} style={styles.dateInput} />);
    } else {
      return  <Text style={styles.content}>{this.state.expDate}</Text>;
    }
  }

  // Submits any changes to the food item and sets update to true
  done() {
    if (JSON.stringify(this.state.json) != JSON.stringify({name: this.state.name, 'exp-date': this.state.expDate, emoji: this.state.emoji})) {
      this.setState({update: true})
      this.updateJSON();
    }
    this.setState({edit: false});
  }

  // Displays the edit button. When pressed, allows user to edit food item info
  displayEditDoneButton() {
    if (this.state.edit == true) {
      return (
        <TouchableOpacity onPress={state => this.done()}>
          <Text style={styles.button}>Done</Text>
        </TouchableOpacity>
      );
    } else {
      return(
        <TouchableOpacity onPress={state => this.setState({edit: true})}>
          <Text style={styles.button}>Edit</Text>
        </TouchableOpacity>
      );
    }
  }

  deleteItem() {
    return fetch('http://localhost:3000/delete', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.json)
    }).then((json) => {
      Alert.alert('Success!', 'Food item data deleted correctly')
      this.setState({json: {"name":"","exp-date":""}}) //for demo purposes
      //this.setState({json: null})
      this.props.navigation.navigate('Fridge')
    })
      .catch((error) => {
        Alert.alert('Error', 'There was a problem deleting food item data')
        console.error(error)
    })
  }

  exit() {
    this.setState({update: false});
    this.props.navigation.navigate('Fridge')
  }

  render() {
    return (
      <View style={styles.center}>
        <TouchableOpacity onPress={() => this.exit()}>
          <Text style={styles.button}>&lt;</Text>
        </TouchableOpacity>
        <Text style={styles.title}/>
        <View style={{flexDirection: 'row'}}>
          {this.displayName()}
          <View style={{width: 15, height: 70}}></View>
          {this.displayEmoji()}
        </View>
        <Text style={styles.subtitle}>
          {this.calcDaysLeft(this.state.expDate)} Days Left
        </Text>
        <Text style={styles.content}>
          Expires on:
        </Text>
        {this.displayExpDate()}
        <View style={styles.buttonGroup}>
          {this.displayEditDoneButton()}
          <TouchableOpacity onPress={() => this.deleteItem()}>
            <Text style={styles.button}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Details;
