import React from "react";
import Test from "./Test";
import { connect } from "react-redux";
import { followedAC, isLoadingAC } from "../../redux/test-reducer";

class TestContainer extends React.Component {
  
  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}
const MapStatetoProps = state => {
  return {
    
    
  };
};
export default connect(MapStatetoProps, { })(
  TestContainer
);
