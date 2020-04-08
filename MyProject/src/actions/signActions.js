import AsyncStorage from '@react-native-community/async-storage';

import todoApi from '../api/todoApi';
import { navigate } from '../navigationRef';

export const signIn = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await todoApi.post('/signin', { email, password });

            await AsyncStorage.setItem('token', response.data.data.token);
            console.log('HERE');
            dispatch({ type: 'SIGN_IN', payload: response.data.data.token });
            navigate('Todo');
        } catch (err) {
            console.log('ERROR', err.response.data);
            dispatch({ type: 'SIGN_ERROR', payload: err.response.data.message || 'Server error!' });
        }
    }
};

export const signUp = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await todoApi.post('/signup', { email, password });

            await AsyncStorage.setItem('token', response.data.data.token);
            dispatch({ type: 'SIGN_IN', payload: response.data.data.token });
            navigate('Home');
        } catch (err) {
            dispatch({ type: 'SIGN_ERROR', payload: err.response.data.message || 'Server error!' });
        }
    }
};
