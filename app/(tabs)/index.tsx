import * as React from "react";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
  SafeAreaView,
  Pressable,
} from "react-native";
import Checkbox from "expo-checkbox";
import { Picker } from "@react-native-picker/picker";

import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import HomeScreen from "@/components/HomeScreen";
import DetailsScreen from "@/components/DetailsScreen";
import ChangeBackground from "@/components/ChangeBackgroundColorScreen";
const Stack = createNativeStackNavigator();

class App extends React.Component {
  constructor () {
    super();
  }
  render () {return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ChangeBackground" component = {ChangeBackground} />
      </Stack.Navigator>
    </NavigationContainer>
  )};
}

export default App;

