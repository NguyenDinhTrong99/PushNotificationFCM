import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const URL = 'http://192.85.4.97/Champ/list-champ.php';
const screen = Dimensions.get('window');
class ItemView extends Component {
    _onClickItem = champ =>{
        alert("The " + champ + " say hello!\n Nice to meet you! ^^");
    }
  render() {
    return (
      <View style={styles._container}>
        <TouchableOpacity onPress={() => this._onClickItem(this.props.item.name_champ)}>
        <Text style={styles._text}>{this.props.item.name_champ}</Text>
        <Image
          style={styles._image}
          source={{uri: this.props.item.image_champ}}
        />
        </TouchableOpacity>
      </View>
    );
  }
}
export default class FlatListHorizontal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  _renderSeparator = () => {
    return <View style={styles.item_separator} />;
  };
  render() {
    return (
      <View>
        <FlatList
        nestedScrollEnabled={true}
          horizontal={true}
          data={this.state.data}
          renderItem={({item, index}) => <ItemView item={item} index={index} />}
          keyExtractor={item => item.key_champ}
          ItemSeparatorComponent={this._renderSeparator}
        />
      </View>
    );
  }

  componentDidMount() {
    this._fetchDataFromJsonServer();
  }

  _fetchDataFromJsonServer() {
    fetch(URL)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({data: response});
      })
      .catch(e => alert(e));
  }
}

const styles = StyleSheet.create({
  _container: {
    flex: 1,
    flexDirection: 'column-reverse',
    backgroundColor: 'green',
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  _text: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '400',
  },
  _image: {
    height: 200,
    width: 175,
  },
  item_separator: {
    height: '100%',
    width: 1,
    backgroundColor: 'white',
  },
});
