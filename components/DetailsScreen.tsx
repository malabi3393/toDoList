import * as React from "react";

import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  Pressable
} from "react-native";
import Checkbox from "expo-checkbox";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import {ChangeBackground, changeC} from "./ChangeBackgroundColorScreen";


function DetailsScreen({ navigation }) {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const PickColor = () => {
      return (
        <Picker
          style={{ flex: 1 }}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      );
    };
    return (
      <View style={changeC.renderStyle()}>
        <View style={styles.heading}>
          <FontAwesome.Button
            name="backward"
            backgroundColor="#d9d9d9"
            color="black"
            size={40}
            style={styles.settingsButton}
            onPress={() => navigation.navigate("Home")}
          ></FontAwesome.Button>
          <View style={styles.headingText}>
            <Text style={styles.head2}> Settings </Text>
          </View>
          {/* <Button title="Go Home" onPress={() => navigation.navigate("Home")} /> */}
        </View>
  
        <View style={styles.toDoView}>  
  
      
  
          <Pressable style={styles.button} onPress={() => navigation.navigate("ChangeBackground")} >
            <Text>Change Background Color</Text>
          </Pressable>
        </View>
      </View>
    );
  }
  const styles = StyleSheet.create({
    home: {
      backgroundColor: "#d9d9d9",
      flex: 1,
    },
    settingsItem: {
      flex: 1,
    },
  
    heading: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      marginTop: 15,
      position: "relative",
    },
    headingText: {
      position: "absolute",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      left: "50%",
      transform: [{ translateX: -80 }],
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: "white",
      flex: 0.5
    },
  
    settingsButton: {
      marginRight: "auto",
    },
    head1: {
      fontFamily: "Roboto",
      fontSize: 36,
      padding: 5,
    },
    trashButton: {
      alignItems: "center",
      justifyContent: "center",
    },
  
    head2: {
      textTransform: "uppercase",
      fontFamily: "Roboto",
      fontSize: 36,
      fontWeight: "bold",
      color: "#454545",
    },
  
    toDoView: {
      flex: 2,
      backgroundColor: "#f5f5f5",
      padding: 10,
      margin: 20,
      borderRadius: 20,
      shadowColor: "black",
      shadowOffset: { width: -2, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 3,
    },
  
    input: {
      fontSize: 20,
      borderWidth: 1,
      textAlign: "left",
      paddingLeft: 20,
      height: 40,
      marginLeft: 40,
      marginRight: 40,
      marginTop: 10,
    },
  
    checked: {
      textDecorationLine: "line-through",
      fontSize: 30,
    },
    notChecked: {
      textDecorationLine: "none",
      fontSize: 30,
    },
    item: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      margin: 20,
    },
  
    footer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#002d0b",
      bottom: 0,
      left: 0,
      right: 0,
      position: "absolute",
    },
  });

  export default DetailsScreen;