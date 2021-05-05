

let state = {
    ProfilePage: {    
        postData:[
        {id: 1, message: 'hi, how are you?', likeCount: 12},
        {id: 2, message: 'It s my first post', likeCount: 11},
      ]},
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
}

export default state; 