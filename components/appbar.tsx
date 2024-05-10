import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

export default function AppBar() {
    const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Pop Screen */}
      <TouchableOpacity onPress={() => router.back()}>
        <Entypo name="chevron-small-left" size={30} color={Colors.white} />
      </TouchableOpacity>

      {/* Discard note */}
      <TouchableOpacity>
        <MaterialIcons name="clear" size={24} color={Colors.white} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: '100%',
        backgroundColor: Colors.primary,
        paddingHorizontal: 12,
        paddingTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})