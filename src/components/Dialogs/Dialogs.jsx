import React from 'react';
import DialogItem from './DialogItem/Dialogs_item';
import Dialogs_style from'./Dialogs.module.css';
import Message from './Message/Message';

    <DialogItem />;
    <Message />;

    const Dialogs = (props) => {
    

    let state = props.MessagesPage;
  
    let dialogsElements = state.dialogsData
    .map(d => <DialogItem name= {d.name} key= {d.id} id= {d.id} img={d.img}/>)


    let messagesElements = state.messages
    .map(m => <Message message={m.Message} key= {m.id}/>)
    
    let newMessageBody = props.MessagesPage.newMessageBody;
    


    let onSendMessageClick = () => {
      if (newMessageBody!=''){
      props.sendMessageCreator();
    } 
    } 
    let onNewMessageChange = (e) => {
  
      //функция для работы FLUX архитектуры. она позволит изменить '' 
      let body = e.target.value; //стучим в собитие Е а там таргет и оттуда достаем значение
      props.updateNewMessageBodyCreator(body);
    }


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
