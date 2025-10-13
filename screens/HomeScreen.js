import { View, Text } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeHesab from '../components/HomeHesab'

export default function HomeScreen() {
  return(
    <SafeAreaView>
      <HomeHeader />
      <HomeHesab />
    </SafeAreaView>
  )
}