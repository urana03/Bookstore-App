import axios from "axios";

export const loginApi = (loginData) => {
    let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/login',loginData);
    return response
}

export const registerApi = (registerData) => {
     let response = axios.post('https://bookstore.incubation.bridgelabz.com/bookstore_user/registration',registerData)
     return response
}