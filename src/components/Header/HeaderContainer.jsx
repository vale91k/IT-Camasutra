import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { loginThunk } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.loginThunk();
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  isFetching: state.auth.isFetching
});

export default connect(mapStateToProps, { loginThunk })(HeaderContainer);
