import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export class MovieCard extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={{ uri: this.props.url }} style={styles.img} />
        <Text> {this.props.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: 150,
    borderWidth: 1,
    flexDirection:'row'
  },
  img: { height: 150, width: 150 },
});

export default MovieCard;
