import React, { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView, useColorScheme, Alert, ToastAndroid } from "react-native";

interface RandomNumberGeneratorProps {
    min: number;
    max: number;
    maxnumber: number;
    win: any
}
export const GenerateRandomNo: React.FC<RandomNumberGeneratorProps> = ({ max, min, maxnumber, win }) => {
    const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
    const [selected, setSelected] = useState<number[]>([])

    const isDarkMode = useColorScheme() === 'dark';
    useEffect(() => { generateRandomNumber() }, [maxnumber])
    const generateRandomNumber = () => {
        if (maxnumber > 1) {
            const newNumbers = Array.from({ length: maxnumber }, () => Math.floor(Math.random() * (max - min + 1)) + min);
            setRandomNumbers(newNumbers);
            setSelected([])
            win(false)
        }
        else {
            showToastWithGravityAndOffset()
            setRandomNumbers([])
        }
    };

    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
            'Enter greater than 1',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    };

    const fix = (index: number) => {
        setSelected((prevSelected: number[]) => {
            if (prevSelected?.includes(index)) {
                return prevSelected?.filter((item) => item !== index);
            } else {
                return [...prevSelected, index];
            }
        });

        const allAreSame = new Set(randomNumbers);
        if (allAreSame.size === 1) {
            win(true)
            setSelected([])
            setRandomNumbers([])
        }
    };
    const roll = () => {
        const temp: number[] = [];
        for (let i = 0; i < maxnumber; i++) {
            const randomNo = Math.floor(Math.random() * (max - min + 1) + min);
            temp.push(randomNo)
        }
        const afterRoll = randomNumbers.map((item, id) =>
            selected.includes(id) ? item : temp[id]
        )
        setRandomNumbers(afterRoll)
    }

    return (
        <ScrollView>
            <View className="flex-row	flex-wrap content-center justify-center gap-1 p-1 m-1">
                {randomNumbers?.map((number, index) => (
                    <Pressable className="w-12"
                        onPress={() => fix(index)}
                        key={index}
                    >
                        <Text key={index}
                            className={`border-2 rounded-md text-center w-full p-2 
                            ${selected.includes(index) ? 'bg-green-700' : 'bg-transparent'}	
                            ${isDarkMode ? selected.includes(index) ? "text-white" : 'text-white' : selected.includes(index) ? 'text-white' : 'text-black'}
                            ${isDarkMode ? 'border-white' : 'border-black'}
                            `}
                        >
                            {number}
                        </Text>
                    </Pressable>
                ))}
            </View>
            {
                randomNumbers?.length !== 0 &&
                <Pressable
                    onPress={() => roll()}
                    className="justify-center content-center px-5">
                    <Text className="text-center bg-blue-700 p-3 m-3 rounded-xl text-slate-900 dark:text-white text-base font-medium tracking-tight">
                        Roll Box
                    </Text>
                </Pressable>
            }
        </ScrollView>
    );
}