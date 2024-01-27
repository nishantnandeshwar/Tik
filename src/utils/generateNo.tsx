import React, { useEffect, useState, useRef } from "react";
import { View, Text, Pressable, StyleSheet, TouchableWithoutFeedback, Alert } from "react-native";
import LottieView from 'lottie-react-native';

interface RandomNumberGeneratorProps {
    min: number;
    max: number;
    maxnumber: number;
    win: any
}

export const GenerateRandomNo: React.FC<RandomNumberGeneratorProps> = ({ max, min, maxnumber,win }) => {
    const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
    const [selected, setSelected] = useState<number[]>([])

    const generateRandomNumber = () => {
        console.log("generateRandomNumber call")
        const newNumbers = Array.from({ length: maxnumber }, () => Math.floor(Math.random() * (max - min + 1)) + min);
        setRandomNumbers(newNumbers);
        setSelected([])
        win(false)
    };

    
    const fix = (index: number) => {
        setSelected((prevSelected: number[]) => {
            if (prevSelected.includes(index)) {
                return prevSelected.filter((item) => item !== index);
            } else {
                return [...prevSelected, index];
            }
        });

        const allAreSame = new Set(randomNumbers);
        if (allAreSame.size === 1) {
            win(true)
            Alert.alert("Win");
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
        <View style={[{ justifyContent: 'center', flex: 1 }]}>
            <Pressable onPress={generateRandomNumber} style={[{ justifyContent: 'center', flexDirection: 'row' }]}>
                <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 10 }}>Generate boxs</Text>
            </Pressable>
            <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10, margin: 10, flexWrap: 'wrap', gap: 10, alignContent: 'center' }}>
                {randomNumbers.map((number, index) => (
                    <Pressable style={{ width: 50, justifyContent: 'center', alignContent: 'center', flexDirection: 'row' }}
                        onPress={() => fix(index)}
                        key={index}
                    >
                        <Text key={index} style={[generateNoSreen.box, { width: '100%', backgroundColor: selected.includes(index) ? 'red' : 'transparent' }]}>{number}</Text>
                    </Pressable>
                ))}
            </View>
            {
                randomNumbers.length !== 0 &&
                <Pressable onPress={() => roll()} style={[{ justifyContent: 'center', flexDirection: 'row' }]}>
                    <Text style={{ backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 10 }}>Roll</Text>
                </Pressable>
            }
            
        </View>
        
    );
}

const generateNoSreen = StyleSheet.create({
    box: {
        borderWidth: 1,
        borderRadius: 10,
        padding: 10
    },
})

