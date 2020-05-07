import React, {Component, lazy} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import foodData from '../data/FoodData';
import Modal from 'react-native-modal';

const screen = Dimensions.get('window');
export default class NewFoodModal extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowModal: false, nameFood: null, priceFood: 0};
  }

  showModal = () => {
    this.setState({isShowModal: true});
  };

  _onSave = (name, price) => {
    const food = {
      key: this._randomKey(),
      name: name,
      price: price,
    };
    foodData.push(food);
    this.props.parentFlatlist.refreshFlatList(this._randomKey());
    this.setState({isShowModal: false});
  };

  _randomKey = _ => {
    return Math.floor(Math.random() * 100) + 1;
  };
  render() {
    return (
      <View>
        <Modal
          ref={'refAdd'}
          style={styles.container}
          animationIn="fadeIn"
          animationOut="fadeOut"
          isVisible={this.state.isShowModal}
          onBackButtonPress={_ => this.setState({isShowModal: false})}>
          <View>
            <Text style={styles.text_title}>New Food</Text>
            <TextInput
              style={styles.text_input}
              placeholder="Input name food..."
              placeholderTextColor="black"
              onChangeText={nameFood => this.setState({nameFood})}
              value={this.state.nameFood}
            />
            <TextInput
              style={styles.text_input}
              placeholder="Input price..."
              keyboardType="number-pad"
              placeholderTextColor="black"
              onChangeText={priceFood => this.setState({priceFood})}
              value={this.state.priceFood}
            />
            <View style={styles.row_button}>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  this._onSave(this.state.nameFood, this.state.priceFood)
                }>
                <Text style={styles.text_button}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={_ => this.setState({isShowModal: false})}>
                <Text style={styles.text_button}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 26,
    backgroundColor: 'white',
    width: screen.width - 40,
    minHeight: 50,
  },
  row_button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    flex: 1,
  },
  text_title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text_input: {
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'green',
    minHeight: 48,
    paddingStart: 8,
    margin: 6,
  },
  text_button: {
    backgroundColor: 'green',
    padding: 10,
    margin: 6,
    minHeight: 48,
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
