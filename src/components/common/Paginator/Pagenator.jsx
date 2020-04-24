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
  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  console.log(portionNumber);
  let leftPortionPageNumber =(portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
      <button onClick={()=> {
       
        setPortionNumber(portionNumber -1)}
        }>
        PREV
        </button>
      )}
      {/* //first page*/}
      {portionNumber > 1 && (
        <span
        onClick={() => {
          onPageChanged(1);
           setPortionNumber(1)
          }}
        className={currentPage === 1 && styles.selectedPage}
        className = {cn({
          [styles.selectedPage]: currentPage === 1
      }, styles.pageNumber) }
                   key={1}
      >
        {1}
      </span>
      )}
  
      {pages
        .filter((page) =>
         page >= leftPortionPageNumber && page <= rightPortionPageNumber
         ).map((i) => 
          (
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
          )
        )}
       {/* last page */}
      {portionNumber < portionCount && (
        <span
        onClick={() => {
          onPageChanged(pagesCount); 
           setPortionNumber(Math.ceil(pagesCount / portionSize))
          }}
        className={currentPage === pagesCount && styles.selectedPage}
        className = {cn({
          [styles.selectedPage]: currentPage === pagesCount
      }, styles.pageNumber) }
                   key={pagesCount}
      >
        {pagesCount}
      </span>
      )}
      {/* last page */}
      {portionCount > portionNumber && <button onClick={()=> setPortionNumber(portionNumber +1)}>NEXT</button>}
    </div>
  );
};

export default Paginator;
