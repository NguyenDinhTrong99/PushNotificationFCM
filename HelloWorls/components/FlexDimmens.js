import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class FlexDimmens extends Component {
  render() {
    return (
      <View style={styles.view_Container}>
        <KeyboardAwareScrollView
          onKeyboardWillShow={frame => {
            console.log('Keyboard event:', frame);
          }}>
          <View>
            <TextInput
              style={styles._input}
              placeholder="Input full name...."
            />
            <TextInput
              style={styles._input}
              placeholder="Input full name...."
            />
            <TextInput
              style={styles._input}
              placeholder="Input full name...."
            />
            <TextInput
              style={styles._input}
              placeholder="Input full name...."
            />
            <TextInput
              style={styles._input}
              placeholder="Input full name...."
            />
            <TextInput
              style={styles._input}
              placeholder="Input full name...."
            />
            <TextInput
              style={styles._input}
              placeholder="Input full name...."
            />
            <TextInput
              style={styles._input}
              placeholder="Input full name...."
            />
            <TextInput
              style={styles._input}
              placeholder="Input full name...."
            />
            <TextInput
              style={styles._input}
              placeholder="Input full name...."
            />
            <TextInput
              style={styles._input}
              placeholder="Input full name...."
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view_Container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  _input: {
    height: 50,
    borderRadius: 5,
    borderColor: 'green',
    borderWidth: 1,
    margin: 6,
  },
});
