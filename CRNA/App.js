import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';


import ImageView from './components/ImageView'
import ButtonView from './components/ButtonView'
import InputView from './components/InputView'
import ListView from './components/ListView'

export default class App extends React.Component {

  render() {
    return (
      <ScrollView style={styles.scrollViewContainer}>

        <ImageView/>
        <ButtonView/>
        <InputView/>
        <ListView/>
        
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
});
