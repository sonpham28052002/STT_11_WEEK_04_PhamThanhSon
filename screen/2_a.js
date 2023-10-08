import React from "react";
import { StyleSheet, Text, View, TextInput ,Button} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Two_a() {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textHeader}>LOGIN</Text>
      </View>
      <View style={styles.containerBody}>
        <View>
          <FontAwesome
            name="user"
            size={30}
            color="black"
            style={{ position: "absolute", top: 12, left: 10 }}
          />
          <TextInput style={styles.input} placeholder="Name"></TextInput>
        </View>
        <View style={{marginTop:15}}>
          <FontAwesome
            name="lock"
            size={30}
            color="black"
            style={{ position: "absolute", top: 12, left: 10 }}
          />
          <TextInput style={styles.input} placeholder="Password" secureTextEntry = {true} ></TextInput>
          <FontAwesome name="eye" size={30} color="black" style={{position:"absolute",right:10, top:12}} />
        </View>
        <View style={{marginTop:70}}>
            <Button title="LOGIN" color="black" />
        </View>
        <View style={{marginTop:70}}>
            <Text style={styles.textForgot}>
                Forgot your password?
            </Text>
        </View>
      </View>
    </View>
  );
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage: "linear-gradient(to bottom,#FBCB00, #BF9A00)",
  },
  containerHeader: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  containerBody: {
    flex: 2,
    width: "100%",
    padding: 10,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#FBCB00",
    borderColor: "white",
    borderWidth: 1,
    height: 54,
    paddingLeft: 40,
    fontSize: 20,
  },
  textForgot:{
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center"
  }
});
