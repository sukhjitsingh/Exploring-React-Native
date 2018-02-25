import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class ButtonView extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentBackgroundColor: '#73CB49'
    }
  }

  changeBackgroundColor = () => {
    const color = '#' + Math.floor(Math.random() * 16777215).toString(16)

    this.setState({
      currentBackgroundColor: color
    })
  }

  render() {
    return (
      <View>
        <View
          style={styles.changeColorContainer}
          backgroundColor={this.state.currentBackgroundColor}>
          <Button
            title="Press me to change color!"
            onPress={this.changeBackgroundColor}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  changeColorContainer: {
    height: 200,
    flex: 4,
    alignContent: 'center',
    justifyContent: 'center',
  },
})