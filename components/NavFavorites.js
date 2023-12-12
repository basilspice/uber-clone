import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const data = [
    {
        id: '123',
        icon: "home",
        location: "Home",
        destination: "Ocean Beach Hwy, Longview, WA"
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "Wildcat Drive, Rochester, WA"
    }
]

const NavFavorites = () => {
  return (
    <View>
      <Text>NavFavorites</Text>
    </View>
  )
}

export default NavFavorites

const styles = StyleSheet.create({})