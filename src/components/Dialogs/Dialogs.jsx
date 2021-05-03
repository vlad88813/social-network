import React from 'react';
import Dialogs_style from'./Dialogs.module.css'
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className = {Dialogs_style.dialog + ' ' + Dialogs_style.active}>
        <NavLink to= {path}>{props.name}</NavLink>
    </div> 
    
}

const Message = (props) => {
    return <div className={Dialogs_style.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    
    let dialogsData = [
        {id:'vlad', name:'Vlad'},
        {id:'andrey', name: 'Andrey'},
        {id:'sveta', name:'Sveta' },
        {id:'sava', name: 'Sava' }
    ]

    let messageData = [
        {id: 1, Message:'hi'},
        {id: 2, Message: 'how is your'},
        {id: 3, Message:'Yo' },
        {id: 4, Message: 'Yo' }
    ]


 return (
     <div className={Dialogs_style.dialogs}>
        <div className={Dialogs_style.dialogsItems}>
            <DialogItem name= {dialogsData[0].name} id= {dialogsData[0].id}/>
            <DialogItem name= {dialogsData[1].name} id= {dialogsData[1].id}/>
            <DialogItem name= {dialogsData[2].name} id= {dialogsData[2].id}/>
            <DialogItem name= {dialogsData[3].name} id= {dialogsData[3].id}/>
        </div>
        <div className={Dialogs_style.messages}>
            <Message message={messageData[0].Message}/>
            <Message message={messageData[1].Message}/>
            <Message message={messageData[2].Message}/>
            <Message message={messageData[3].Message}/>
        </div>
    </div>
 )
}

export default Dialogs;
