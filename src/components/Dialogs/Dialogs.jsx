import React from 'react';
import DialogItem from './DialogItem/Dialogs_item';
import Dialogs_style from'./Dialogs.module.css';
import Message from './Message/Message';

    <DialogItem />;
    <Message />;

    const Dialogs = (props) => {
    
    let dialogsElements = props.dialogsData
    .map(d => <DialogItem name= {d.name} id= {d.id}/>)


    let messagesElements = props.messages
    .map(m => <Message message={m.Message}/>)

    return (
     <div className={Dialogs_style.dialogs}>
        <div className={Dialogs_style.dialogsItems}>
           {dialogsElements}
        </div>
        <div className={Dialogs_style.messages}>
            {messagesElements}
        </div>
    </div>
    )
  }

export default Dialogs;
