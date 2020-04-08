import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { signIn } from '../actions/signActions';
import SignForm from '../components/SignForm';

class SigninScreen extends React.Component {
    onSubmit = async (email, password) => {
        await this.props.signIn(email, password);
    };

    render() {
        return (
            <View style={styles.container}>
                <SignForm
                    onSubmit={this.onSubmit}
                    formTitle="Sign In"
                    title="Don't have an account?"
                    linkTitle="Create it"
                    errorMessage={this.props.errorMessage}
                    redirect={() => navigation.navigate('Signup')}
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

const mapStateToProps = (state) => {
    return {
        errorMessage: state.sign.errorMessage
    };
};

export default connect(mapStateToProps, {
    signIn
})(SigninScreen);
