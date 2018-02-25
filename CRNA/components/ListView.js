import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableHighlight, WebView } from 'react-native';

import { COMMUNITY_MEMBERS } from '../assets/constants'

const GITHUB_URL = 'https://www.github.com/'

export default class ListView extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      showWebView: false,
      githubUsername: '',
    }
  }

  renderWebView() {
    return (
      <View style={{ height: '100%', marginTop: 20 }}>
        <WebView
          source={{ uri: GITHUB_URL + this.state.githubUsername }}
          scalesPageToFit
          automaticallyAdjustContentInsets={false}
          style={{
            flex: 1
          }}
        />
      </View>
    );
  }

  render() {

    return (

      <View>
        {this.state.showWebView && this.renderWebView()}
        <View>
          <FlatList
            style={styles.list}
            data={COMMUNITY_MEMBERS}
            containerStyle={{ borderBottomWidth: 0 }}
            removeClippedSubviews={true}
            keyExtractor={(item, index) => index}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={() => this.setState(
                {
                  showWebView: true,
                  githubUsername: item.github_username
                }
              )}>
                <View style={styles.itemContainer}>
                  <View style={styles.imageNameContainer}>
                    <Image
                      source={{ uri: item.image }}
                      style={
                        {
                          width: 60,
                          height: 60,
                          borderRadius: 30
                        }}
                    />

                    <View style={styles.textNameContainer}>
                      <Text style={styles.itemName}> {item.name} </Text>
                    </View>

                  </View>

                  <View style={styles.textGitContainer}>
                    <Text style={styles.itemGitName}>@{item.github_username} </Text>
                  </View>

                </View>
              </TouchableHighlight>
            )}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
    flex: 1,
    backgroundColor: '#fff',
  },

  imageNameContainer: {
    flexDirection: 'row',
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 10,
  },

  textNameContainer: {
    justifyContent: 'center',
    alignContent: 'flex-start',
    paddingLeft: 20,
  },

  textGitContainer: {
    justifyContent: 'center',
    padding: 5,
  },

  itemName: {
    fontSize: 15,
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },

  itemGitName: {
    fontSize: 10,
    alignContent: 'flex-end',
  },

});
