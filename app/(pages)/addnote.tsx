import {View, StyleSheet, TextInput, TouchableOpacity, Text} from "react-native";
import React, { useEffect, useState } from "react";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import Toast from 'react-native-toast-message';
import GlobalApi from "@/utils/GlobalApi";

export default function Addnote() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    createNote();
  }, [])

  const createNote = () => {
    if(!title || !note) {
      Toast.show({
        type: 'error',
        text2: 'Please add a title and note before continuing!',
      });
      return;
    }
    setLoading(true);
    
    GlobalApi.createNotes(title, note, time, date)
      .then((resp) => {
        console.log('Note added successfully!', resp);
        setTitle("");
        setNote("");
      })
      .catch((err) => {
        console.error('Add Note Error', err);
        Toast.show({
          type: 'error',
          text2: 'An error occurred while adding the note. Please try again.',
        });
      })
      .finally(() => {setLoading(false);});
  }
  

  return (
    <View style={defaultStyles.container}>
      {/* Title */}
      <View style={styles.titleInput}>
        <TextInput
          style={styles.title}
          value={title}
          onChangeText={setTitle}
          placeholder="Title"
          multiline={false}
          numberOfLines={1}
        />
      </View>

      {/* Note TextInput */}
      <View style={styles.noteInput}>
        <TextInput
          style={styles.note}
          value={note}
          onChangeText={setNote}
          placeholder="Write notes..."
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />
      </View>
      {/* Create Note Button */}
      {(title || note) && (
        <TouchableOpacity style={styles.btn} onPress={createNote}>
          <Text style={styles.btnText}>Create Note</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  titleInput: {
    marginTop: 30,
    height: 40,
    backgroundColor: "#e9ecef",
    marginHorizontal: 20,
    alignContent: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
  },
  title: {
    color: Colors.black,
    fontFamily: "open-sans",
    fontWeight: "200",
  },
  noteInput: {
    marginTop: 20,
    height: 120,
    backgroundColor: "#e9ecef",
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
  },
  note: {
    color: Colors.black,
    fontFamily: "open-sans",
    fontWeight: "300",
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.grey,
    alignItems: "center",
    paddingHorizontal: 15,
    marginHorizontal: 15,
  },
  btn: {
    height: 40,
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: Colors.primary,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontFamily: 'open-sans-medium',
    color: Colors.white
  }, 
});