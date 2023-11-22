import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
import ArtistList from "./ArtistList";
import { getMusicData } from "./api-client";

export default class homeView extends Component{
  state = {
    artists: null,
  };

  static navigationOptions = {
    title: "Home",
    headerLeft: () => (
      <TouchableOpacity onPress={() => Actions.login()}>
        <Text style={{ marginLeft: 20 }}>Volver</Text>
      </TouchableOpacity>
    ),
  };

  componentDidMount() {
    getMusicData().then((data) => this.setState({ artists: data }));
  }

  render() {
    const artists = this.state.artists;

    return (
      <View style={styles.container}>
        {artists && <ArtistList artists={artists} />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
  },
});
