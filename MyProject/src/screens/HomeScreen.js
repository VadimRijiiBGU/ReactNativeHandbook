import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import { Text } from 'react-native-elements';

import Link from '../components/Link';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text h3 style={styles.text}>Welcome to todo online!</Text>
            <View style={styles.links}>
                <Link
                    title="Don't have account?"
                    buttonText="Sign Up"
                    onClick={() => navigation.navigate('Signup')}
                />
                <Link
                    title="Already have an account?"
                    buttonText="Sign In"
                    onClick={() => navigation.navigate('Signin')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    links: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        alignSelf: 'center',
        marginBottom: 30
    }
});

export default HomeScreen;
