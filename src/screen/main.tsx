import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert, Dimensions, useColorScheme, ScrollView, ToastAndroid, } from "react-native";
import { Button } from 'react-native-paper';

export const MainScreen = (props: any) => {
    const initialText = '';
    const [noOfBox, setNoOfBox] = useState<string>(initialText);
    const isDarkMode = useColorScheme() === 'dark';
    const scrheight = Dimensions.get('window').height;
    return (
        <View
            className="flex-1 justify-center items-center bg-white dark:bg-slate-800 "
        >
            <Text className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                Please enter number
            </Text>
            <TextInput
                className="border-2 rounded-xl w-2/5 mt-2 text-center border-white dark:border-black"
                onChangeText={setNoOfBox}
                value={noOfBox}
                keyboardType='numeric'
                inputMode='numeric'
                placeholder={'ex.10'}
            />
            <Button
             mode="contained" 
             className="mt-4"
             onPress={() => {props.navigation.navigate('GameScreen',{
                data:{
                    noOfBoxValue: noOfBox,
                }
            })}}
             >
                Press me
            </Button>

            {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[generateNoSreen.textStyl, { color: isDarkMode ? 'white' : 'black' }]}>
                    Please enter number
                </Text>
                <TextInput
                    style={[generateNoSreen.boxStyl, { borderColor: isDarkMode ? 'white' : 'black' }]}
                    onChangeText={setNoOfBox}
                    value={noOfBox}
                    keyboardType='numeric'
                    inputMode='numeric'
                    placeholder={'ex.10'}
                    placeholderTextColor={isDarkMode ? 'white' : 'black'}
                />
            </View> */}

            {/* <Button
                title="Start Game"
                onPress={() => { props.navigation.navigate('GameScreen',{
                    data:{
                        noOfBoxValue: noOfBox,
                    }
                })}}
            /> */}
        </View>
    );
}

// const generateNoSreen = StyleSheet.create({
//     boxStyl: {
//         padding: 10,
//         borderWidth: 2,
//         margin: 10,
//         marginTop: 10,
//         borderRadius: 10,
//         width: 100,
//         textAlign: 'center'
//     },
//     textStyl: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: 'black'
//     }
// });
