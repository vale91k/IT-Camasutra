import { connect } from 'react-redux';

import Navbar from './Navbar'

const NavbarContainer = (props) => {
  const mapStateToProps = (state) => {
    return {
      dialogs: getDialogs(state),
      messages: getMessages(state),
      newMessageText: getnewMessageText(state)
    };
  };
  
  export default connect(mapStateToProps, {  })(Navbar);
