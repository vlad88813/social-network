import React, { useEffect, useState } from 'react';

   
    
const ProfileGitHubHooks = (props) => {
    // console.log("я тут 1")
    let [status_Git, setStatus] = useState(props.contacts.github);
    let [editMode, setEditMode] = useState(false);
    console.log(status_Git)
    // state = {
    //   editMode: false,
    //   status: this.props.status   
    // }

    useEffect(() => { 
    
            setStatus(props.contacts.github)
        }, [props.contacts.github]);
    
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
        props.upDateGitHub(status_Git, props.profile)
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
                <span onDoubleClick = {activeEditMode} > StatusGIT- {status_Git} </span>
             </div>
        }
        {editMode &&
            <div>
                 <input onChange={onStatusChange} autoFocus= {true} onBlur= {deactiveEditMode} value={status_Git}/>
             </div>
        }
       
    </div>)
    
    }

export default ProfileGitHubHooks;