import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";

export default function IntervalCalendar({ startDate = "2025-09-01", weeks = 8 }) {
  // Start tarixi
  const start = new Date(startDate);
  // Son tarix = start + weeks * 7 gün
  const end = new Date(start.getTime() + (weeks * 7 * 24 * 60 * 60 * 1000));
  const today = new Date();

  const [currentYear, setCurrentYear] = useState(start.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(start.getMonth()); // 0-indexed
  const [selectedDays, setSelectedDays] = useState({});

  // Ayın günlərini array kimi yaratmaq
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Günləri işarələmək
  const toggleDay = (day, done) => {
    const key = `${currentYear}-${currentMonth + 1}-${day}`;
    setSelectedDays({ ...selectedDays, [key]: done });
  };

  // Ay dəyişmə funksiyaları
  const prevMonth = () => {
    const prev = new Date(currentYear, currentMonth - 1, 1);
    if (prev >= start) {
      setCurrentYear(prev.getFullYear());
      setCurrentMonth(prev.getMonth());
    }
  };

  const nextMonth = () => {
    const next = new Date(currentYear, currentMonth + 1, 1);
    if (next <= end) {
      setCurrentYear(next.getFullYear());
      setCurrentMonth(next.getMonth());
    }
  };

  // Hər gün üçün klik oluna bilmək şərtləri
  const isClickable = (day) => {
    const date = new Date(currentYear, currentMonth, day);
    if (date < start) return false; // start tarixindən əvvəl
    if (date > today) return false; // bugündən sonra
    if (date > end) return false; // intervaldan sonra
    return true;
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      {/* Ay başlığı və düymələr */}
      <View style={styles.header}>
        <Button title="⟵" onPress={prevMonth} disabled={new Date(currentYear, currentMonth, 1) <= start} />
        <Text style={styles.title}>
          {currentYear} - {currentMonth + 1}
        </Text>
        <Button title="⟶" onPress={nextMonth} disabled={new Date(currentYear, currentMonth + 1, 0) >= end} />
      </View>

      {/* Günlər grid */}
      <View style={styles.grid}>
        {daysArray.map((day) => {
          const key = `${currentYear}-${currentMonth + 1}-${day}`;
          const status = selectedDays[key];
          const clickable = isClickable(day);

          return (
            <TouchableOpacity
              key={day}
              style={[
                styles.dayBox,
                status === true && { backgroundColor: "green" },
                status === false && { backgroundColor: "red" },
                !clickable && { opacity: 0.3 }, // kliklənməyən günlər solğun
              ]}
              onPress={() => clickable && toggleDay(day, status ? null : true)}
              onLongPress={() => clickable && toggleDay(day, false)}
              disabled={!clickable}
            >
              <Text style={styles.dayText}>{day}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: { fontSize: 20, fontWeight: "bold" },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dayBox: {
    width: 40,
    height: 40,
    margin: 5,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ddd",
  },
  dayText: { fontWeight: "bold" },
});
