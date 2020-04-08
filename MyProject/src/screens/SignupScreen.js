import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { signUp } from '../actions/signActions';
import SignForm from '../components/SignForm';

class SignupScreen extends React.Component {
    onSubmit = async (email, password) => {
        await this.props.signUp(email, password);
    };

    render() {
        return (
            <View style={styles.container}>
                <SignForm
                    onSubmit={this.onSubmit}
                    formTitle="Sign Up"
                    title="Already have an account?"
                    linkTitle="Sign in"
                    errorMessage={this.props.errorMessage}
                    redirect={() => navigation.navigate('Signin')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    }
});

const mapStateToProps = (store) => {
    return {
        errorMessage: store.sign.errorMessage
    };
};

export default connect(mapStateToProps, {
    signUp
})(SignupScreen);
