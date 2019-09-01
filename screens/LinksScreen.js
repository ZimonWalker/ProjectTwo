import React from 'react';
import { View, StyleSheet, Button, } from 'react-native';

import ImageRo from './ImageRo.js';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Authentication',
  };

  onPressLearnMore = () => {
    
    // this.props.navigation.navigate('Settings')
  }

  render() {
    return (
      <View style={styles.container}>
        
        
      <ImageRo />

      <Button
            onPress={this.onPressLearnMore}
            title="Authenticate"
            color="#841584"
            // accessibilityLabel="Learn more about this purple button"
          />

        
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
});
