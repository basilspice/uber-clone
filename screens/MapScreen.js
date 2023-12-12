import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from "../components/NavigateCard";
import Map from "../components/Map";
import RideOptionsCard from "../components/RideOptionsCard";
import { useNavigation, useRoute } from "@react-navigation/native";

const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
           <Stack.Screen name="NavigateCard"
           component={NavigateCard}
           options={{
            headerShown: false
           }}/>
             <Stack.Screen name="RideOptionsCard"
           component={RideOptionsCard}
           options={{
            headerShown: false
           }}/>
            </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;
