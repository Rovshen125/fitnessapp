import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function HomeHesab() {
    const [isEnabled, setIsEnabled] = useState(false)
    return (
        <View className='pt-5'>


            {/* cedvel */}
            <View className='pt-3 gap-3 bg-white mx-3 rounded-3xl mb-2'>
                <Text className='text-2xl px-3'>Hesab</Text>
                <View className='flex-row justify-between px-2'>
                    <View className='flex-row items-center justify-center'>
                        <Ionicons name='person-outline' size={22} color={'blue'} />
                        <Text className='text-xl px-2 text-slate-600'>Sexsi melumatlar</Text>
                    </View>
                    <View>
                        <Ionicons name='arrow-forward' color={'brown'} size={32} />
                    </View>
                </View>


                <View className='flex-row justify-between px-2'>
                    <View className='flex-row items-center justify-center'>
                        <Ionicons name='archive-outline' size={22} color={'blue'} />
                        <Text className='text-xl px-2 text-slate-600'>Kecmis</Text>
                    </View>
                    <View>
                        <Ionicons name='arrow-forward' color={'brown'} size={32} />
                    </View>
                </View>


                <View className='flex-row justify-between px-2'>
                    <View className='flex-row items-center justify-center'>
                        <Ionicons name='fitness-outline' size={22} color={'blue'} />
                        <Text className='text-xl px-2 text-slate-600'>Cari</Text>
                    </View>
                    <View>
                        <Ionicons name='arrow-forward' color={'brown'} size={32} />
                    </View>
                </View>



                <View className='flex-row justify-between px-2'>
                    <View className='flex-row items-center justify-center'>
                        <Ionicons name='trending-up' size={22} color={'blue'} />
                        <Text className='text-xl px-2 text-slate-600'>Netice</Text>
                    </View>
                    <View>
                        <Ionicons name='arrow-forward' color={'brown'} size={32} />
                    </View>
                </View>

            </View>


            <View className='p-4  bg-white rounded-3xl mx-3'>
                <Text className='text-xl text-slate-800'>Bildirişlər</Text>
                <View className='flex-row justify-between items-center'>
                    <View className='flex-row items-center'>
                        <Ionicons name='notifications-outline' size={32} color={'blue'} />
                        <Text className='px-2 text-slate-600'>Pop-up bildirişlər</Text>
                    </View>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        onValueChange={setIsEnabled}
                        value={isEnabled}
                    />
                </View>

            </View>

        </View>
    )
}