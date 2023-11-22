import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default class ArtistDetailView extends Component{
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
                    <Text style={styles.text}>Trasmitible: No</Text>
                  </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: 'auto',
    height: 270,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginLeft: 10,
    color: "white",
  },
  name: {
    fontSize: 45,
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 10,
    color: "white",
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