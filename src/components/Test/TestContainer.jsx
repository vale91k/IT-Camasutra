import React from "react";
import Test from './Test'
import {connect} from 'react-redux'
import {followedAC, isLoadingAC} from '../../redux/test-reducer'
class TestContainer extends React.Component {
  debugger
  render() {
    return (
      <div >
        <Test 
        followedAC={this.props.followedAC}
        isFollowed={this.props.isFollowed}
        isLoading={this.props.isLoading}
        isLoadingAC={this.props.isLoadingAC}
        test={this.props.test}
        />
      </div>
    )
  }
  
  
};
const MapStatetoProps = state => {
  return {
    buttons: state.testPage.buttons,
    isFollowed: state.testPage.isFollowed,
    isLoading: state.testPage.isLoading,
    test:state.testPage.test
  }
}
export default connect(MapStatetoProps, {followedAC, isLoadingAC})(TestContainer);
