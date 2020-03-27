
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import React from 'react'
import { connect } from "react-redux";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";



let mapStateToProps = (state) => {   
  return {
state: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
      dispatch(updateNewMessageTextActionCreator(""));
    },
    onMessageChange: (body) => {
      let action = updateNewMessageTextActionCreator(body);
      dispatch(action);
    }
  }
}
let AuthRedirectComponent = withAuthRedirect(Dialogs)

export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)


