import React, { Component } from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";

export class Jackpot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      number3: 0,
      isJackpot: false,
    };
  }

  //state들이 set되기 전에 숫자끼리의 비교가 시작되어버리면 안되므로 async사용
  generateRandom = async () => {
    let num1 = Math.floor(Math.random() * 3) + 1;
    let num2 = Math.floor(Math.random() * 3) + 1;
    let num3 = Math.floor(Math.random() * 3) + 1;
    await this.setState({ number1: num1, number2: num2, number3: num3 });
    if (
      this.state.number1 === this.state.number2 &&
      this.state.number2 === this.state.number3
    ) {
      this.setState({ isJackpot: true });
    } else {
      this.setState({ isJackpot: false });
    }
  };

  render() {
    return (
      <View>
        <View style={styles.numberView}>
          <Text style={styles.number}>{this.state.number1}</Text>
          <Text style={styles.number}>{this.state.number2}</Text>
          <Text style={styles.number}>{this.state.number3}</Text>
        </View>
        <Button title='TEST' onPress={this.generateRandom} />
        {this.state.isJackpot && (
          <Image
            style={{ width: 300, height: 300 }}
            source={require("./jennie.jfif")}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  numberView: {
    flexDirection: "row",
  },
  number: {
    fontSize: 200,
  },
});

export default Jackpot;
