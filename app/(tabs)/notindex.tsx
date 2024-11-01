import {
  Image,
  StyleSheet,
  Platform,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  Button,
} from "react-native";

import Checkbox from "expo-checkbox";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type ItemProps = {
  name: string;
};

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ToDo"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />

        <Stack.Screen name="Settings" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Setting = ({ navigation }) => {
  return (
    <View>
      <Text> SETTINGS </Text>
    </View>
  );
};

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [toDoArray, setToDo] = useState<string[]>([]);
  const stuff = ["clean my room", "take a shower", "watching tv"];
  const Item = (props: ItemProps) => {
    const [isChecked, setChecked] = useState(false);
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          columnGap: 10,
          justifyContent: "space-between",
          padding: 10,
          alignItems: "center",
        }}
      >
        <Text style={isChecked ? styles.checked : styles.unchecked}>
          I need to: {props.name}!
        </Text>
        <Checkbox
          disabled={false}
          value={isChecked}
          onValueChange={setChecked}
          // onValueChange={ () => setToDo(toDoArray.filter((item, index) => item !== props.name))}
          // setToDo((oldArray) => oldArray.filter((item, index) => item !== props.name)

          color={"red"}
        />
      </View>
    );
  };
  const items = (items: string[]) => {
    var x = [];
    for (let item of items) {
      x.push(<Item name={item} />);
    }
    return x;
  };
  const an_image = {
    uri: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg",
    width: 64,
    height: 64,
  };
  return (
    <View style={styles.scrollView}>
      <Text style={{ marginTop: 40, fontSize: 60 }}> To-Do List</Text>
      <Button
        title="SETTINGS"
        onPress={() => navigation.navigate("Settings")}
      ></Button>
      <Text style={{ margin: 20, fontSize: 50 }}> Enter an item</Text>

      {/* Text input */}
      <TextInput
        style={styles.textInput}
        onChangeText={(newText) => setText(newText)}
        placeholder="Enter item to do"
        defaultValue={text}
        placeholderTextColor="#9f9b9a"
        onSubmitEditing={() => {
          setToDo((oldArray) => [...oldArray, text]);
        }}
      />
      <FlatList
        data={toDoArray}
        renderItem={({ item }) => <Item name={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },

  view: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },

  scrollView: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "pink",
  },

  textInput: {
    height: 40,
    fontSize: 40,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    color: "black",
  },
  checked: {
    fontSize: 20,
    textDecorationLine: "line-through",
  },
  unchecked: {
    fontSize: 20,
    textDecorationLine: "none",
  },
});

export default MyStack;
