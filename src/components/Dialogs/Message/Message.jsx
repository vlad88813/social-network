import React from 'react';
import Dialogs_style from'./../Dialogs.module.css'


const Message = (props) => {
    return <div className={Dialogs_style.dialog}>{props.message}</div>
}

export default Message;