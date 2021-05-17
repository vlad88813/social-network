import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/Dialogs_item';
import Dialogs_style from'./Dialogs.module.css';
import Message from './Message/Message';

    <DialogItem />;
    <Message />;

    const Dialogs = (props) => {
  
    let dialogsElements = props.store.getState().MessagesPage.dialogsData
    .map(d => <DialogItem name= {d.name} id= {d.id} img={d.img}/>)


    let messagesElements = props.store.getState().MessagesPage.messages
    .map(m => <Message message={m.Message}/>)
    
    let newMessageBody = props.store.getState().MessagesPage.newMessageBody;


    let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator()) 
    } 
    let onNewMessageChange = (e) => {
      //функция для работы FLUX архитектуры. она позволит изменить '' 
      let body = e.target.value; //стучим в собитие Е а там таргет и оттуда достаем значение
      props.store.dispatch(updateNewMessageBodyCreator(body)) 
    }

    // let RefMessage = React.createRef();
    // let AddMessage =() => {
    //   let text = RefMessage.current.value;
    //   alert(text)
    // }

    return (
     <div className={Dialogs_style.dialogs}>
        <div className={Dialogs_style.dialogsItems}>
           {dialogsElements}
        </div>
        <div className={Dialogs_style.messages}>
            <div>{messagesElements}</div>
            <div>
              <div><textarea 
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder='Enter your message'></textarea></div>
              <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    </div>
    )
  }

export default Dialogs;
