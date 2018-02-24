import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

const BACKGROUND_COLORS = ["#6BE387", "#387142", "#032E52", "#549091", "#EDD298", "#D6293D", "#FF9751", "#5CD6E8", "#AFFF6B", "#E8638E", "#FFE765"];


export default class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      currentColor: 'FFFFF'
    }
  }

  changeBackgroundColor() {
    var color = BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)];

    this.setState({ currentColor: color })
  }

  render() {

    const { currentColor } = this.state

    return (
      <ScrollView style={styles.scrollViewContainer}>

        <View style={styles.bigImageContainer}>
         <Image
          source={require('./TheDarkKnightRises.png')}
          style={styles.bigImage}
         />
        </View>

        <View style={styles.smallImageContainer}>
        <Image
          source={require('./GothamsChampion.jpg')}
          style={styles.smallImage}
        />
        <Image
          source={require('./ChaosClown.jpg')}
          style={styles.smallImage}
        />
        </View>
          <Button 
            title="Press me!"
            onPress={() => this.state.changeBackgroundColor()}
          />
        <View>
        </View>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewContainer: {
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
    
});
