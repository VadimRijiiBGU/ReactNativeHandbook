import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Link = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.title}</Text>
            <TouchableOpacity
                onPress={props.onClick}
            >
                <Text style={styles.link}>{props.buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        margin: 5,
        alignItems: 'center'
    },
    link: {
        color: 'blue'
    }
});

export default Link;
