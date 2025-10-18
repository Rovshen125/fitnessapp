import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import PlanHeader from '../components/PlanHeader'
import PlanBody from '../components/PlanBody'
import PlanStartWork from '../components/PlanStartWork'

export default function PlanScreen() {
  return (
    <ScrollView style={{backgroundColor:'#bfdbe9'}}>
        <PlanHeader />
        <PlanBody />
        <PlanStartWork />
    </ScrollView>
  )
}