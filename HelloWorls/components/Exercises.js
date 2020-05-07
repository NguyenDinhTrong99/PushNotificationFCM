import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class Exercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: props.uri,
    };
  }
  _onSubmit = _ => {
    console.log('onSubmit');
  };
  render() {
    const imageUrl =
      'https://hips.hearstapps.com/ghk.h-cdn.co/assets/17/30/2560x1280/landscape-1500925839-golden-retriever-puppy.jpg?resize=480:*';
    return (
      <View style={styles.container}>
        <Image style={styles.image_avatar} source={{uri: imageUrl}} />
        <View style={styles.view_content}>
          <KeyboardAwareScrollView>
            <View>
              <InputData placeholder="Input your full name..." />
              <InputData placeholder="Input your birthday..." />
              <InputData placeholder="Input your email..." />
              <InputData placeholder="Input your phone..." />
              <InputData placeholder="Input your address..." />
              <InputData placeholder="Input your skype link..." />
              <InputData placeholder="Input your facebook link..." />
              <InputData placeholder="More..." multiline={true} />
              <TouchableOpacity onPress={this._onSubmit}>
                <Text style={styles.text_submit}>Submit</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAwareScrollView>
        </View>
      </View>
    );
  }
}

class InputData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }
  render() {
    return (
      <TextInput
        style={styles.text_input}
        placeholder={this.props.placeholder}
        placeholderTextColor="black"
        onChangeText={value => this.setState({value})}
        keyboardType={this.props.keyboardType}
        value={this.state.value}
        multiline={this.props.multiline}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#eceff1',
  },
  view_content: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    height: '80%',
    width: '90%',
    margin: 1,
    position: 'relative',
    top: 0,
    padding: 10,
    paddingTop: 56,
  },
  image_avatar: {
    width: 96,
    height: 96,
    borderRadius: 100,
    position: 'relative',
    top: 56,
    right: 0,
    zIndex: 1,
    borderWidth: 2,
    borderColor: 'green',
  },
  text_input: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: 'green',
    padding: 8,
    margin: 8,
  },
  text_submit: {
    height: 50,
    width: 120,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    color: 'white',
  },
});
