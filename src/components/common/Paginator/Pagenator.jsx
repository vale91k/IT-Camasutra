import React, { useState } from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";


const Paginator = ({
  itemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 3,
  selectedPage = 1
}) => {

  // Count All Pages and push them into variable 'pages'
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  // Count All Portions of Pages and set the first portion
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);


  //Two variables : prev and next portions of pages
  const prevPortionPage = (portionNumber - 1) * portionSize + 1;
  const nextPortionPage = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {/* //first page*/}
      {portionNumber > 1 && (
        <span 
        className={styles.paginationButton}
        onClick={() => {
            onPageChanged(1);
            setPortionNumber(1)
          }}
          
        >
        &lt;&lt;
        </span>
      )}
      {/* prev portion button */}
      {portionNumber > 1 && (
        <span 
        className={styles.paginationButton + ' ' + styles.leftPaginatonButton}
        onClick={() => {

        onPageChanged((portionNumber - 2) * portionSize + 1);
        setPortionNumber(portionNumber - 1)
        }
        }>
          &lt;
        </span>
      )}
      
      {/* main pages */}
      {
      pages
        .filter((page) =>
          page >= prevPortionPage && page <= nextPortionPage
        ).map((i) =>
          (
            <span
            className={styles.paginationButton}
              onClick={() => onPageChanged(i)}
              className={cn({
                [styles.selectedPage]: currentPage === i
              },  styles.paginationPage)}
              key={i * Math.ceil(Math.random()*100)}
            >
              {i}
            </span>
          )
        )}
     
      {/* Next Portion */}
      {portionCount > portionNumber && 
      <span
      className={styles.paginationButton + ' ' + styles.rightPaginatonButton}
      onClick={() => {
        onPageChanged(selectedPage + 1 * portionSize +1)
          setPortionNumber(portionNumber + 1)
          }}
          >
            &gt;
            </span>
            }
       {/* last page */}
       {portionNumber < portionCount && (
        <span
        className={styles.paginationButton}
          onClick={() => {
            onPageChanged(pagesCount);
            setPortionNumber(Math.ceil(pagesCount / portionSize))
          }}
         
        >
          &gt;&gt;
        </span>
      )}
    </div>
  );
};

export default Paginator;
