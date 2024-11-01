import * as React from "react";

import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import Checkbox from "expo-checkbox";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";

class bkColor {
  // const [selectedColor, setSelectedColor] = useState("");
  static selectedColor: string = "#d9d9d9";
  static state = {
    colors: [
      { color: "Pink", value: "pink" },
      { color: "Red", value: "red" },
    ],
    currentLabel: "Pick a background color",
    color: "blue",
  };

  public static setSelectedColor(newColor: string) {
    bkColor.selectedColor = newColor;
    bkColor.currStyle();
  }

  //   public static getSelectedColor() {
  //     return this.selectedColor;
  //   }

  public static currStyle() {
    return {
      backgroundColor: bkColor.selectedColor,
      flex: 1,
    };
  }

  static render() {
    return (
      <Picker
        style={{ flex: 1 }}
        selectedValue={this.state.color}
        onValueChange={(itemValue, itemIndex) =>
          bkColor.setSelectedColor(itemValue)
        }
      >
        <Picker.Item label="Default Grey" value="#d9d9d9" />
        <Picker.Item label="Pink" value="pink" />
        <Picker.Item label="Red" value="red" />

        {this.state.colors.map((c) => {
          return <Picker.Item label={c.color} value={c.value} />;
        })}
      </Picker>
    );
  }
}



function ChangeBackground({ navigation }) {
  const [col, setCol] = useState("#d9d9d9");
  const [myStyle, setStyle] = useState({ backgroundColor: col, flex: 1 });
  
  const renderStyle = () => {
    return { backgroundColor: col, flex: 1 };
  }
  const PickColor = () => {
    return (
      <Picker
        style={{ flex: 1 }}
        selectedValue={col}
        onValueChange={(colorValue, itemIndex) => {
          setCol(colorValue);
          bkColor.setSelectedColor(col);
          setStyle({ backgroundColor: col, flex: 1 });
        }}
      >
        <Picker.Item label="Default Grey" value="#d9d9d9" />
        <Picker.Item label="Pink" value="pink" />
        <Picker.Item label="Red" value="red" />
      </Picker>
    );
  };

  return (
    <View style={renderStyle()}>
      <View style={styles.heading}>
        <FontAwesome.Button
          name="backward"
          backgroundColor="#d9d9d9"
          color="black"
          size={40}
          style={styles.settingsButton}
          onPress={() => navigation.navigate("Details")}
        ></FontAwesome.Button>
        <View style={styles.headingText}>
          <Text style={styles.head2}> Change Background </Text>
          <Text style={{ flex: 1 }}>
            The selectd color is: {col} och fran classet det ar{" "}
            {bkColor.selectedColor}
          </Text>
        </View>
      </View>

      <View style={styles.toDoView}>
        <PickColor />
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
    transform: [{ translateX: -160 }],
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
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

export default ChangeBackground;
