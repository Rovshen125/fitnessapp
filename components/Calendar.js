import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Calendar() {
  const startDate = '2025-09-28'
  const choosenWeek = 32
  const start = new Date(startDate)
  const end = new Date(start.getTime() + (choosenWeek * 7 * 24 * 60 * 60 * 1000))
  const today = new Date()
  
  const [currentMonth, setCurrentMonth] = useState(start.getMonth())
  const [currentYear, setCurrentYear] = useState(start.getFullYear())
  const [selectedDays, setSelectedDays] = useState({})

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1)

  const prev = () => {
    const prevDate = new Date(currentYear, currentMonth - 1, 1);
    if (prevDate >= start) {
      setCurrentYear(prevDate.getFullYear());
      setCurrentMonth(prevDate.getMonth());
    }
  };

  const next = () => {
    const nextDate = new Date(currentYear, currentMonth + 1, 1);
    if (nextDate <= end) {
      setCurrentYear(nextDate.getFullYear());
      setCurrentMonth(nextDate.getMonth());
    }
  };

  const isClickable = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    if (date < start) return false;
    if (date > today) return false;
    if (date > end) return false;
    return true;
  };

  const toggleDay = (day) => {
    const key = `${currentYear}-${currentMonth + 1}-${day}`;
    setSelectedDays((prev) => ({
      ...prev,
      [key]: !prev[key]   // seçilibsə sil, seçilməyibsə əlavə et
    }));
  };

  console.log(selectedDays)

  return (
    <View className='bg-red-500 justify-center items-center'>
      <View className='w-[90%] flex-row justify-between'>
        <TouchableOpacity onPress={prev}><Text>Prev</Text></TouchableOpacity>
        <Text>{currentYear}/{currentMonth + 1}</Text>
        <TouchableOpacity onPress={next}><Text>Next</Text></TouchableOpacity>
      </View>

      <View className='flex-row flex-wrap justify-center items-center w-[90%] bg-indigo-950 p-2 gap-1'>
        {daysArray.map((day, index) => {
          const clickable = isClickable(day)
          const key = `${currentYear}-${currentMonth + 1}-${day}`
          const isSelected = selectedDays[key]

          return (
            <TouchableOpacity
              key={index}
              onPress={() => clickable && toggleDay(day)}
              disabled={!clickable}
              className="w-16 h-16 rounded-full justify-center items-center"
              style={{
                backgroundColor: !clickable 
                  ? 'gray' 
                  : isSelected 
                    ? 'orange'  // seçiləndə
                    : 'green'   // normal kliklənən gün
              }}
            >
              <Text>{day}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}
