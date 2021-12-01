import axios from "axios";
const API = axios.create({
    baseURL:"http://localhost:3000/",
    withCredentials: true,
})

//Auth related

export const signIn = async (data) => await API.post('/auth/login',data)
export const signUp = async (data) => await API.post('/auth/register',data)
export const logout = async (data) => await API.get('/auth/logout')

//Product related 

export const displayProduct = async(data) => await API.get('/products/',data)
export const addProduct = async(data) => await API.post('/products/',data)
export const removeProduct = async(data) => await API.delete('/products/',data)
export const updateProduct = async(data) => await API.put('/products/',data)