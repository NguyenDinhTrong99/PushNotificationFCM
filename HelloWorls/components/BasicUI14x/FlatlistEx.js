import React, {Component, PureComponent} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

const DATA = [
  {
    id: 0,
    name: 'Zero',
  },
  {
    id: 1,
    name: 'One',
  },
  {
    id: 2,
    name: 'Two',
  },
  {
    id: 3,
    name: 'Three',
  },
  {
    id: 4,
    name: 'Four',
  },
  {
    id: 5,
    name: 'Five',
  },
  {
    id: 6,
    name: 'Six',
  },
  {
    id: 7,
    name: 'Seven',
  },
];

class Item extends Component {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };
  render() {
    const color = this.props.selected ? 'tomato' : 'green';
    return (
      <TouchableOpacity onPress={this._onPress} style ={{backgroundColor: color}} >
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class FlatlistEx extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
      selected: new Map(),
    };
  }

  _renderHeader = () => {
    return <Text>This is header</Text>;
  };

  _renderFooter = () => {
    return <Text>This is footer</Text>;
  };

  _renderItem = ({item}) => {
    const selected = this.state.selected.get(item.id);
    return (
      <Item item={item} onPressItem={this._onPressItem} selected={selected} />
    );
  };

  _renderSeparator = () => {
    return (
      <View style={{height: 1, width: '100%', backgroundColor: 'white'}} />
    );
  };

  _keyExtractor = item => {
    return item.id.toString();
  };

  _onPressItem = id => {
    const selected = new Map(this.state.selected);
    selected.set(id, !selected.get(id));
    this.setState({
      selected,
    });
  };

  render() {
      console.log('render');
    return (
      <View>
        <FlatList
          data={this.state.data}
          ListHeaderComponent={this._renderHeader}
          ListFooterComponent={this._renderFooter}
          keyExtractor={this._keyExtractor}
          extraData={this.state}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'green',
    padding: 6,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
