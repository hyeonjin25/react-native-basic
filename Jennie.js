import React, { Component } from "react";
import { Text, View, Image } from "react-native";

export default class Jennie extends Component {
  render() {
    return (
      <View>
        <Image
          source={{
            uri:
              "https://img.wkorea.com/w/2020/01/style_5e1eaaa00c2a6-539x700.jpg",
          }}
          style={{ width: 300, height: 300 }}
        />
        <Text style={{fontSize:'30px'}}> This is Jennie! </Text>
      </View>
    );
  }
}
