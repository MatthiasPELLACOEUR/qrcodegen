import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Encoder = (props) => {

    return (
        <View style={ style.view }>
            <Text style={ style.title }>
                A propos Lol
            </Text>
            <Text>
                Lorem Ipsum sit amet, consectetur
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
export default Encoder