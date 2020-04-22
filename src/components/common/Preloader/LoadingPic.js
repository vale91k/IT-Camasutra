import React from "react";
import * as mainPic from "./../../common/Preloader/src/LoadingCat2.gif";
import * as altPic from "./../../common/Preloader/src/LoadingCat2_alt.gif";
import styles from "./LoadingPic.module.css";

let LoadingPic = (props) => {
    
  return (
    <div className={styles.loadingPic}>
      <img src={mainPic} alt={altPic} />
    </div>
  );
};

export default LoadingPic;
