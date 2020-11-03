import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import Jen from "./Jennie";

class Myname extends Component {
  render() {
    return <Text>Jennie</Text>;
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Jen />
        <Myname />
        <Image
          source={{
            uri:
              "https://img.wkorea.com/w/2020/01/style_5e1eaaa00c2a6-539x700.jpg",
          }}
          style={{ width: 300, height: 300 }}
        />
        <Image
          source={require("./jennie.jfif")}
          style={{ width: 300, height: 300 }}
        />
      </View>
    );
  }
}
