import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import foodData from '../data/FoodData';
import Swipeout from 'react-native-swipeout';
import NewFoodModal from './NewFoodModal';
import UpdateFoodModal from './UpdateFoodModal';

class ItemViews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeRowKey: null,
      indexRefresh: 0,
    };
  }

  _onClickItem = () => {
    this.props.parentFlatlist.refs.refUpdate.showModal(
      this,
      foodData[this.props.index],
      this.props.index,
    );
  };

  refreshItem = _ => {
    this.setState(preIndex => {
      return {indexRefresh: preIndex.indexRefresh + 1};
    });
  };

  render() {
    const swipeSetting = {
      autoClose: true,
      onClose: (secId, rowId, direction) => {
        if (this.state.activeRowKey != null) {
          this.setState({activeRowKey: null});
        }
      },
      onOpen: (secId, rowId, direction) => {
        this.setState({activeRowKey: this.props.item.key});
      },
      right: [
        {
          onPress: () => {
            const deletingRow = this.state.activeRowKey;
            Alert.alert(
              'Delete',
              'Are you sure delete this item?',
              [
                {
                  text: 'No',
                  onPress: () => console.log('Cancel press'),
                  style: 'cancel',
                },
                {
                  text: 'Yes',
                  onPress: () => {
                    foodData.splice(this.props.index, 1);
                    // this.setState({activeRowKey: this.props.item.key});
                    // alert(this.props.item.name);
                    this.props.parentFlatlist.refreshFlatList(deletingRow);
                  },
                },
              ],
              {cancelable: true},
            );
          },
          text: 'Delete',
          type: 'delete',
        },
      ],
      rowId: this.props.index,
      sectionId: 1,
    };
    return (
      <Swipeout {...swipeSetting} style={{flex: 1}}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this._onClickItem()}>
          <Text style={styles.text_item}>{this.props.item.name}</Text>
          <Text style={styles.text_item}>{this.props.item.price}</Text>
        </TouchableOpacity>
      </Swipeout>
    );
  }
}

export default class FlatListExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteRowKey: null,
    };
  }

  _renderHeaderItem = () => {
    return(
      <View style={{backgroundColor: 'gainsboro ', minHeight: 50, justifyContent:'center', alignItems: 'center'}}>
        <Text>This is Header compoment</Text>
      </View>
    );
  }
  _renderFooterItem = () => {
    return(
      <View style={{backgroundColor: 'gainsboro ', minHeight: 50, justifyContent:'center', alignItems: 'center'}}>
        <Text>This is Footer compoment</Text>
      </View>
    );
  }

  refreshFlatList = deleteKey => {
    return this.setState({deleteRowKey: deleteKey});
  };

  _addFood = _ => {
    this.refs.refAdd.showModal();
  };

  render() {
    const titleToolbar = 'Food';
    return (
      <View>
        <View style={styles.toolbar}>
          <Text style={styles.title_toolbar}>{titleToolbar}</Text>
          <TouchableOpacity
            style={styles.div_icon}
            onPress={() => this._addFood(true)}>
            <Image
              style={styles.icon_toolbar}
              source={require('../icon/ic_add.png')}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          ListHeaderComponent={this._renderHeaderItem}
          ListFooterComponent={this._renderFooterItem}
          data={foodData}
          extraData={this.state.activeRowKey}
          numColumns={2}
          columnWrapperStyle={{flex: 1}}
          renderItem={({item, index}) => {
            // console.log(`Item: = ${JSON.stringify(item)}, index = ${index}`);
            return (
              <ItemViews item={item} index={index} parentFlatlist={this} />
            );
          }}
        />
        <NewFoodModal ref={'refAdd'} parentFlatlist={this} />
        <UpdateFoodModal ref={'refUpdate'} parentFlatlist={this} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    maxHeight: 50,
    height: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 4,
  },
  container: {
    flex: 1,
    backgroundColor: 'green',
    margin: 1,
  },
  div_icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title_toolbar: {
    fontSize: 20,
    margin: 6,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text_item: {
    color: 'white',
  },
  icon_toolbar: {
    alignSelf: 'flex-end',
    margin: 8,
    height: 32,
    width: 32,
  },
});
