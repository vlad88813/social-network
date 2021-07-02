import React from 'react';

class ProfileStatus extends React.Component {
    state = {
      editMode: false
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
    }


  render() {
    return <div>
        {!this.state.editMode && 
             <div>
                <span onDoubleClick = {this.EditModeActiv} > {this.props.status}</span>
             </div>
        }
        {this.state.editMode &&
            <div>
                 <input autoFocus= {true} onBlur= {this.EditModeFalseDeactiv}  value={this.props.status}/>
             </div>
        }
    </div>
  }
}

export default ProfileStatus;