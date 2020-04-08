import React, { useState } from 'react';
import { View, Button, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

class SignForm extends React.Component {
    state = {
        email: '',
        password: '',
        emailTouched: false,
        passwordTouched: false
    };

    renderNotNullErrorMessage = (field) => {
        if (!this.state[field] && this.state[`${field}Touched`]) {
            return (
                <Text style={styles.errorText}>{field.charAt(0).toUpperCase() + field.slice(1)} can't be empty!</Text>
            )
        }

        return null;
    };

    renderErrorResponse = () => {
        if (this.props.errorMessage) {
            return (
                <View style={styles.errorResponseContainer}>
                    <Text style={styles.errorResponseText}>{this.props.errorMessage}</Text>
                </View>
            );
        }

        return null;
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header} h3>{this.props.formTitle}</Text>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email })}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onBlur={() => this.setState({ emailTouched: true })}
                        />
                        {this.renderNotNullErrorMessage('email')}
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password })}
                            autoCapitalize="none"
                            autoCorrect={false}
                            secureTextEntry
                            onBlur={() => this.setState({ passwordTouched: true })}
                        />
                        {this.renderNotNullErrorMessage('password')}
                    </View>
                    {this.renderErrorResponse()}
                    <View style={styles.buttonStyle}>
                        <Button
                            title={this.props.formTitle}
                            disabled={this.state.emailError || this.state.passwordError}
                            onPress={() => this.props.onSubmit(this.state.email, this.state.password)}
                        />
                    </View>
                </View>
                <View style={styles.linkContainer}>
                    <Text>{this.props.title}</Text>
                    <TouchableOpacity
                        onPress={this.props.redirect}
                    >
                        <Text style={styles.link}>{this.props.linkTitle}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        marginBottom: 120,
        height: 400
    },
    header: {
        alignSelf: 'center'
    },
    linkContainer: {
        alignSelf: 'center',
        alignItems: 'center'
    },
    link: {
        color: 'blue'
    },
    formContainer: {
        margin: 5
    },
    inputContainer: {
        marginBottom: 10
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
    },
    buttonStyle: {
        alignSelf: 'center',
        width: 300,
        marginTop: 40
    },
    errorText: {
        color: 'red',
        fontSize: 10
    },
    errorResponseContainer: {
        alignSelf: 'center'
    },
    errorResponseText: {
        color: 'red',
        fontSize: 18
    }
});

export default SignForm;
