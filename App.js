import React, { useContext } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AuthProvider from "./src/Contexts/auth";

import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/routes/routes";

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </NavigationContainer>
  );
}

export default App;