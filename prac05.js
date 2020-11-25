import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import Axios from "axios";

//map 사용하기: 배열을 사용할 수 있게 해줌

export class ApiTest extends Component {
  state = {
    numList: [1, 2, 3, 4],
  };
  render() {
    return (
      <View>
        {this.state.numList.map((value) => {
          return (
            <text>
              <Name name={value} />
            </text>
          );
        })}
      </View>
    );
  }
}

class Name extends Component {
  render() {
    return <Text style={{ fontSize: 40 }}>{this.props.name}</Text>;
  }
}

export default ApiTest;
