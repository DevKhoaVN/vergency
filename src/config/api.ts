import { defineConfig } from 'vite';
import axios from "axios"
import { error } from "console"

const API_BASE_URL= import.meta.env.VITE_API_URL || 'http://localhost:3000/api/v1'

// tao axios instance
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true, // gui cookie
    timeout: 10000
})

// request interceptor
api.interceptors.request.use(
    (config) => {
           return config
    },
    (error) =>{
        return Promise.reject(error)
    }
)

let isRefreshing = true
let failedQueue = []

const processQueue =  (error, token = null) => {
    failedQueue.forEach(prom => {
        if(error){
            prom.reject(error)
        } else{
            prom.resolve(token)
        }
    })
    failedQueue = []
}

api.interceptors.response.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config
        // loi 401 hoac chua retry
        if(error.response?.status === 401 && !originalRequest._retry) {
            
            //neu dang refresh , dua vao queue
            if(isRefreshing){
                return new Promise((res, rej) => {
                    failedQueue.push({res, rej})
                })
                .then(() =>  api(originalRequest))
                .catch((error)=> Promise.reject(error))
            }
        

        originalRequest._retry = true
        isRefreshing = true

        try {
            
            // get refresh
             await api('/auth/refresh')
              
             // handle eror
             processQueue(null, true)

             //retry
             return api(originalRequest)

        } catch (refreshError) {
            processQueue(refreshError, null)

            window.location.href = '/login'
            return Promise.reject(refreshError);
        } finally {
               isRefreshing = false;
        }
    }
     return Promise.reject(error);
  }

)

export default api