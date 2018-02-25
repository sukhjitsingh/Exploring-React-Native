import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import DARK_KNIGHT_IMAGE from '../assets/images/TheDarkKnightRises.png'
import CHAOS_CLOWN_IMAGE from '../assets/images/ChaosClown.jpg'
import GOTHAMS_CHAMPION_IMAGE from '../assets/images/GothamsChampion.jpg'


export default class ImageView extends React.Component {

  render() {
    return (
      <View>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
})