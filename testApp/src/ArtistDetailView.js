import React, { Component } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Actions } from 'react-native-router-flux';
export default class ArtistDetailView extends Component{

  static navigationOptions = {
    title: "Artist Detail",
    headerLeft: () => (
      <TouchableOpacity onPress={() => Actions.pop()}>
        <Text style={{ marginLeft: 20 }}>Volver</Text>
      </TouchableOpacity>
    ),
  };

    render(){
        const { artist } = this.props;
        return(
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: artist.image }}></Image>
                <View>
                    <Text style={styles.name}>{artist.name}</Text>
                </View>
                <View style={styles.containerRow}>
                  <View style={styles.box1}>
                    <Text style={styles.text}>Oyentes: {artist.listeners}</Text>
                  </View>
                  <View style={styles.box2}>
                    {
                      this.stremeable === '0'?
                      <Text style={styles.text}>Trasmitible: Si</Text> :
                      <Text style={styles.text}>Trasmitible: No</Text>
                    }
                  </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    width: 'auto',
    height: 270,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    color: "black",
  },
  name: {
    fontSize: 45,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    color: "black",
    fontWeight: 'bold',
  },
  box1: {
    flex: 1,
    paddingRight: 10,
 },
 box2: {
  flex: 1,
  paddingLeft: 10,
 },
 containerRow: {
  flex: 1,
  flexDirection: 'row',
 }
  });