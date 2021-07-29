import React from 'react';

class ProfileStatus extends React.Component {
   
    //localState может быть только в классовой компоненте либо использовать хуки
    state = {
      editMode: false,
      status: this.props.status   
    }

    EditModeActiv = () => {
        this.setState({
            editMode:true
        })
    }

    EditModeFalseDeactiv = () => {
        this.setState({
            editMode:false
        })
        this.props.upDateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status) {
            this.setState({
                status:this.props.status
            })
        }
        
    }



  render() {
    return <div>
        {!this.state.editMode && 
             <div>
                <span onDoubleClick = {this.EditModeActiv} > Status- {this.props.status || 'NO STATUS'}</span>
             </div>
        }
        {this.state.editMode &&
            <div>
                 <input onChange={this.onStatusChange} autoFocus= {true} onBlur= {this.EditModeFalseDeactiv} value={this.state.status}/>
             </div>
        }
    </div>
  }
}

export default ProfileStatus;