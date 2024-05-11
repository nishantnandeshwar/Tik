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
                setTimeout(() => setWin(false), 2000)
            } catch (error) {
                console.error("Error playing confetti animation:", error);
            }
        }
    };

    return (
        <>
            <View>
                <Text>
                    {props.route.params.data.noOfBoxValue}
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
                    // style={[generateNoSreen.lottieStyle]}
                    source={require('../assets/celebrate.json')}
                    duration={5000}
                />
            }
        </>
    )
}


