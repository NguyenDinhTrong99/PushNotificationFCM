import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class AlertEx extends Component {
  constructor(props) {
    super(props);
    this.state = {user: '', pass: ''};
  }

  _onChangeText = (key, value) => {
    if (key === 'user') {
      this.setState({
        user: value,
      });
    } else {
      this.setState({
        pass: value,
      });
    }
  };
  _onPress = () => {
    Alert.alert(
      'Login',
      'You want login system',
      [
        {
          text: 'Remove',
          onPress: () => {
            this.setState({user: '', pass: ''});
          },
        },
        {
          text: 'Yes',
          onPress: () => {
            this.setState({result: this.state.user + "\n" + this.state.pass});
          },
        },
        {
          text: 'Cancel',
          onPress: () => {
            this.setState({result: 'cancel'});
          },
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  };

  _renderTextInput = (title) => {
      return <TextInput
      style={styles.text_input}
      placeholderTextColor="black"
      placeholder={"Input " + title + " ..."}
      secureTextEntry={title === "password"}
      onChangeText={value => this._onChangeText(title, value)}
      value={title === "password" ? this.state.pass : this.state.user}
    />;
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text_title}>Login</Text>
        {this._renderTextInput("user")}
        {this._renderTextInput("password")}
        <TouchableOpacity style={styles.button} onPress={() => this._onPress()}>
          <Text style={styles.text_login}>Login</Text>
        </TouchableOpacity>
        <Text>{this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
  },
  text_title: {
    fontSize: 28,
    color: 'orange',
    alignSelf: 'center',
    margin: 6,
  },
  text_input: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 30,
    paddingStart: 10,
    margin: 8,
  },
  text_login: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  button: {
    backgroundColor: 'dodgerblue',
    height: 48,
    width: '30%',
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
