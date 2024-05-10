import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';

interface Props {
    onStarClick: () => void;
    onSearchClick: () => void;
    onChatClick: () => void;
    onMenuClick: () => void;
}

export default function Header({onStarClick, onSearchClick, onChatClick, onMenuClick}: Props) {
  return (
    <View style={styles.container}>
        <Image source={require('@/assets/images/flash-note-logo.png')} style={styles.logo} />
        <View style={styles.actionBtns}>
            <TouchableOpacity onPress={onStarClick}>
                <AntDesign name="staro" size={22} color="yellow" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onSearchClick}>
                <Feather name="search" size={22} color={Colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onChatClick}>
                <Feather name="message-square" size={22} color={Colors.white} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onMenuClick}>
                <Entypo name="dots-three-vertical" size={22} color={Colors.white} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.primary,
        paddingHorizontal: 10,
        paddingTop: 30
    },
    logo: {
        height: 40,
        width: 80,
    },
    actionBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
    }
})