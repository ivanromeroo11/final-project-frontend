import axios from 'axios';
import { login } from './auth';
import { info } from './user';
import { productos } from './productos';




const client = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

const auth = {
    login: login(client),
};

const user = {
    info: info(client),
};

const produc = {
    productos: productos(client),
};



export { auth, user, produc };