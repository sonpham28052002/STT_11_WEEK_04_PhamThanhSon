import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Two_b() {
  return (
    <View style={style.container}>
      <View style={style.containerHeader}>
        <Image
          style={{ height: 100, width: 100 }}
          source={require("../assets/usb.jpg")}
        />
        <Text style={style.textHeader}>
          USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
          bluetooth
        </Text>
      </View>
      <View style={style.containerBody}>
        <Text style={style.textBody}>Cực kỳ hài lòng</Text>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome
            name="star"
            size={33}
            color="#F2DD1B"
            style={style.star}
          />
          <FontAwesome
            name="star"
            size={33}
            color="#F2DD1B"
            style={style.star}
          />
          <FontAwesome
            name="star"
            size={33}
            color="#F2DD1B"
            style={style.star}
          />
          <FontAwesome
            name="star"
            size={33}
            color="#F2DD1B"
            style={style.star}
          />
          <FontAwesome
            name="star"
            size={33}
            color="#F2DD1B"
            style={style.star}
          />
        </View>
        <View style={style.viewAddImage}>
          <FontAwesome name="camera" size={35} color="black" />
          <Text style={{ fontWeight: "bold", fontSize: 20, marginLeft: 10 }}>
            Thêm Hình Ảnh
          </Text>
        </View>
        <View style={style.viewInput}>
          <TextInput
            style={style.inputShare}
            placeholder="Hãy chi sẻ những điều mà bạn thích về sản phẩm"
            multiline={true}
          />
          <Text style={{ fontWeight: "bold", textAlign: "right" }}>
            https://meet.google.com/nsj-ojwi-xpp
          </Text>
        </View>
        <TouchableOpacity
          style={{
            marginTop: 20,
            width: "100%",
            height: 50,
            borderRadius: 10,
            backgroundColor: "#1511EB",
            justifyContent:"center"
          }}
        >
          <Text style={{color:"white", fontSize:20, textAlign:"center", fontWeight:"bold"}}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
let style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
  },
  containerBody: {
    flex: 3,
    alignItems: "center",
    padding: 20,
  },
  textHeader: {
    marginLeft: 5,
    marginTop: 10,
    fontSize: 19,
    fontWeight: "bold",
  },
  textBody: {
    textAlign: "center",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 20,
  },
  star: {
    marginRight: 10,
  },
  viewAddImage: {
    marginTop: 10,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 10,
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  viewInput: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    height: 280,
    width: "100%",
    paddingHorizontal: 20,
  },
  inputShare: {
    height: "92%",
    width: "100%",
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
  },
});
