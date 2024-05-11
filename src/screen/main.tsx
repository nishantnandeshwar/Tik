import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert, Dimensions, useColorScheme, ScrollView, ToastAndroid, Button } from "react-native";

export const MainScreen = (props:any) => {
    const initialText = '';
    const [noOfBox, setNoOfBox] = useState<string>(initialText);
    const isDarkMode = useColorScheme() === 'dark';
    const scrheight = Dimensions.get('window').height;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
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
            </View>
            <Button
                title="Start Game"
                onPress={() => { props.navigation.navigate('GameScreen',{
                    data:{
                        noOfBoxValue: noOfBox,
                    }
                })}}
            />
        </View>
    );
}

const generateNoSreen = StyleSheet.create({
    boxStyl: {
        padding: 10,
        borderWidth: 2,
        margin: 10,
        marginTop: 10,
        borderRadius: 10,
        width: 100,
        textAlign: 'center'
    },
    textStyl: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
});
