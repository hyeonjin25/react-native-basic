import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import Axios from "axios";
import MovieCard from "./MovieCard";

//영화 목록 만들기

export class ApiTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }

  componentDidMount() {
    Axios.get("https://yts.mx/api/v2/list_movies.json").then((response) => {
      console.log(response.data.data.movies);
      this.setState({ movieList: response.data.data.movies });
    });
  }

  render() {
    return (
      <View>
        <View>
          {this.state.movieList.map((value) => {
            return (
              <MovieCard title={value.title} url={value.background_image} />
            );
          })}
        </View>
      </View>
    );
  }
}

export default ApiTest;
