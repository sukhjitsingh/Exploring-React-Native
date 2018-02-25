import React from 'react';
import { StyleSheet, View, TextInput, Alert, Keyboard } from 'react-native';

export default class ButtonView extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      phrase: '',
    }
  }

  handleSubmit = () => {
    if (this.state.phrase === 'Batman' || this.state.phrase === 'batman') {
      Keyboard.dismiss
      Alert.alert(
        'Success',
        'You are awesome!',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false })
    } else {
      Keyboard.dismiss
      Alert.alert(
        'Invalid',
        'You entered the wrong phrase!',
        [
          { text: 'Try again', onPress: () => console.log('Try again pressed') }
        ],
        { cancelable: false }
      )
    }
  }

  render() {
    return (
      <View style={styles.textInputContainer}>
        <TextInput
          style={styles.phraseInput}
          placeholder="Enter a secret phrase"
          placeholderTextColor='#FFF'
          value={this.state.phrase}
          onChangeText={(phrase) => this.setState({ phrase })}
          onSubmitEditing={this.handleSubmit}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textInputContainer: {
    flex: .1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 15,
    height: 150,
  },

  phraseInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFF',
    padding: 10,
    height: 60,
    color: 'white'
  }

})