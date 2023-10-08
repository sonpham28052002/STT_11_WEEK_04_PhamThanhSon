import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Two_c() {
  return (
    <View style={{ flex: 1, backgroundColor: "#3B3B98", padding: 15 }}>
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.textHeader}>PASSWORD GENERATOR</Text>
        </View>
        <View style={styles.containerBody}>
          <TextInput style={styles.input} />
          <View style={styles.include}>
            <Text style={styles.textInclude}>Password lenght</Text>
            <TextInput
              style={{
                backgroundColor: "white",
                height: 35,
                width: 180,
                fontWeight: "bold",
                fontSize: 20,
              }}
            />
          </View>
          <View style={styles.include}>
            <Text style={styles.textInclude}>Include lower case letters</Text>
            <View
              style={{
                backgroundColor: "white",
                height: 30,
                width: 30,
                borderWidth: 1,
                borderColor: "black",
              }}
            >
              <FontAwesome name="check" size={24} color="black" />
            </View>
          </View>
          <View style={styles.include}>
            <Text style={styles.textInclude}>Include upcase letters</Text>
            <View
              style={{
                backgroundColor: "white",
                height: 30,
                width: 30,
                borderWidth: 1,
                borderColor: "black",
              }}
            ></View>
          </View>
          <View style={styles.include}>
            <Text style={styles.textInclude}>Include number</Text>
            <View
              style={{
                backgroundColor: "white",
                height: 30,
                width: 30,
                borderWidth: 1,
                borderColor: "black",
              }}
            >
              <FontAwesome name="check" size={24} color="black" />
            </View>
          </View>
          <View style={styles.include}>
            <Text style={styles.textInclude}>Include special symbol</Text>
            <View
              style={{
                backgroundColor: "white",
                height: 30,
                width: 30,
                borderWidth: 1,
                borderColor: "black",
              }}
            ></View>
          </View>
        </View>
        <View style={styles.containerfooter}>
            <TouchableOpacity style={styles.ButtonFooter}>
                <Text style={styles.textButtonFooter}>GENERATE PASSWORD</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
let styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#23235B",
  },
  containerHeader: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  containerBody: {
    flex: 4,
    padding: 10,
  },
  containerfooter: {
    flex: 1,
    padding:20
  },
  textHeader: {
    width: 200,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  input: {
    backgroundColor: "#151537",
    height: 55,
    width: "100%",
    marginBottom:20
  },
  include: {
    flexDirection: "row",
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom:10
  },
  textInclude: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  ButtonFooter:{
    height:60,
    width:"100%",
    backgroundColor:"#3B3B98",
    justifyContent:"center"
  },
  textButtonFooter:{
    color:"white",
    fontWeight:"bold",
    textAlign:"center",
    fontSize:20
  }
});
