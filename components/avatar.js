import React from 'react'
import { ColorPropType, View, Text, StyleSheet } from 'react-native'
import PropsTypes from "prop-types";
export default function Avatar({ size, backgroundColor, initails }) {

    const style = {
        width: size,
        height: size,
        backgroundColor,
        borderRadius: size / 2
    }
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{initails}</Text>
        </View>
    )
}

Avatar.prototype = {
    initails: PropsTypes.string.isRequired,
    backgroundColor: ColorPropType.isRequired,
    size: PropsTypes.number.isRequired
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    }
})
