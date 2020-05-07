/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight,
  Image,
} from 'react-native';
export default class App extends Component {
  state = {
    user: '',
    password: '',
    uri: 'https://image.flaticon.com/icons/png/512/295/295128.png',
  };
  _checkLogin = (user, pass) => {
    if(user == "" || pass == ""){
      alert("Please input data!");
    } else {
      if(user == "admin" && pass == "123"){
        alert("Succeed!");
        this.setState({
          uri: 'https://thestylishindian.com/assets/images/success.png',
        });
      } else {
        alert("Failed!");
        this.setState({
          uri:
            'https://www.pinclipart.com/picdir/middle/59-599295_sql-server-login-failed-for-user-nt-authorityanonymous.png',
        });
      }
    }
  };
  render() {
    return (
      // eslint-disable-next-line react-native/no-inline-styles
      <View style={{flex: 1}}>
        <View style={styles.container_register}>
          <Text style={styles.title}>Login</Text>
          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={styles.text_register}
            placeholder="Input user name...."
            placeholderTextColor="black"
            onChangeText={user => this.setState({user})}
            onSubmitEditing={text => {
              // eslint-disable-next-line no-alert
              alert(this.state.user);
            }}
            value={this.state.user}
          />
          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={styles.text_register}
            placeholder="Input password...."
            placeholderTextColor="black"
            secureTextEntry={true}
            onChangeText={password => this.setState({password})}
            onSubmitEditing={text => {
              // eslint-disable-next-line no-alert
              alert(this.state.password);
            }}
            value={this.state.password}
          />
          <TouchableHighlight>
            <Button
              onPress={_ =>
                this._checkLogin(this.state.user, this.state.password)
              }
              color="green"
              title="Login"
            />
          </TouchableHighlight>
        </View>
        <View style={styles.container_image}>
          <Image
            source={{uri: this.state.uri}}
            style={styles.image}
            // eslint-disable-next-line no-alert
            onError={() => alert('Load error!')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container_register: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  container_image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: 6,
    fontSize: 32,
    textAlign: 'center',
    color: 'green',
  },
  text_register: {
    borderColor: 'green',
    borderRadius: 5,
    borderWidth: 1,
    margin: 6,
    padding: 6,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 6,
    backgroundColor: 'grey',
  },
});
