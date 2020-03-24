import React from "react";
import Test from './Test'
import {connect} from 'react-redux'
import {fetchingAC, isLoadingAC} from '../../redux/test-reducer'
class TestContainer extends React.Component {
  render() {
    return (
      <div >
        <Test 
        fetching={this.props.fetchingAC}
        isFetching={this.props.isFetching}
        isLoading={this.props.isLoading}
        isLoadingAC={this.props.isLoadingAC}
        />
      </div>
    )
  }
  
  
};
const MapStatetoProps = state => {
  return {
    isFetching: state.testPage.isFetching,
    isLoading: state.testPage.isLoading
  }
}
export default connect(MapStatetoProps, {fetchingAC, isLoadingAC})(TestContainer);
