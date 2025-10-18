import React, { useState } from "react";
import { View, Text, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function SeachScreen() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>
        Doğum tarixi: {date.toLocaleDateString()}
      </Text>

      <Button title="Doğum tarixi seç" onPress={() => setShow(true)} />

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="calendar" // Android üçün "default", "spinner" da ola bilər
          onChange={onChange}
          maximumDate={new Date()} // gələcək tarixlərə icazə vermir
        />
      )}
    </View>
  );
}
