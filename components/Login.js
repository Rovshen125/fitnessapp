import { View, Text, Image, TouchableOpacity, Platform, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";


export default function Login() {
    const [show, setShow] = useState(false)
    const [gen, setGen] = useState(null)
    const [calendarShow, setCalendarShow] = useState(false)
    const [date, setDate] = useState(new Date())
    const [showBirth, setShowBirth] = useState(false)


    const handlerPress = (par) => {
        setGen(par)
        setShow(false)
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setCalendarShow(Platform.OS === "ios"); // Android-də modal avtomatik bağlanır
        setDate(currentDate);
        setShowBirth(true)
    };


    return (
        <SafeAreaView className='bg-white'>
            <View className='w-full h-3/5 bg-red-300'>
                <Image className='w-full h-full absolute inset-0' source={require('../assets/fit.jpg')} />
            </View>

            {/* inputlar */}
            <View className='justify-center items-center my-3 gap-5'>
                <View className='w-4/5  p-2 rounded-xl  bg-slate-100 flex-row justify-between items-center'>
                    <View className=''>
                        <Ionicons name='people-outline' size={26} color={'brown'} />
                    </View>
                    <View className='flex-1 mx-2'>
                        <Text className='text-2xl text-slate-400'>{gen ? gen : 'Cinsiniz'}</Text>
                    </View>
                    <TouchableOpacity onPress={() => setShow(!show)}>
                        <Ionicons name={show ? 'chevron-up' : 'chevron-down'} size={22} color={'brown'} />
                    </TouchableOpacity>
                    {
                        show && <View className='z-10 absolute right-0 top-12'>
                            <TouchableOpacity onPress={() => handlerPress('Kisi')}>
                                <Text className='bg-white text-xl'>Kişi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handlerPress('Qadın')}>
                                <Text className='bg-white text-xl'>Qadın</Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
                {/* Birinci Input bitdi */}

                <View className='w-4/5  p-2 rounded-xl  bg-slate-100 flex-row justify-between items-center'>
                    <View className=''>

                        <TouchableOpacity onPress={() => setCalendarShow(!calendarShow)}>
                            <Ionicons name='calendar-outline' size={22} />
                        </TouchableOpacity>                    </View>
                    <View className='flex-1 mx-2'><Text className='text-2xl text-slate-400'>{showBirth ? date.toLocaleDateString() : 'Dogum Tarixi'}</Text></View>
                    {/* calendar */}

                    {calendarShow && <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode="date"
                        display="calendar" // Android üçün "default", "spinner" da ola bilər
                        onChange={onChange}
                        maximumDate={new Date()} // gələcək tarixlərə icazə vermir
                    />}

                    {/* calendar x */}
                </View>
                {/* wight */}
                <View className='w-4/5   rounded-xl  flex-row  items-center justify-between'>
                    <View className='flex-row  items-center p-1 px-2 rounded-xl bg-slate-100'>
                        <View>
                            <Ionicons name='scale-outline' size={22} />
                        </View>
                        <View>
                            <TextInput placeholder='KG' style={{ width: 200, height:40 }} className=' mx-1' />
                        </View>
                    </View>
                    <View>
                        <Text className='bg-blue-400 text-2xl p-2 rounded-xl'>KG</Text>
                    </View>
                </View>
                {/* weight end */}


                                {/* height */}
                <View className='w-4/5   rounded-xl  flex-row  items-center justify-between'>
                    <View className='flex-row items-center p-1 px-2 rounded-xl bg-slate-100'>
                        <View>
                            <Ionicons name='swap-vertical' size={22} />
                        </View>
                        <View>
                            <TextInput placeholder='CM' style={{ width: 200, height:40 }} className=' mx-1' />
                        </View>
                    </View>
                    <View>
                        <Text className='bg-blue-400 text-2xl p-2 rounded-xl'>CM</Text>
                    </View>
                </View>
                {/* height end */}


                <View className='bg-sky-400 p-2 flex-row justify-center items-center w-9/12' style={{borderRadius:15}}>
                
                    
                        <Text className='text-3xl text-white'>Başla</Text>
                        <Ionicons name='chevron-forward' size={22} color={'white'} />
                    </View>
            

            </View>
        </SafeAreaView>
    )
}