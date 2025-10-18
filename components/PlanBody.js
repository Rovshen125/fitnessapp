import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import PlanScroll from './PlanScroll';
import PlanWorkOut from './PlanWorkOut';


export default function PlanBody() {
  const time = new Date();

  const navigation = useNavigation()

  return (
    <View>
      <View className='w-full  bg-white' style={{
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24
      }} >

        <View className='w-full h-8 items-center justify-center'>
          <View className='w-1/6 h-2 bg-slate-200 rounded-full'></View>
        </View>

        {/* Header*/}
        <View className='flex-row justify-between items-center '>
          <View className='pl-2'>
            <Text className='text-2xl font-bold'>Butun Proqram</Text>
            <Text className='text-slate-500'>11 hereket ｜30 gun ｜ ideal gorunus </Text>
          </View>

          <View className='pr-2'>
            <Ionicons name='heart' size={32} color={'red'} />
          </View>
        </View>
        {/* calendar and difficulity */}

        <View className='p-3 gap-3'>

          <TouchableOpacity onPress={() => navigation.navigate('calendar')} className='bg-indigo-100 p-4 flex-row justify-between rounded-xl'>
            <View className='flex-row justify-center items-center gap-2'>
              <Ionicons name='calendar-outline' size={32} color={'gray'} />
              <Text className='text-xl' style={{ color: 'gray' }}>Secilmis vaxt</Text>
            </View>
            <View className='flex-row justify-center items-center'>
              <Text style={{ color: 'gray' }}>{time.getMonth() + 1}/{time.getDate() + 1} {time.getHours()}:{time.getMinutes()}</Text>
              <Ionicons name='chevron-forward' size={32} color={'gray'} />
            </View>
          </TouchableOpacity>



          <TouchableOpacity onPress={() => navigation.navigate('calendar')} className='bg-violet-100 p-4 flex-row justify-between rounded-xl'>
            <View className='flex-row justify-center items-center gap-2'>
              <Ionicons name='swap-vertical' size={32} color={'gray'} />
              <Text className='text-xl' style={{ color: 'gray' }}>Cetinlik</Text>
            </View>
            <View className='flex-row justify-center items-center'>
              <Text style={{ color: 'gray' }}>Baslangic</Text>
              <Ionicons name='chevron-forward' size={32} color={'gray'} />
            </View>
          </TouchableOpacity>

        </View>


        {/* calendar and difficulity end */}


        {/* Scroll horizontal menu */}
        <PlanScroll />
        {/* Scroll horizontal menu  end*/}

        {/* Plan work outs */}
        <PlanWorkOut />
        {/* Plan work out ended */}
      </View>
    </View>
  )
}