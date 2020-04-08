import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const todoApi = axios.create({
    baseURL: 'http://4b4042c5.ngrok.io'
});

todoApi.interceptors.request.use(async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, (error) => {
    return Promise.reject(error);
});

export default todoApi;
