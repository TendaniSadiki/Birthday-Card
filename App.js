import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "https://cdn.pixabay.com/photo/2015/10/16/19/18/balloon-991680_960_720.jpg" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Happy Birthday</Text>
      <View style={styles.HappyBirthdayContent}>
        <Text style={styles.HappyBirthdayText}>A birthday is a time for fun and celebration.
         May your celebration be great, and may the fun you have today follow you through the coming year.
        </Text>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(255, 0, 0, 0.6);",
    marginTop:0
  },
  HappyBirthdayContent:{
    color: "white",
    fontSize: 10,
    bottom:100,
    textAlign: "center",
    backgroundColor: "hsla(0, 100%, 50%, 0.3)",  
    marginTop:220,
    fontSize: 30,
    height:350,
  },
  HappyBirthdayText:{
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop:100,
    fontFamily: 'lucida grande'
   
  
  },
  birthContainer:{
    backgroundColor:"blue",
    borderRadius:15
  }

});

export default App;