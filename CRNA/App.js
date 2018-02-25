import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, Alert, Keyboard } from 'react-native';

import DARK_KNIGHT_IMAGE from './assets/images/TheDarkKnightRises.png'
import CHAOS_CLOWN_IMAGE from './assets/images/ChaosClown.jpg'
import GOTHAMS_CHAMPION_IMAGE from './assets/images/GothamsChampion.jpg'


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentBackgroundColor: '#73CB49',
      phrase: ''
    }
  }

  changeBackgroundColor = () => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16)

    this.setState({
      currentBackgroundColor: color
    })
  }

  handleSubmit = () => {
    if (this.state.phrase === 'awesome' || this.state.phrase === 'Awesome') {
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
      <ScrollView style={styles.scrollViewContainer}>

        <View style={styles.bigImageContainer}>
          <Image
            source={DARK_KNIGHT_IMAGE}
            style={styles.bigImage}
          />
        </View>

        <View style={styles.smallImageContainer}>
          <Image
            source={GOTHAMS_CHAMPION_IMAGE}
            style={styles.smallImage}
          />
          <Image
            source={CHAOS_CLOWN_IMAGE}
            style={styles.smallImage}
          />
        </View>

        <View
          style={styles.changeColorContainer}
          backgroundColor={this.state.currentBackgroundColor}
        >
          <Button
            // style={styles.changeColorButton}
            title="Press me to change color!"
            onPress={this.changeBackgroundColor}
          />
        </View>

        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.phraseInput}
            placeholder="Enter a secret phrase"
            placeholderTextColor='#FFF'
            value={this.state.phrase}
            onChangeText={(text) => this.setState({ phrase })}
            onSubmitEditing={this.handleSubmit}
          />
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    backgroundColor: '#343535',
    flex: 1,
    flexDirection: 'column',
  },

  bigImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  bigImage: {
    alignContent: 'center',
    height: 300,
    width: '100%',
  },

  smallImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    padding: 10,
  },

  smallImage: {
    flexDirection: 'column',
    alignContent: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
  },

  changeColorContainer: {
    height: 200,
    flex: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },

  changeColorButton: {
    borderRadius: 12,
    backgroundColor: '#fff'
  },

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
  },

});
