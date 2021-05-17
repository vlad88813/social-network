const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
  }

const dialogsReducer = (state = initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody; 
        state.newMessageBody = '';
        state.messages.push({id: 6, Message: body})
            return state;
        default: 
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) =>
({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;