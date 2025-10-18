import { View, Text } from 'react-native'
import React from 'react'

export default function EtrafliScreen({route}) {
    const {ad, shekil, tesvir} = route.params
    console.log(ad, shekil, tesvir)
  return (
    <View>
      <Text>EtrafliScreen</Text>
    </View>
  )
}