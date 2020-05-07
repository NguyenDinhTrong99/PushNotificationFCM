import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';

export default class Layout121 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      age: props.age,
      address: props.address,
      nameCache: props.nameCache,
      ageCache: props.ageCache,
      addressCache: props.addressCache,
    };
  }
  _onClickShowListener = _ => {
    this.setState({nameCache: this.state.name});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input_name}
          placeholder="Input your name..."
          placeholderTextColor="black"
          numberOfLines={1}
          onChangeText={name => this.setState({name})}
          value={this.state.name}
        />
        <View style={styles.container_row}>
          <Text style={styles.text} numberOfLines={1}>
            {this.state.nameCache}
          </Text>
          <TouchableHighlight onPress={this._onClickShowListener}>
            <Text numberOfLines={3} style={styles.button_show_name}>
              Show
            </Text>
          </TouchableHighlight>
        </View>

        <TextInput
          style={styles.input_name}
          placeholder="Input your age..."
          placeholderTextColor="black"
          multiline={true}
          keyboardType="number-pad"
          onChangeText={age => this.setState({age})}
          value={this.state.age}
        />
        <View style={styles.container_row}>
          <Text style={styles.text} numberOfLines={1}>
            {this.state.ageCache}
          </Text>
          <TouchableOpacity
            onPress={_ => {
              this.setState({
                ageCache: this.state.age,
              });
            }}>
            <Text numberOfLines={3} style={styles.button_show_name}>
              Show
            </Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input_name}
          placeholder="Input your address..."
          placeholderTextColor="black"
          multiline={true}
          onChangeText={address => this.setState({address})}
          value={this.state.address}
        />
        <View style={styles.container_row}>
          <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
            {this.state.addressCache}
          </Text>
          <TouchableWithoutFeedback
            onPress={_ => {
              this.setState({
                addressCache: this.state.address,
              });
            }}>
            <Text numberOfLines={3} style={styles.button_show_name}>
              Show
            </Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
    marginTop: 60,
    paddingTop: 30,
    paddingStart: 30,
    paddingEnd: 30,
    backgroundColor: 'lightsalmon',
    alignItems: 'flex-end',
  },
  input_name: {
    backgroundColor: '#ffffff',
    width: 250,
    fontFamily: 'Cochin',
  },
  container_row: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 12,
    marginBottom: 20,
    alignSelf: 'flex-end',
  },
  text: {
    flex: 50,
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 20,
    marginBottom: 20,
    color: 'red',
    textAlign: 'center',
    textAlignVertical: 'center',
    padding: 4,
  },
  button_show_name: {
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 5,
    height: 38,
    width: 100,
    backgroundColor: 'green',
    marginStart: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
