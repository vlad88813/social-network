const ADD_POST = 'ADD-POST';
const UPDATA_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState =  {
    postData: [
      { id: 1, message: 'hi, how are you?', likeCount: 12 },
      { id: 2, message: 'It s my first post', likeCount: 11 },
    ],
    newPostText: ""
  };

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id:5,
                message: state.newPostText,
                likeCount:0
              };
              state.postData.push(newPost);
              state.newPostText ='';
              return state;
        case UPDATA_NEW_POST_TEXT:
            state.newPostText= action.newText;
            return state;
        default: 
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const upDateNewPostActionCreator = (text) =>
({ type: UPDATA_NEW_POST_TEXT, newText: text });

export default profileReducer;
//профильпейдж удалил, т.к функция сразу даст что надо