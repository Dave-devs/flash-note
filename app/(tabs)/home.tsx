import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ListRenderItem,
  FlatList,
  ActivityIndicator,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { defaultStyles } from "@/constants/Styles";
import Header from "@/components/header";
import { Link, useRouter } from "expo-router";
import Colors from "@/constants/Colors";
import { FontAwesome6 } from "@expo/vector-icons";
import GlobalApi from "@/utils/GlobalApi";
import Placeholder from "@/components/placeholder";
import { Note } from "@/utils/interfaces/note";

export default function Page() {
  const router = useRouter();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    GlobalApi.getNotes()
      .then((resp: any) => setNotes(resp.notes))
      .catch((err) => console.error("Error", err))
      .finally(() => setLoading(false));
  };

  const handleAddButtonClick = () => {
    setDropdownOpen(true);
  };
  const handleClearClick = () => {
    setDropdownOpen(false);
  };
  const addNote = () => {
    router.push("/(pages)/addnote");
    setDropdownOpen(false);
  };
  const addTodo = () => {
    router.push("/(pages)/addtodo");
    setDropdownOpen(false);
  };

  const renderRow: ListRenderItem<Note> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity style={styles.noteContainer}>
          <View>
            <Text
              style={{
                color: Colors.primary,
                fontFamily: "open-sans",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              12{" "}
              <Text
                style={{
                  color: Colors.black,
                  fontFamily: "open-sans",
                  fontWeight: "bold",
                }}
              >
                May
              </Text>{" "}
              <Text
                style={{
                  color: Colors.grey,
                  fontFamily: "open-sans",
                  fontWeight: "200",
                  fontSize: 14,
                }}
              >
                2024, Saturday
              </Text>
            </Text>
            <Text style={{ color: Colors.primary, fontFamily: "open-sans" }}>
              11:40 am
            </Text>
          </View>

          <View>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", color: Colors.black }}
            >
              {item.title}
            </Text>
            <Text numberOfLines={5} >{item.content}</Text>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <View style={defaultStyles.container}>
      <StatusBar />
      {/* Header Componet */}
      <Header
        onStarClick={() => router.push("/(pages)/premium")}
        onSearchClick={() => router.push("/(pages)/search")}
        onChatClick={() => router.push("/(pages)/chat")}
        onMenuClick={() => router.push("/(pages)/settings")}
      />

      {/* Main View */}
      {loading && (
        <View style={defaultStyles.container}>
          <ActivityIndicator color={Colors.primary} size="large" />
        </View>
      )}

      {!loading && (
        <FlatList
          data={notes}
          renderItem={renderRow}
          numColumns={1}
          keyExtractor={(item) => item.id}
        />
      )}

      {/* Floating Action Button */}
      <TouchableOpacity
        style={styles.floatingBtn}
        onPress={handleAddButtonClick}
      >
        <FontAwesome6 name="add" size={24} color={Colors.white} />
      </TouchableOpacity>

      {/* Floating Button Add Note Options */}
      {isDropdownOpen && (
        <View style={styles.card}>
          <Pressable onPress={() => addNote()}>
            <Text style={styles.text}>✨ Add new note</Text>
          </Pressable>
          <Pressable onPress={() => addTodo()}>
            <Text style={styles.text}>✨ Add new todo</Text>
          </Pressable>
          <Pressable onPress={handleClearClick}>
            <Text style={styles.text}>✨ Clear</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  floatingBtn: {
    position: "absolute",
    bottom: 65,
    right: 45,
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: Colors.white,
    position: "absolute",
    top: 400,
    right: 50,
    left: 50,
    borderRadius: 10,
    padding: 10,
    gap: 5,
  },
  text: {
    color: Colors.black,
    fontFamily: "open-sans",
    fontWeight: "bold",
    fontSize: 16,
  },
  noteContainer: {
    flex: 1,
    backgroundColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    width: "auto",
    margin: 5,
    gap: 5,
  },
});
