import { View, Text } from 'react-native'
import React from 'react'
import PlanHeader from '../components/PlanHeader'
import PlanBody from '../components/PlanBody'

export default function PlanScreen() {
  return (
    <View style={{backgroundColor:'#bfdbe9'}}>
        <PlanHeader />
        <PlanBody />
    </View>
  )
}