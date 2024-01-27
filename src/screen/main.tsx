// main.jsx

import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { GenerateRandomNo } from "../utils/generateNo";
import LottieView from 'lottie-react-native';

export const MainScreen = () => {
    const initialText = '';
    const [noOfBox, setNoOfBox] = useState<string>(initialText);
    const [win, setWin] = useState<boolean>(false)
    const triggerConfetti = (status: any) => {
        if (status === true) {
            try {
                setWin(true)
                Alert.alert("hrerere")
            } catch (error) {
                console.error("Error playing confetti animation:", error);
            }
        }
    };

    return (
        <View>
            <Text>Enter Box Length</Text>
            <TextInput
                style={{
                    padding: 10,
                    borderWidth: 1,
                    margin: 10,
                    borderRadius: 10
                }}
                onChangeText={setNoOfBox}
                value={noOfBox}
                placeholder={'Please enter number of box here..'}
            />
            <View>
                <GenerateRandomNo
                    min={1}
                    max={10}
                    maxnumber={Number(noOfBox)}
                    win={(status: any) => triggerConfetti(status)}
                />
            </View>
            {
                win &&
                <LottieView
                    autoPlay
                    style={[generateNoSreen.lottieStyle]}
                    source={require('../assets/celebrate.json')}
                />
            }
        </View>
    );
}

const generateNoSreen = StyleSheet.create({
    lottieStyle:{
        width: '100%',
        height: '100%',
        position:'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        pointerEvents: 'none'
    }
});
