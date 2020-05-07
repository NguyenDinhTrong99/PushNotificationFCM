import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class TextProps extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowText: true};
    var taskToDo = _ => {
      this.setState(previousState => {
        return {
          isShowText: !previousState.isShowText,
        };
      });
    };
    const timeInterval = 1000;
    setInterval(taskToDo, timeInterval);
  }
  // eslint-disable-next-line prettier/prettier
    render(){
    let textToDisplayName = this.state.isShowText ? this.props.name : ' ';
    let textToDisplayAge = this.state.isShowText ? this.props.age : ' ';

    return (
      // eslint-disable-next-line react/jsx-no-undef
      <View>
        <Text style={styles.text}>Name: {textToDisplayName}</Text>
        <Text style={styles.text}>Age: {textToDisplayAge}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 20,
    color: 'green',
  },
});
