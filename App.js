import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import tw from 'twrnc';

export default function App() {
  return (
    <Provider store={store}>
      <View >
        <HomeScreen />
      </View>
    </Provider>
  );
}



