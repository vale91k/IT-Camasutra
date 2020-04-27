import React from "react";
import * as mainPic from "./../../common/Preloader/src/LoadingCat.gif";
import * as altPic from "./../../common/Preloader/src/LoadingCat_alt.gif";
import styles from './Preloader.module.css'

let Preloader = () => {
 
  return (
    <div className={styles.preloaderPic}>
      <img src={mainPic} alt={altPic} />
    </div>
  );
};

export default Preloader;
