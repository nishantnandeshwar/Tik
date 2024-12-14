import React, { useRef, useState } from "react";
import { View, Text, TextInput, ToastAndroid, } from "react-native";
import { Button } from 'react-native-paper';

export const MainScreen = (props: any) => {
    const initialText = '';
    const [noOfBox, setNoOfBox] = useState<string>(initialText);
    const inputRef = useRef<any>("")

    const navigateToGame = () => {
        console.log(noOfBox === '' || noOfBox === '0' ? "true" : "false")
        console.log(noOfBox)
        if (noOfBox === "" || parseInt(noOfBox) <= 3) {
            ToastAndroid.showWithGravityAndOffset(
                'Enter greater than 3',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM,
                25,
                50,
            );
        }
        else if(parseInt(noOfBox) > 3){
            props.navigation.navigate('GameScreen', {
                data: {
                    noOfBoxValue: noOfBox,
                }
            })
        }
    }

    const handleChange = (text: string) => {
        const regex = /^[0-9]*\.?[0-9]*$/;
        if (regex.test(text)) {
            setNoOfBox(text);
        }
    };

    return (
        <View
            className="flex-1 justify-center items-center bg-white dark:bg-slate-800 " 
            style={{backgroundColor:'#CB8658'}}
        >
            <Text className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
                Please enter number
            </Text>
            <TextInput
                className="border-2 rounded-xl w-2/5 mt-2 text-center border-white dark:border-black"
                onChangeText={handleChange}
                value={noOfBox}
                keyboardType='numeric'
                inputMode='numeric'
                placeholder={'ex.10'}
                ref={inputRef}
            />
            <Button
                style={{backgroundColor:'#552C22'}}
                mode="contained"
                className="mt-4"
                onPress={() => {
                    navigateToGame()
                }}
            >
                Start playing
            </Button>
        </View>
    );
}