import React from "react";
import Test from "./Test";
import { connect } from "react-redux";
import styles from './TestContainer.module.css'
import userStyles from './TestUserBar.module.css'
class TestContainer extends React.Component {
  
  render() {
    return (
      <div className={styles.testContainer}>
        {/* <Test /> */}
        <TestUserBar />
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

const TestUserBar = () => {
  const username = 'Valenacheg'
  const status = 'Hi everyone iam glad to see you!'
  const noStatus = ''
  return (
<div className={userStyles.barArea}>
            <div className={userStyles.fullName}>
              {username}
            </div>
            {status && (
           <div className={userStyles.status}>
              {status}
            </div>
           )}
    </div>
  )
}