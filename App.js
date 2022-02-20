import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Button } from 'react-native-web';

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '=']  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    results: {
      backgroundColor: darkMode ? '#282F3B' : '#F5F5F5',
      width: '100%',
      minHeight: 280,
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    resultText: {
      margin: 10,
      fontSize: 25
    },
    themeButton: {
      alignSelf: 'flex-start',
      backgroundColor: darkMode ? '#7B8084' : '#E5E5E5',
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 115,
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
    }
  });

  return (
    <View>
      <StatusBar style="auto" />
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo name={darkMode ? 'light-up' : 'moon'} size={24} color={darkMode ? 'white' : 'black'} onPress={() => darkMode ? setDarkMode(false) : setDarkMode(true)} />
        </TouchableOpacity>
        <Text style={styles.resultText}>2 + 2 = 4</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) => 
          button === '=' ?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#9DBC7B'}]}>
            <Text>{button}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: typeof(button) === 'number' ? darkMode === true ? '#303946' : '#FFF' : darkMode === true ? '#414853' : '#EDEDED'}]}>
            <Text>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
