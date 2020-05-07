import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class LifeCycleComponent extends Component {
  //mounting
  constructor(props) {
    super(props);
    console.log('constructor running');
    this.state = {
      numberState: 0,
    };
    setInterval(_ => {
      this.setState(priv => {
        return {numberState: priv.numberState + 1};
      });
    }, 1000);
  }
  //mounting & updating
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    return null;
  }
  //updating
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  //mounting - re-render updating
  render() {
    console.log('render runing');
    return (
      <View>
        <Text> "Number: " + {this.state.numberState}</Text>
      </View>
    );
  }
  //mounting
  componentDidMount() {
    console.log('componentDidMount running');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnaphostBeforeUpdate');
    return null;
  }

  //updateting
  componentDidUpdate(prevProps, prevState, snaphost) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  getPropsStateFromError(error) {
    console.log(error);
  }
  componentDidCatch(error, info) {
    console.log(error + info);
  }
}
