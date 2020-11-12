import React, { Component } from "react";
import { Text, View, Button } from "react-native";

// 1-9까지 랜덤한 숫자들 나오게 하기

export class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  generateRandom = () => {
    let tmp = Math.floor(Math.random() * 9) + 1;
    this.setState({ number: tmp });
  };

  render() {
    return (
      <View>
        <Text style={{fontSize:50}}> {this.state.number} </Text>
        <Button title='change number' onPress={this.generateRandom} />
      </View>
    );
  }
}

export default Random;
