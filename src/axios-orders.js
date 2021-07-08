import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-d175d-default-rtdb.firebaseio.com/'
});

export default instance;