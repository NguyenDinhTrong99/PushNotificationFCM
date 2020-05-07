import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const screen = Dimensions.get('window');
class Modals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      text: '',
    };
  }

  _showModal = () => {
    this.setState({isVisible: true});
  };

  _hideModal = () => {
    this.setState({isVisible: false});
    alert('Modal close...! ' + this.state.text);
  };

  _onChangeText = value => {
    this.setState({
      text: value,
    });
  };

  render() {
    return (
      <Modal
        ref={'modal'}
        transparent={true}
        visible={this.state.isVisible}
        hardwareAccelerated={true}
        onRequestClose={() => {
          alert('close modal ' + this.state.text);
          this._hideModal();
        }}
        animationType="fade">
        <View style={styles.modal_view}>
          <View
            style={{
              backgroundColor: 'azure',
              width: screen.width - 30,
              padding: 20,
              alignSelf: 'center',
            }}>
            <Text style={{color: 'green', fontSize: 18, alignSelf: 'center'}}>
              Modal
            </Text>
            <TextInput
              placeholder="Input data..."
              style={styles.text_input}
              onChangeText={value => this._onChangeText(value)}
            />
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                height: 50,
                width: screen.width - 100,
                margin: 6,
                backgroundColor: 'blue',
                justifyContent: 'center',
              }}
              onPress={() => this._hideModal()}>
              <Text style={styles.text_button}>Hide Modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}
export default class ModalEx extends Component {
  constructor(props) {
    super(props);
  }

  _onShowModal = () => {
    this.refs.modal._showModal();
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this._onShowModal()}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            Show Modal
          </Text>
        </TouchableOpacity>
        <Modals ref={'modal'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    width: 120,
    backgroundColor: 'green',
  },
  text_input: {
    borderColor: 'green',
    borderWidth: 1,
    margin: 6,
    paddingStart: 4,
  },
  modal_view: {
    flex: 1,
    backgroundColor: '#525252',
    width: screen.width,
    height: 176,
    justifyContent: 'center',
  },
  text_button: {
    color: 'white',
    textAlign: 'center',
  },
});
