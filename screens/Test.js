import React from 'react';
import { AppRegistry, View, Image } from 'react-native';

export default class Test extends React.Component {
  render() {
    return (
      <View>
        <Image style={{width: 350, height: 350}}
          source={require('./satu.png')}
        />
       
        
      </View>
    );
  }
}

// skip this line if using Create React Native App
// AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);
