import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/user/screen/LoginScreen";
import MainContainer from "./MainScreen";

import RegisterScreen from "./src/user/screen/RegisterFormScreen";
import Popular from './src/user/screen/ServiceScreen';
import ServiceDetail from "./src/user/screen/ServiceDetails"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="MainContainer" component={MainContainer} />

        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="Popular" component={Popular} />
        <Stack.Screen name="ServiceDetail" component={ServiceDetail} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
