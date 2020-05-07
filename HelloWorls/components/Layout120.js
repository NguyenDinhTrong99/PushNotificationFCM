import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Layout120 extends Component {
  _renderHeader(styles, label) {
    return <Text style={styles}>{label}</Text>;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.text_header}>#DA3AE</Text>
            <View style={styles.view_header_row}>
              {this._renderHeader(styles.text_header_row_left, '#F59062')}
              <Text style={styles.text_header_row_right}>#F59062</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.text_content}>#948A8A</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.reactangle} />
          <Text style={styles.text_footer}>#CF5353</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#655E5E',
    marginTop: 80,
    marginStart: 20,
    marginEnd: 20,
    padding: 15,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    marginTop: 40,
    marginBottom: 50,
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    flex: 1,
    marginBottom: 45,
    marginStart: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  reactangle: {
    borderRadius: 5,
    borderWidth: 1,
    marginEnd: 20,
    height: '100%',
    width: 100,
  },
  view_header_row: {
    flexDirection: 'row',
    width: '100%',
  },
  text_header: {
    backgroundColor: '#1DA3AE',
    height: 35,
    width: 200,
    marginBottom: 15,
    color: '#ffffff',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignSelf: 'center',
  },
  text_header_row_left: {
    flex: 50,
    backgroundColor: '#F59062',
    color: '#ffffff',
    marginEnd: 10,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text_header_row_right: {
    flex: 50,
    height: 50,
    backgroundColor: '#F59062',
    color: '#ffffff',
    marginStart: 10,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text_content: {
    backgroundColor: '#948A8A',
    color: '#ffffff',
    width: 300,
    height: 90,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text_footer: {
    height: 100,
    width: 100,
    backgroundColor: '#CF5353',
    borderRadius: 5,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
