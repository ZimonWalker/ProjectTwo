import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Test from './Test.js';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    // /* Go ahead and delete ExpoConfigView and replace it with your
    //  * content, we just wanted to give you a quick view of your config */
    // return <ExpoConfigView />;
    return (
      <View style={styles.container}>
        
        <Text style={styles.TextComponentStyle}>Setup In Apps Authentication To Lock Personal Information From Unauthorized Acces!{}</Text>
        <Text style={styles.getStartedText}>{"\n"} </Text>
        <Test />
        
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  TextComponentStyle: {
    borderRadius: 5,
    // Set border width.
    borderWidth: 2,
    // Set border Hex Color Code Here.
    borderColor: '#000000',
    // Setting up Text Font Color.
    color: '#000000',
    // Setting Up Background Color of Text component.
    backgroundColor : '#CDDC39',
    // Adding padding on Text component.
    padding : 2,
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  getStartedText: {
    fontSize: 17,
    color: '#000000',
    lineHeight: 24,
    textAlign: 'left',
  },

});
