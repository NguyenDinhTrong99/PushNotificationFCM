import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, TextInput} from 'react-native';

class Toast extends Component {
  render() {
    return (
      <View>
        <Text>Result {this.props.name}</Text>
      </View>
    );
  }
}

export default class FlexedDemo extends Component {
  // eslint-disable-next-line prettier/prettier
    state = {
    _user: '',
    _pass: '',
    name: '',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text_title}>Login</Text>
        <TextInput
          style={styles.input_data}
          placeholder="Input user name...."
          placeholderTextColor="red"
          onChangeText={_user => this.setState({_user})}
          value={this.state._user}
        />
        <TextInput
          style={styles.input_data}
          placeholder="Input password...."
          placeholderTextColor="red"
          secureTextEntry={true}
          onChangeText={_pass => this.setState({_pass})}
          value={this.state._pass}
        />
        <Button
          color="green"
          margin="8"
          title="Login"
          onPress={_ => {
            // eslint-disable-next-line eqeqeq
            if (this.state._user == 'admin' && this.state._pass == '123') {
              this.setState({name: 'success'});
            } else {
              this.setState({name: 'failed'});
            }
          }}
        />
        <Toast name={this.state.name}></Toast>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  text_title: {
    fontSize: 32,
    textAlign: 'center',
    color: 'green',
  },
  input_data: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green',
    padding: 6,
    margin: 6,
  },
  button_login: {
    color: 'black',
    height: 56,
    width: 120,
  },
});
