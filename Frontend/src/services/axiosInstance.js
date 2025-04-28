import axios from 'axios'

const axiosInstance = axios.create({
    // baseURL: 'https://cloth-backend-pwni.vercel.app/api',
    baseURL: 'http://localhost:3000/api',
   

    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

export default axiosInstance;