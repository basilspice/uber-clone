import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from "../components/NavigateCard";
import Map from "../components/Map";
import RideOptionsCard from "../components/RideOptionsCard";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/base";

const MapScreen = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
  return (
    <View>
        <TouchableOpacity 
        onPress={() => navigation.navigate("HomeScreen")}
        style={tw`bg-gray-100 z-50 absolute top-16 left-8 shadow-lg`}>
            <Icon name="home"/>
        </TouchableOpacity>
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
