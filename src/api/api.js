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
    },
    getStatus (UserID) {
        return instance.get(`profile/status/` + UserID)
            .then(response => response.data)
    },
    upDateStatus (status){
        return instance.put(`profile/status`, {status: status})
             .then(response => response.data)
             
    },
    //ниже нюансы работы с фото и api
    putPhoto (photoFile){
        let formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('profile/photo',formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    // {  userId: 17796,
    //     lookingForAJob: true,
    // lookingForAJobDescription: 'YYYEEESS',
    // fullName: 'VLAD88813',
    //     contacts: 
    //     {  github:status_Git,
    //         vk: 'null',
    //         facebook: 'null',
    //         instagram: 'null',
    //         twitter: 'null',
    //         website: 'null',
    //         youtube: 'null',
    //         mainLink: 'null'
    // }
    // } 

    upDateGitHub (status_Git, profile){
    debugger
        return instance.put(`profile`,  {
            
            userId: profile.userId,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription, 
            fullName: profile.fullName,
            contacts: {
                github: status_Git,
                vk: profile.contacts.vk,
                facebook: profile.contacts.facebook,
                instagram: profile.contacts.instagram,
                twitter: profile.contacts.twitter,
                website: profile.contacts.website,
                youtube: profile.contacts.youtube,
                mainLink: profile.contacts.mainLink,
            },
           
    
    } )
            .then(response => console.log(response.data.resultCode))
    }
}
         

export const authAPI = {
 login(email, password, rememberMe = true){
     return instance.post(`auth/login`,{ email, password, rememberMe })
 },
 logout(){
    return instance.delete(`auth/login`)
}
}