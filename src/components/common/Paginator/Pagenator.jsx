import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";


let Paginator = ({
  itemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 10,
}) => {
  let pagesCount = Math.ceil(itemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let portionCount = Math.ceil(itemsCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  
  let leftPortionPageNumber =(portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && <button onClick={()=> setPortionNumber(portionNumber -1)}>PREV</button>}
      {pages
        .filter((i) => i >= leftPortionPageNumber && i <= rightPortionPageNumber)
        .map((i) => {
          return (
            <span
              onClick={() => onPageChanged(i)}
              className={currentPage === i && styles.selectedPage}
              className = {cn({
                [styles.selectedPage]: currentPage === i
            }, styles.pageNumber) }
                         key={i}
            >
              {i}
            </span>
          );
        })}
      {portionCount > portionNumber && <button onClick={()=> setPortionNumber(portionNumber +1)}>NEXT</button>}
    </div>
  );
};

export default Paginator;
