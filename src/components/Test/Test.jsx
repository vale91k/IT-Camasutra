import React from "react";
import styles from "./Test.module.css";

class Test extends React.Component {

  state = {
    count: 0
  };
  
  incButton = () => {
    if (this.state.count < 5) {
      this.setState({
        count: this.state.count + 1
      });
    }
  };
  resetOnClick = () => {
    this.setState({ count: 0 });
  };

  render() {
    const isFive = this.state.count === 5;

    return (
      <div
        className={styles.container + " " + (isFive ? styles.red : styles.blue)}
      >
        <span className={styles.count}>{this.state.count}</span>
        <div className={styles.buttons}>
          <div className={styles.button1}>
            <button onClick={this.incButton}>Inc</button>
          </div>
          <div className={styles.button2}>
            {" "}
            <button onClick={this.resetOnClick}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
