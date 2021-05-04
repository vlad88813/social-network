import React from 'react';
import Dialogs_style from'./../Dialogs.module.css'
import {NavLink} from "react-router-dom"

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id; //переменная с адресом
    
    return <div className = {Dialogs_style.dialog + ' ' + Dialogs_style.active}>
        <NavLink to= {path}>{props.name}</NavLink>
    </div> 
    
}

export default DialogItem;