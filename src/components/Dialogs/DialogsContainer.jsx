import { connect } from 'react-redux';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
  return {
      MessagesPage:state.MessagesPage
  }
};

let mapDispatchToProps = (dispatch) =>{
  return {
    updateNewMessageBodyCreatorKEY: (body) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessageCreator: () => {
      dispatch(sendMessageCreator())
    }
  }
};

let DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);


export default DialogsContainer;
