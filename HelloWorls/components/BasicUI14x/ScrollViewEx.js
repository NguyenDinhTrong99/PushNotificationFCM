import React, {Component} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class ScrollViewEx extends Component {
  constructor(props) {
    super(props);
    this.state = {text_title: '', text_content: ''};
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Container - shouldComponentUpdate');
    console.log('nextState: ' + nextState.text_title + '\n State:\t' + this.state.text_title);
    if (nextState.text_title != this.state.text_title) {
      return true;
    } else {
      return false;
    }
  }

  _changeText = value => {
    this.setState({
      text_content: value,
    });
  };

  _onSave = () => {
    this.setState({
      text_title: this.state.text_title + " " + this.state.text_content,
    });
    this.refs.scrolled.scrollToEnd();
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroll_container} ref={'scrolled'} >
          <Text style={styles.text_title}>
            {this.state.text_title === '' ? 'Title' : this.state.text_title}
          </Text>
          <TextInput
          style={styles.text_input}
            placeholder="Input content..."
            placeholderTextColor="white"
            multiline={true}
            onChangeText={value => this._changeText(value)}
          />
          <TouchableOpacity style={styles.button} onPress={this._onSave}>
            <Text style={styles.text_button}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll_container: {
      backgroundColor: 'green',
      margin: 20,
    },
    text_title: {
        color: 'white',
        margin: 4,
        fontSize: 16,
        padding: 2
    },
    text_input: {
        color: 'white',
        margin: 4,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 4,
        padding: 4,
        minHeight: 50,
    },
    text_button: {
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    button: {
        height: 48,
        fontSize: 16,
        backgroundColor: 'dodgerblue',
        width: '50%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 10,
    },
});
