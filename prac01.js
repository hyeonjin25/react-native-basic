import React, { Component } from "react";
import { Text, View, Button } from "react-native";

//숫자 늘리거나 줄이기

export default class App extends Component {
  render() {
    return (
      <View>
        <Child number={77} />
      </View>
    );
  }
}

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.number,
    };
  }
  render() {
    return (
      <view>
        <Text>{this.state.number}</Text>
        <Button
          title='PLUS'
          onPress={() => {
            this.setState({ number: this.state.number + 1 });
          }}
        />
        <Button
          title='MINUS'
          onPress={() => {
            this.setState({ number: this.state.number - 1 });
          }}
        />
      </view>
    );
  }
}
