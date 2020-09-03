import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const History = (props) => {

    const ListQrCode = () => {
        localStorage.getItem('QrCodeGenerated')
    }

    return (
        <View style={ style.view }>
            <Text style={ style.title }>
                {ListQrCode()}
            </Text>
        </View>
    )
}
const style = StyleSheet.create({
    view: {
        margin: 40
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    }

})
export default History
