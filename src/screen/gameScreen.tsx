import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";
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
    
    const BackHandler=()=>{
        Alert.alert(
            'Confirmation', // Title
            'Are you sure want to back?', // Message
            [
              { text: 'No', onPress: () => console.log('No Pressed'), style: 'cancel' },
              { text: 'Yes', onPress: () => props.navigation.navigate('StartGame') },
            ],
            { cancelable: false } // Prevent dismissing by tapping outside
          );
    }

    return (
        <>

            <View className='flex-1 items-center bg-white dark:bg-slate-800'
                style={{ backgroundColor: '#CB8658' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16, display: 'flex', alignItems:'center', marginVertical:10 }}>
                    <Text className="text-slate-900 dark:text-white font-medium tracking-tight flex-1">
                        Total Boxes: {props.route.params.data.noOfBoxValue}
                    </Text>
                    <TouchableOpacity style={{ borderWidth: 1, borderRadius: 5, backgroundColor: '#552C22' }}
                    onPress={()=>{
                        BackHandler()
                    }}>
                        <Text className="text-white  dark:text-slate-900 font-medium tracking-tight" style={{ padding: 10 }}>
                            I can't play
                        </Text>
                    </TouchableOpacity>
                </View>
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

