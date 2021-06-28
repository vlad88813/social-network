import { userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATA_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState =  {
    postData: [
      { id: 1, message: 'hi, how are you?', likeCount: 12 },
      { id: 2, message: 'It s my first post', likeCount: 11 },
    ],
    newPostText: '',
    profile: null
  };

const profileReducer = (state = initialState, action) => {
  
  let stateCopy = {...state};
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id:5,
                message: state.newPostText,
                likeCount:0
              };
              
              stateCopy.postData = [...state.postData];
              stateCopy.postData.push(newPost);
              stateCopy.newPostText ='';
              return stateCopy;
            }
        case UPDATA_NEW_POST_TEXT: {
            
            stateCopy.newPostText= action.newText;
            return stateCopy;
         }
        case SET_USER_PROFILE: {
          return {...stateCopy, profile: action.profile};
         }
        default: 
            return state;

    }
}

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) =>
({ type: UPDATA_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export default profileReducer;



export const ProfileThunkCreator = (UserID) => { 

    return (dispatch) => {
      
    userAPI.getProfileContainer(UserID)
        .then(data => {
      dispatch(setUserProfile(data)) 
    });
  }
}
//профильпейдж удалил, т.к функция сразу даст что надо