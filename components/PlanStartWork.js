import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function PlanStartWork() {
  return (
    <View className='bg-white justify-center items-center'>
        <TouchableOpacity className='bg-sky-600  w-3/4 justify-center items-center p-4 relative bottom-16 rounded-3xl'>
            <Text className='text-2xl text-white font-bold'>Məşqə Başla</Text>
        </TouchableOpacity>
    </View>
  )
}