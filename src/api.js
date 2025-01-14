import axios  from "axios"

//export const BASE_URL = "http://127.0.0.1:8001"
export const BASE_URL = import.meta.env.VITE_BASE_URL || "http://127.0.0.1:8001"

const api = axios.create({
    baseURL : BASE_URL
})

export default api