import React from 'react'
import PropTypes from 'prop-types'
import Avatar from "./avatar";
import getIntials from "../utilis/getIntials";
import getAvatatColor from "../utilis/getAvatatColor";
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
function AuthorRow({ fullName, lineText, onPressLinkText }) {
    return (
        <View style={styles.container}>
            <Avatar initails={getIntials(fullName)} size={36}
                backgroundColor={getAvatatColor(fullName)} />
            <Text style={styles.text}>{fullName}</Text>
            <TouchableOpacity onPress={onPressLinkText}>
                <Text numberOfLines={1}>{lineText}</Text>
            </TouchableOpacity>
        </View>
    )
}

AuthorRow.propTypes = {
    fullName: PropTypes.string.isRequired,
    lineText: PropTypes.string.isRequired,
    onPressLinkText: PropTypes.func.isRequired
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 50,
        alignItems: 'center'
    },
    text: {
        flex: 1,
        marginHorizontal: 7
    }
})
export default AuthorRow;

