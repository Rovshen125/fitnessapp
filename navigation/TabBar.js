import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


export default function TabBar({ state, descriptors, navigation }) {
    return (
        <SafeAreaView>
            <View className='flex-row'>
                {
                    state.routes.map((route, index) => {
                        const isFocused = state.index === index
                        return (
                            <TouchableOpacity onPress={()=>navigation.navigate(route.name)} key={index} className='bg-red-200'>
                                {
                                    route.name === 'home' ? <MaterialIcons size={32} name='insert-chart-outlined' /> :
                                    route.name === 'info' ? <Text>Mel</Text> :
                                    null
                                }
                                
        
                            </TouchableOpacity>
                        )

                    })
                }
            </View>
        </SafeAreaView>
    )
}