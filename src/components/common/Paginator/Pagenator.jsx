import React from "react";
import styles from "./Paginator.module.css";
import userPhoto from "../../../assets/images/user.jpg";
import { NavLink } from "react-router-dom";

let Paginator = props => {
 
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
  
    <div>
    {pages.map(i => {
      if (i < 6 || i > pages.length - 4) {
        return (
          <span
            onClick={() => props.onPageChanged(i)}
            className={props.currentPage === i && styles.selectedPage}
          >
            {i}
          </span>
        );
      }
    })}
  </div>
  )
      }

    

export default Paginator;
