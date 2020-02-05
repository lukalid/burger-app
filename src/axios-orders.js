import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-22c75.firebaseio.com/'
});

export default instance;
