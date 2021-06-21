import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f94599fe-5d86-4b39-bcbd-b1e836e7ab87"
    }
})


export const userAPI = {
    getUsers (currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
        },
    deleteUsers (id) {
        return instance.delete(`follow/${id}`)
            .then(response => response.data.resultCode)
    },
    postUsers (id) {
        return instance.post(`follow/${id}`)
            .then(response => response.data.resultCode)
    },
    getHeaderAuth () {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    getProfileContainer (UserID) {
        return instance.get(`profile/`+ UserID)
            .then(response => response.data)
    }
    }

