import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    ProfilePage: {
      postData: [
        { id: 1, message: 'hi, how are you?', likeCount: 12 },
        { id: 2, message: 'It s my first post', likeCount: 11 },
      ],
      newPostText: ""
    },
    MessagesPage: {
      dialogsData: [
        { id: 'vlad', name: 'Vlad', img: <img src='https://tec-sense.com/wp-content/uploads/2019/09/avtar-man.png' /> },
        { id: 'andrey', name: 'Andrey' },
        { id: 'sveta', name: 'Sveta' },
        { id: 'sava', name: 'Sava' }
      ],
      messages: [
        { id: 1, Message: 'hi' },
        { id: 2, Message: 'how is your' },
        { id: 3, Message: 'Yo' },
        { id: 4, Message: 'Yo' },
        { id: 5, Message: 'Yoo' }
      ],
      newMessageBody: ''
      // img:'https://tec-sense.com/wp-content/uploads/2019/09/avtar-man.png',         
    },
    sidebar: {}
  },
  getState() { //его создали чтобы обращаться к стору не на прямую
    return this._state;
    //getState даёт нам весь стор. 
  },
  subscribe(observer) {
    this._callSubscriber = observer;
    //под obserser приходит реальная функция rerenderEntireTree. И мы ЛЕВУЮ render подменяем реальной
    // тут все упирается в области видимости.Для текущего файла есть рендер только на этой страничке
    // и поэтмоу нам нужна функция заглушка. для передачи реальной функции рендер без использования импорта и пропсов 
    // а вызываем функцию subscribe с index.js а туда она через импорт store
  },

  _callSubscriber() {
    // я фукнция заглушка
    //паттерн observer
  },
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.ProfilePage.newPostText,
      likeCount: 0
    };
    this._state.ProfilePage.postData.push(newPost);
    this._state.ProfilePage.newPostText = '';
    this._callSubscriber(this._state)
  },

  _UpdateNewPostText(newText) {
    this._state.ProfilePage.newPostText = newText;
    this._callSubscriber(this._state)
  },


  dispatch(action) {
    this._state.MessagesPage = dialogsReducer(this._state.MessagesPage, action);
    this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);

  }
};

export default store;

window.store = store;