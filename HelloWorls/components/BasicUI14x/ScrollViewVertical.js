import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  TextInput,
} from 'react-native';
import FlatListExample from '../FlatListExample';
import FlatListHorizontal from './FlatListHorizontal';
const screen = Dimensions.get('window').width;
export default class ScrollViewVertical extends Component {
  constructor(props) {
    super(props);
    this.state = {_text: '', data: Array.from(Array(100).keys())};
  }
  _renderItem = _ => {
    return (
      <Image source={require('../../images/dog.jpg')} style={styles.images} />
    );
  };

  _scrollToEnd = () => {
    this.refs.scroll.scrollToEnd();
  };

  _scrollToTop = () => {
    this.refs.scroll.scrollTo();
  };

  render() {
    const row = this.state.data.map(item => (
      <Text key={item.toString()} style={styles.text}>
        {item.toString()}
      </Text>
    ));
    return (
      <ScrollView horizontal={true} pagingEnabled={true} nestedScrollEnabled={true}>
        <View style={styles.container}>
          <ScrollView style={styles.bg} ref={'scroll'}>
            <Text style={styles.title}>Scroll</Text>
            <Text
              style={styles.text_scroll}
              onPress={() => this._scrollToEnd()}>
              Scroll To End
            </Text>
            {row}
            <Text
              style={styles.text_scroll}
              onPress={() => this._scrollToTop()}>
              Scroll To Top
            </Text>
          </ScrollView>
        </View>
        <View style={styles.container}>
          <FlatListExample />
        </View>
        <View style={styles.container}>
          <FlatListHorizontal />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: screen,
    height: '100%',
  },
  images: {
    width: screen.width,
    height: (screen.width * 590) / 420,
    opacity: 0.9,
  },
  title: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
    backgroundColor: 'white',
    minHeight: 50,
  },
  _input: {
    minHeight: 50,
    margin: 6,
  },
  content_style: {
    paddingStart: 15,
  },
  bg: {
    backgroundColor: 'green',
  },
  text_scroll: {
    minHeight: 50,
    width: '100%',
    backgroundColor: 'red',
    color: 'white',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'orange',
    textAlign: 'center',
    borderWidth: 0.5,
    borderColor: 'white',
  },
});
