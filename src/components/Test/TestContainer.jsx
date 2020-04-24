import React from "react";
import Test from "./Test";
import { connect } from "react-redux";
import styles from './TestContainer.module.css'
class TestContainer extends React.Component {
  
  render() {
    return (
      <div className={styles.testContainer}>
        {/* <Test /> */}
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
