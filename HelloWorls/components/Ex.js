import React, {Component, PureComponent} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

const DATA = [
  {
    id: 0,
    title: 'Row 0',
  },
  {
    id: 1,
    title: 'Row 1',
  },
  {
    id: 2,
    title: 'Row 2',
  },
  {
    id: 3,
    title: 'Row 3',
  },
  {
    id: 4,
    title: 'Row 4',
  },
  {
    id: 5,
    title: 'Row 5',
  },
];

export default class Ex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
      selected: new Map(),
    };
  }

  _keyExtractor = (item, index) => item.id.toString();

  _onPressItem = id => {
    const selected = new Map(this.state.selected);
    selected.set(id, !selected.get(id)); // toggle

    this.setState({
      selected,
    });
  };

  _renderItem = ({item}) => {
    const selected = this.state.selected.get(item.id);
    return (
      <ListItem
        id={item.id}
        onPressItem={this._onPressItem}
        selected={selected}
        title={item.title}
      />
    );
  };

  render() {
    console.log('render');
    return (
      <View style={styles.view_container}>
        <FlatList
          data={this.state.data}
          //   extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

class ListItem extends Component {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    console.log(this.props.selected, this.props.title);
    const color = this.props.selected ? 'tomato' : 'steelblue';
    return (
      <TouchableOpacity
        style={[styles.view_listItem, {backgroundColor: color}]}
        onPress={this._onPress}>
        <View style={styles.view_title}>
          <Text style={styles.text_title}>{this.props.title}</Text>
        </View>
        <View style={styles.view_separation} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  view_container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    paddingTop: 60,
  },
  view_listItem: {
    height: 60,
  },
  view_title: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_title: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  view_separation: {
    height: 1,
    backgroundColor: '#ffffff',
  },
});
