/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import TextProps from './TextProps';

export default class PropsDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
    };
  }
  render() {
    return (
      <View>
        <Text style={{margin: 6, color: 'black'}}>
          Input data and to show data using state and props!
        </Text>
        <TextInput
          style={styles._input}
          placeholder="Input your name..."
          onChangeText={name =>
            this.setState(oldState => {
              return {
                name: name,
              };
            })
          }
          value={this.state.name}
        />
        <TextInput
          style={styles._input}
          placeholder="Input your age..."
          onChangeText={age =>
            this.setState(oldState => {
              return {
                age: age,
              };
            })
          }
          value={this.state.age}
        />
        <TextProps name={this.state.name} age={this.state.age} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  _input: {
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'green',
    padding: 6,
    margin: 6,
  },
});
