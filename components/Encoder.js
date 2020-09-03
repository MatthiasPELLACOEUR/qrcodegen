import React, { useState } from 'react'
import { AppRegistry, StyleSheet, TextInput, View, Text } from 'react-native'
import QRCode from 'react-native-qrcode-svg'
// import AsyncStorage from '@react-native-community/async-storage';

const Encoder = () => {

    const [text, setText] = useState('https://www.youtube.com/watch?v=hAq443fhyDo')

    const now = new Date()

    const storeData = () => {
        if(text !== '') {
            localStorage.setItem( `QRCode ${now}`, text)
        }
    }

    return (
        <View style={ styles.container }>
            <TextInput 
                style={styles.input}
                onChangeText={(value) => setText(value)}
                onSubmitEditing={() => storeData()}
                onBlur={() => storeData()}
            />
            { text === '' 
                ? <Text>Tapez quelque chose !</Text> 
                : <QRCode value={text} size={200} /> 
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 10,
    }
})

AppRegistry.registerComponent('Encoder', () => Encoder)

export default Encoder