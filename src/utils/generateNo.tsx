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
        <View>
            <View style={generateNoSreen.boxCont}>
                {randomNumbers?.map((number, index) => (
                    <Pressable style={generateNoSreen.boxInCont}
                        onPress={() => fix(index)}
                        key={index}
                    >
                        <Text key={index}
                            style={[generateNoSreen.boxTxt,
                            {
                                backgroundColor: selected.includes(index) ? 'green' : 'transparent',
                                color: isDarkMode ? selected.includes(index) ? 'white' : 'white' : selected.includes(index) ? 'white' : 'black',
                                borderColor: isDarkMode ? 'white' : 'black'
                            }]}>
                            {number}
                        </Text>
                    </Pressable>
                ))}
            </View>
            {
                randomNumbers?.length !== 0 &&
                <Pressable onPress={() => roll()} style={[generateNoSreen.rollCont]}>
                    <Text style={generateNoSreen.rollBtn}>Roll</Text>
                </Pressable>
            }
        </View>
    );
}

const generateNoSreen = StyleSheet.create({
    boxTxt: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        width: '100%',
        textAlign: 'center',
    },
    boxCont: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10, margin: 10,
        flexWrap: 'wrap',
        gap: 10,
        alignContent: 'center',
    },
    boxInCont: {
        width: 50, justifyContent: 'center', alignContent: 'center', flexDirection: 'row'
    },
    generateBtn: {
        color: 'white', padding: 10, borderRadius: 10, fontSize: 18
    },
    rollBtn: {
        backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 10
    },
    rollCont: {
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'blue',
        borderRadius: 15
    }
})
