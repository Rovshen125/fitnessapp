import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';


const Search = ()=>{
    return(
        <View className=' bg-[#9ac1fe] p-5 -mt-14' style={{borderRadius:50}}>
            <Ionicons color={'white'} size={42} name='search-outline' />
        </View>
    )
}

export default function TabBar({ state, descriptors, navigation }) {
    return (
        <SafeAreaView>
            <View className='flex-row justify-center mx-2 gap-9'>
                {
                    state.routes.map((route, index) => {
                        const isFocused = state.index === index
                        
                        return (
                            <TouchableOpacity className='items-center' onPress={()=>navigation.navigate(route.name)} key={index} >
                                {
                                    route.name === 'home' ? <Ionicons color={'#aea5a6'} size={42} name={isFocused ? 'home' : 'home-outline' } /> :
                                    route.name === 'plan' ? <Ionicons color={'#aea5a6'} size={42} name={isFocused ? 'arrow-up-right-box' : 'arrow-up-right-box-outline'} /> :
                                    route.name === 'search' ? <Search /> :
                                    route.name === 'work' ? <Ionicons color={'#aea5a6'} size={42} name={isFocused ? 'compass' : 'compass-outline'} /> :
                                    route.name === 'profile' ? <Ionicons color={'#aea5a6'} size={42} name={isFocused ? 'person' : 'person-outline'} /> :
                                    null
                                }
                                {
                                    isFocused && route.name !== 'search' ? <View className='w-2 h-2 rounded-full  bg-[#aea5a6]'></View>: <View className='w-2 h-2 rounded-full'></View>
                                }
        
                            </TouchableOpacity>
                        )

                    })
                }
            </View>
        </SafeAreaView>
    )
}