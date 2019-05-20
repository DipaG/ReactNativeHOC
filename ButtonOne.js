import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import StyleWrapper from './StyleWrapper';


const ButtonOne = (props) => {

    return (
        <View>
            <TouchableOpacity style = {props.styles}>
                <Text style = {styles.textDefault}>
                    Button
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    textDefault: {
        color : 'white'
    }
})

export default StyleWrapper(ButtonOne);