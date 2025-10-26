import { View, Text, Image, TouchableOpacity,Platform} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from "@react-native-community/datetimepicker";


export default function Login() {
    const [show, setShow] = useState(false)
    const [gen, setGen] = useState(null)
    const [calendarShow, setCalendarShow] = useState(false)
    const [date, setDate] = useState(new Date())


    const handlerPress = (par) => {
        setGen(par)
        setShow(false)
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setCalendarShow(Platform.OS === "ios"); // Android-də modal avtomatik bağlanır
        setDate(currentDate);
    };


    return (
        <SafeAreaView className='bg-white'>
            <View className='w-full h-3/5 bg-red-300'>
                <Image className='w-full h-full absolute inset-0' source={require('../assets/fit.jpg')} />
            </View>
            {/* inputlar */}
            <View className='justify-center items-center my-6 gap-5'>
                <View className='w-4/5  p-3 rounded-xl  bg-slate-100 flex-row justify-between items-center'>
                    <View className=''>
                        <Ionicons name='people-outline' size={26} color={'brown'} />
                    </View>
                    <View className='flex-1 mx-2'>
                        <Text className='text-2xl text-slate-400'>{gen ? gen : 'Cinsiniz'}</Text>
                    </View>
                    <TouchableOpacity  onPress={() => setShow(!show)}>
                        <Ionicons name={show ? 'chevron-up' : 'chevron-down'} size={22}  color={'brown'} />
                    </TouchableOpacity>
                    {
                        show && <View className='absolute right-0 top-12'>
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

                <View className='w-4/5  p-3 rounded-xl  bg-slate-100 flex-row justify-between items-center'>
                    <View className=''>

                        <TouchableOpacity onPress={() => setCalendarShow(!calendarShow)}>
                            <Ionicons name='calendar-outline' size={22} />
                        </TouchableOpacity>                    </View>
                    <View className='flex-1 mx-2'><Text className='text-2xl text-slate-400'>Dogum Tarixi</Text></View>
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

            </View>
        </SafeAreaView>
    )
}