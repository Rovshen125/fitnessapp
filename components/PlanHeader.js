import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PlanHeader() {
    const navigation = useNavigation()

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name='arrow-back' size={42} />
                </TouchableOpacity>
            </View>
            <View className='justify-center items-center'>
                <Image className='w-full h-60 ' resizeMode='contain' source={require('../assets/bg.png')} />
            </View>
        </SafeAreaView>
    )
}