import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Alert, Dimensions, useColorScheme, ScrollView, ToastAndroid } from "react-native";
import { GenerateRandomNo } from "../utils/generateNo";
import LottieView from 'lottie-react-native';

export const GameScreen = (props: any) => {
    const [win, setWin] = useState<boolean>(false)
    const triggerConfetti = (status: any) => {
        if (status === true) {
            try {
                setWin(true)
                setTimeout(() => {
                    setWin(false)
                    props.navigation.navigate('StartGame')
                }, 2000)
            } catch (error) {
                console.error("Error playing confetti animation:", error);
            }
        }
    };

    return (
        <>
            <View className='flex-1 items-center bg-white dark:bg-slate-800 '>
                <Text className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                    Total Box: {props.route.params.data.noOfBoxValue}
                </Text>
                <GenerateRandomNo
                    min={1}
                    max={10}
                    maxnumber={Number(props.route.params.data.noOfBoxValue)}
                    win={(status: any) => triggerConfetti(status)}
                />
            </View>
            {
                win &&
                <LottieView
                    autoPlay
                    style={[generateNoSreen.lottieStyle]}
                    source={require('../assets/celebrate.json')}
                    duration={5000}
                />
            }
        </>

    )
}
const generateNoSreen = StyleSheet.create({
lottieStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    pointerEvents: 'none',
},
})

