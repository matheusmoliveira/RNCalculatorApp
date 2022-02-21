import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-web';

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']  

  const [currentNumber, setCurrentNumber] = useState('')
  const [lastNumber, setLastNumber] = useState('')

  function calculator(){
    const splitNumbers = currentNumber.split(' ')
    const firstNumber = parseFloat(splitNumbers[0])
    const lastNumber = parseFloat(splitNumbers[2])
    const operator = splitNumbers[1]

    switch(operator){
      case '+':
        setCurrentNumber((firstNumber + HaclastNumber).toString())
        return
      case '-':
        setCurrentNumber((firstNumber - lastNumber).toString())
        return
      case '*':
        setCurrentNumber((firstNumber * lastNumber).toString())
        return
      case '/':
        setCurrentNumber((firstNumber / lastNumber).toString())
        return
    }
  }

  function handleInput(buttonPressed) {
    console.log(buttonPressed)
    if (buttonPressed === '+' | buttonPressed === '-' | buttonPressed === '*' | buttonPressed === '/'){
      setCurrentNumber(currentNumber + ' ' + buttonPressed + ' ')
      return
    }
    switch(buttonPressed){
      case 'DEL':
        setCurrentNumber(currentNumber.substring(0, (currentNumber.length -1)))
        return
      case 'AC':
        setLastNumber('')
        setCurrentNumber('')
        return
      case '=':
        setLastNumber(currentNumber + ' = ')
        calculator()
        return
      case '+/-':
        return
    }

    setCurrentNumber(currentNumber + buttonPressed)
  }

  const styles = StyleSheet.create({
    results: {
      backgroundColor: darkMode ? '#282F3B' : '#F5F5F5',
      width: '100%',
      minHeight: 280,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    resultText: {
      color: darkMode ? '#F5F5F5' : '#282F38',
      margin: 10,
      fontSize: 40
    },
    historyText: {
      color: darkMode ? '#B5B7BB' : '#7C7C7C',
      fontSize: 20,
      marginRight: 3,
      alignSelf: 'flex-end'
    },
    themeButton: {
      alignSelf: 'flex-start',
      backgroundColor: darkMode ? '#7B8084' : '#E5E5E5',
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 80,
      margin: 15,
      width: 50,
      height: 50, 
      borderRadius: 25,
    },
    buttons: {
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    button: {
      borderColor: darkMode ? "#3F4D5B" : "#E5E5E5",
      borderWidth: 0.2,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 90,
      minHeight: 90, 
      flex: 2,
    },
    textButton: {
      color: darkMode ? '#B5B7BB' : '#7C7C7C',
      fontSize: 20,
    }
  });

  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo name={darkMode ? 'light-up' : 'moon'} size={24} color={darkMode ? 'white' : 'black'} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)} />
        </TouchableOpacity>
        <Text style={styles.historyText}>{lastNumber}</Text>
        <Text style={styles.resultText}>{currentNumber}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
          button === '=' ?
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: '#9DBC7B'}]}>
            <Text style={[styles.textButton, {color: 'white', fontSize: 30}]}>{button}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={() => handleInput(button)} key={button} style={[styles.button, {backgroundColor: typeof(button) === 'number' ? darkMode === true ? '#303946' : '#FFF' : darkMode === true ? '#414853' : '#EDEDED'}]}>
            <Text style={[styles.textButton]}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
