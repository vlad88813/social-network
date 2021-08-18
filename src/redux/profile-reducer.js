import { userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATA_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const SAVE_PHOTO = 'SAVE_PHOTO';

let initialState =  {
    postData: [
      { id: 1, message: 'hi, how are you?', likeCount: 12 },
      { id: 2, message: 'It s my first post', likeCount: 11 },
    ],
    newPostText: '',
    profile: null,
    status: ''
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

        case SET_STATUS: {
          return {...stateCopy, status: action.status}
        }
        case SAVE_PHOTO: {
          debugger
          return {...stateCopy, profile: {...state.profile, photos:action.file}};
        }
        default: 
            return state;

    }
}

export const addPost = () => ({ type: ADD_POST });

export const updateNewPostText = (text) =>
({ type: UPDATA_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export const setStatus = (status) => ({type:SET_STATUS, status})

export default profileReducer;

export const savePhotoSuccess = (file) => ({type:SAVE_PHOTO, file})


export const ProfileThunkCreator = (UserID) => { 

    return (dispatch) => {
      
    userAPI.getProfileContainer(UserID)
        .then(data => {
      dispatch(setUserProfile(data)) 
    });
  }
}


export const GetStatusThunkCreator = (UserID) => {
  return (dispatch) => {

    userAPI.getStatus(UserID)
        .then(data => {
          dispatch(setStatus(data))
        }) 
  }
}

export const UpDateStatusThunkCreator = (status) => {
  return (dispatch) => {

    userAPI.upDateStatus(status)
        .then(response => {
          if (response.data.resultCode === 0){
            dispatch(setStatus(status))
          }
        
        }) 
  }
}

//(если ведем разработку начиная с ui) 
//1.<input type={"file"} onChange={onMainPhotosSelected}/> собираем значение введенное с ui onChange в 
//2. onMainPhotosSelected, а эта функция достает конкретную картинку и передает в санку savePhoto
//3. savePhoto посылает картинку на сервер
//4. при успешной отправке приходит код 0, и мы диспатчим экшен креэйтор savePhotoSuccess и передаем ему картинку которая уже с сервера! (ui => сервер => ui)
//5. по type мы попадем в reducer
//6. type изменяет initialState  (profile: {...state.profile, photos:action.file}) 
//7. initialState попадает в combineReducer и дальше работает redux
//8.  а он уже  mapStateToProps перекидывает куски state кому надо
export const savePhoto = (file) =>  async (dispatch) => {
  let response = await userAPI.putPhoto(file);

  if (response.data.resultCode === 0){
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
  else {
    console.warn('Проблема с загрузкой фото на сервер!')
  }
}
  

