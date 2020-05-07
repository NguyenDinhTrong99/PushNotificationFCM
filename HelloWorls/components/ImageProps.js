import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
export default class ImageProps extends Component {
  render() {
    return (
      <View>
        <Image
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 147,
            height: 147,
            borderWidth: 1,
            borderColor: 'red',
          }}
          source={{uri: this.props.uri}}
        />
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}
