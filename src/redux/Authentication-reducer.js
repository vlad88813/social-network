import { authAPI, userAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState =  {
    id: null,
    email:null,
    login:null,
    isAuth:false
    
  };

const AuthenticationReducer = (state = initialState, action) => {

    switch (action.type) {
        case  SET_USER_DATA:{

            return {
                ...state, 
                ...action.data,
                isAuth: true
            }
        }
        default: 
            return state;

    }
}


export const setUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, data:{id, email, login, isAuth}});


export const AuthenticationThunkCreator = () => {
    return (dispatch) => {
        userAPI.getHeaderAuth()
         .then(data => {
           
           if (data.resultCode === 0){
             let {id, email, login} = data.data;
               dispatch(setUserData(id, email, login, true));
              }
           });
    }
}


export const LoginAPI = (email,password, rememberMe) => (dispatch) => {
    
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(AuthenticationThunkCreator())
            }
        })   
}


export const Logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0){
                dispatch(setUserData(null, null, null, false))
            }
        })   
}








export default AuthenticationReducer;