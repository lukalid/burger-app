import axios from 'axios';

const instance = axios.create({
    baseUrl: 'https://burger-app-22c75.firebaseio.com/'
});

export default instance;
