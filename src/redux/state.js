let store = {
  _state:{
    ProfilePage: {    
        postData:[
        {id: 1, message: 'hi, how are you?', likeCount: 12},
        {id: 2, message: 'It s my first post', likeCount: 11},
      ],
        newPostText: ""},
    MessagesPage: {
        dialogsData: [
            {id:'vlad', name:'Vlad', img:<img src='https://tec-sense.com/wp-content/uploads/2019/09/avtar-man.png'/>},
            {id:'andrey', name: 'Andrey'},
            {id:'sveta', name:'Sveta' },
            {id:'sava', name: 'Sava' }
          ],
        messages:[
            {id: 1, Message:'hi'},
            {id: 2, Message: 'how is your'},
            {id: 3, Message:'Yo' },
            {id: 4, Message: 'Yo' },
            {id: 5, Message: 'Yoo' }
          ],
        // img:'https://tec-sense.com/wp-content/uploads/2019/09/avtar-man.png',         
    }
},
 getState(){
   return this._state;
 },
  _callSubscriber() {
  // я фукнция заглушка
},
addPost() {
  let newPost ={
    id:5,
    message:this._state.ProfilePage.newPostText,
    likeCount:0
  };
  this._state.ProfilePage.postData.push(newPost);
  this._state.ProfilePage.newPostText ='';
  this._callSubscriber(this._state)
},
UpdateNewPostText(newText) {
  this._state.ProfilePage.newPostText= newText;
  this._callSubscriber(this._state)
},
subscribe (observer){
  this._callSubscriber = observer;
  //под obserser приходит реальная функция рендер. И мы ЛЕВУЮ render подменяем реальной
  // тут все упирается в области видимости.Для текущего файла есть рендер только на этой страничке
  // и поэтмоу нам нужна функция заглушка. для передачи реальной функции рендер без использования импорта и пропсов 
 // а зывываем функцию субскрайбл с index.js а туда она через импорт
 },
}

export default store; 
window.store = store;