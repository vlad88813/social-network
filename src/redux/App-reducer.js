import { AuthenticationThunkCreator } from "./Authentication-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState =  {
    initializes: false,
  };

const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case  SET_INITIALIZED:{

            return {
                ...state, 
                initializes: true,
                
            }
        }
        default: 
            return state;

    }
}


export const initializes = () => ({type: SET_INITIALIZED});


export const initializesAppThunkCreator = () => {
    return (dispatch) => {
        let promise = dispatch(AuthenticationThunkCreator());
        Promise.all([promise])
            .then(()=>{
            dispatch(initializes())
        })
    }
}



export default AppReducer;