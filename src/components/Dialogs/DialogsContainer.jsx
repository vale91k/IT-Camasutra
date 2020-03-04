import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

import { connect } from "react-redux";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";



let mapStateToProps = (state) => {   
  return {
state: state.dialogsPage
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
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
