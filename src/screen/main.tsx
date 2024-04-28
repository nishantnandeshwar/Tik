// main.jsx

import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, StyleSheet, Alert ,Dimensions} from "react-native";
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
                setTimeout(() => setWin(false), 2000)
            } catch (error) {
                console.error("Error playing confetti animation:", error);
            }
        }
    };
    const scrheight = Dimensions.get('window').height;
    return (
        <View style={{ height:'100%'}}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[generateNoSreen.textStyl]}>
                    Please enter number
                </Text>
                <TextInput
                    style={generateNoSreen.boxStyl}
                    onChangeText={setNoOfBox}
                    value={noOfBox}
                    keyboardType='numeric'
                    inputMode='numeric'
                    placeholder={'ex.10'}
                />
            </View>
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
    lottieStyle: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
        pointerEvents: 'none'
    },
    boxStyl: {
        padding: 10,
        borderWidth: 1,
        margin: 10,
        marginTop:3,
        borderRadius: 10,
        width: '50%',
        textAlign: 'center'
    },
    textStyl:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    }
});
