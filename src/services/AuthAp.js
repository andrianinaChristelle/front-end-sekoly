import axios from "axios";
import jwtDecode from "jwt-decode";
import { getItem, addItem, removeItem } from "./LocalStorage";

export function hasAuthenticated() {
    const token = getItem('Token');
    const result = token ? tokenIsValid(token) : false;

    if (false === result) {
        removeItem('Token');
    }
    return result;
}
export function login(credentials) {
    return axios
        .post('http://127.0.0.1:8000/api/login', credentials)
        .then(response => response.data.token)
        .then(token => {
            addItem('Token', token);
            return true;
        });
}

export function logout() {
    removeItem('Token');
}

function tokenIsValid(token) {
    const { exp } = jwtDecode(token);
    if (exp * 1000 > new Date().getTime()) {
        return true;
    }

    return false;
}