import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import HomeScreen from "./src/user/screen/HomeScreen";
import ServiceScreen from "./src/user/screen/ServiceScreen";
import AppoinmentScreen from "./src/user/screen/AppoinmentScreen";



const homeName = "Home";
const seviceName = "Service";
const appoinmentName = "Appoinment";


const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn == seviceName) {
            iconName = focused ? 'book' : 'book-outline';
          } else if (rn === appoinmentName) {
            iconName = focused ? 'create' : 'create-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: { paddingBottom: 10, fontSize: 10 },
        tabBarStyle: { padding: 10, height: 70 },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={seviceName} component={ServiceScreen} />
      <Tab.Screen name={appoinmentName} component={AppoinmentScreen} />

    </Tab.Navigator >
  );
}

export default MainContainer;

