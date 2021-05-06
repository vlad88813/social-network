import React from 'react';
import DialogItem from './DialogItem/Dialogs_item';
import Dialogs_style from'./Dialogs.module.css';
import Message from './Message/Message';

    <DialogItem />;
    <Message />;

    const Dialogs = (props) => {
    
    let dialogsElements = props.state.dialogsData
    .map(d => <DialogItem name= {d.name} id= {d.id} img={d.img}/>)


    let messagesElements = props.state.messages
    .map(m => <Message message={m.Message}/>)

    let RefMessage = React.createRef();
    let AddMessage =() => {
      let text = RefMessage.current.value;
      alert(text)
    }

    return (
     <div className={Dialogs_style.dialogs}>
        <div className={Dialogs_style.dialogsItems}>
           {dialogsElements}
        </div>
        <div className={Dialogs_style.messages}>
            {messagesElements}
            <textarea ref={ RefMessage }></textarea>
            <button onClick={ AddMessage }>Add Message</button>
        </div>
    </div>
    )
  }

export default Dialogs;
