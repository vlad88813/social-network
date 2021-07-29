import React, { useEffect, useState } from 'react';

   
    //localState может быть только в классовой компоненте либо использовать хуки
const ProfileStatusHooks = (props) => {
    
    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    // state = {
    //   editMode: false,
    //   status: this.props.status   
    // }

    useEffect(() => {
            setStatus(props.status)
        }, [props.status]);
    

    // EditModeActiv = () => {
    //     this.setState({
    //         editMode:true
    //     })
    // }


    const activeEditMode = () => {
        setEditMode(true)
    }


    const deactiveEditMode = () => {
        setEditMode(false)
        props.upDateStatus(status)
    }


    // EditModeFalseDeactiv = () => {
    //     this.setState({
    //         editMode:false
    //     })
    //     this.props.upDateStatus(this.state.status)
    // }


    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    
   
    return (<div>
        {!editMode  && 
             <div>
                <span onDoubleClick = {activeEditMode} > Status- {status || 'NO STATUS'}</span>
             </div>
        }
        {editMode &&
            <div>
                 <input onChange={onStatusChange} autoFocus= {true} onBlur= {deactiveEditMode} value={status}/>
             </div>
        }
       
    </div>)
    
    }


export default ProfileStatusHooks;