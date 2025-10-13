import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
export default function HomeHeader() {
    const navigation = useNavigation()
  return (
    <View>
        <View className='flex-row justify-between items-center'>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name='arrow-back' size={42} />
            </TouchableOpacity>
            <View>
                <Text className='font-bold text-3xl'>Profil</Text>
            </View>
            <View></View>
        </View>


        {/* burada profil shekili ve altinda uc yazi */}

        <View className='justify-center items-center pt-5'>
            <View className='justify-center items-center'>
                <View className='border-2 border-blue-300 w-32 h-32 rounded-full p-1'>
                    <Image className='w-full h-full rounded-full bg-blue-100' source={{uri:'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png'}} />
                </View>
                <View className='pt-5'>
                    <Text className='font-bold text-3xl text-center'>Mirrovshan Mirhasanli</Text>
                    <Text className='text-xl text-center'>Ceki atmaq proqrami</Text>
                </View>
                <View className='pt-7'>
                    <TouchableOpacity className='bg-blue-400 p-3 rounded-xl'>
                        <Text className='text-white text-xl'>Duzenle</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


        {/* Burada 3 qutu */}

    <View className='flex-row justify-evenly pt-5'>
        <View className='bg-white  rounded-3xl w-1/4 p-3'>
            <Text className='text-blue-400 text-xl text-center'>175sm</Text>
            <Text className='text-xl text-center'>Boy</Text>
        </View>
                <View className='bg-white  rounded-3xl w-1/4 p-3'>
            <Text className='text-blue-400 text-xl text-center'>85kg</Text>
            <Text className='text-xl text-center'>Ceki</Text>
        </View>
                <View className='bg-white  rounded-3xl w-1/4 p-3'>
            <Text className='text-blue-400 text-xl text-center'>32</Text>
            <Text className='text-xl text-center'>Yas</Text>
        </View>
    </View>

    </View>
  )
}