import React, {Component} from 'react';
import {View, StyleSheet, Image, Text, TextInput} from 'react-native';

export default class Layout120Advance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.text,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={styles._input_header}
            onChangeText={text => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.header_content}>
            <ItemViewContent
              image_src={require('../images/image_1.png')}
              text_title={'Diet Recommendation'}
            />
            <ItemViewContent
              image_src={require('../images/image_2.png')}
              text_title={'Kegel Exercises'}
            />
            <ItemViewContent
              image_src={require('../images/image_3.png')}
              text_title={'Meditation'}
            />
            <ItemViewContent
              image_src={require('../images/image_4.png')}
              text_title={'Yoga'}
            />
          </View>
          <View style={styles.bottom_content}>
            <View style={styles.card_bottom}>
              <Image
                style={styles.image_lock}
                source={require('../images/image_8.png')}
              />
              <View>
                <Text style={styles.text_title_basic}>Basic 2</Text>
                <Text style={styles.text_content_lock}>
                  Start your deepen you practice
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <BottomNavigation
            text={'Today'}
            img_src={require('../images/image_5.png')}
          />
          <BottomNavigation
            text={'All Exercises'}
            img_src={require('../images/Fitness_on.png')}
          />
          <BottomNavigation
            text={'Setting'}
            img_src={require('../images/image_7.png')}
          />
        </View>
      </View>
    );
  }
}

class BottomNavigation extends Component {
  render() {
    return (
      <View style={styles.view_bnv}>
        <Image source={this.props.img_src} />
        <Text style={styles.text_btv}>{this.props.text}</Text>
      </View>
    );
  }
}

class ItemViewContent extends Component {
  render() {
    return (
      <View style={styles.container_card}>
        <Text style={styles.text_content} numberOfLines={2}>
          {this.props.text_title}
        </Text>
        <Image style={styles.image_content} source={this.props.image_src} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 15,
    backgroundColor: 'blanchedalmond',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 85,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
  },
  footer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    backgroundColor: '#ffffff',
  },
  _input_header: {
    height: 40,
    width: 300,
    backgroundColor: '#ffffff',
    borderRadius: 50,
    marginBottom: 15,
    marginTop: 35,
    padding: 10,
  },
  container_card: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: '45%',
    width: '40%',
    marginEnd: 20,
    marginBottom: 20,
  },
  header_content: {
    flex: 84,
    marginTop: 20,
    marginStart: 25,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_content: {
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: '80%',
  },
  bottom_content: {
    flex: 16,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginTop: 12,
    marginStart: 21,
    marginBottom: 15,
  },
  card_bottom: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 20,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image_lock: {
    marginEnd: 20,
  },
  text_title_basic: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  text_content_lock: {
    fontSize: 14,
  },
  view_bnv: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_btv: {
    color: 'black',
  },
});
