import React from 'react';
import Dialogs_style from'./Dialogs.module.css'


const Dialogs = (props) => {
 return (
     <div className={Dialogs_style.dialogs}>
        <div className={Dialogs_style.dialogsItems}>
            <div className={Dialogs_style.dialog + ' ' + Dialogs_style.active}>
                Vlad
            </div>
            <div className={Dialogs_style.dialog}>
                Andrey
            </div>
            <div className={Dialogs_style.dialog}>
                Sveta
            </div>
            <div className={Dialogs_style.dialog}>
                Sava
            </div>
        </div>
        <div className={Dialogs_style.messages}>
            <div className={Dialogs_style.messages_2}>hi</div>
            <div className={Dialogs_style.messages_2}>how is your</div>
            <div className={Dialogs_style.messages_2}>Yo</div>
        </div>
    </div>
 )
}

export default Dialogs;
