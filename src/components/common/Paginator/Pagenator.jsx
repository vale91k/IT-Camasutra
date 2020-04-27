import React from "react";
import styles from "./Paginator.module.css";
import cn from "classnames";


const Paginator = ({
  itemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize = 3,
  isFetching
}) => {

  // Count all pages and push them into variable 'pages'
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }


  return (
    <div className={styles.paginator}>

      {/*  To first page button */}
      {currentPage > 3 && (
        <button
          className={cn(
            styles.paginationButton,
            styles.sidePaginationButton
          )}
          onClick={() => {
            onPageChanged(1);
          }}
          disabled={isFetching}
        >
          &lt;&lt;
        </button>
      )}

      {/* To previous page button */}
      {currentPage > 1 && (
        <button
          className={styles.paginationButton}
          onClick={() => {
            onPageChanged(currentPage - 1);
          }}
          disabled={isFetching}
        >
          &lt;
        </button>
      )}

      {/* Filtered main pages */}
      {pages.filter(page => (
        page >= currentPage - 2 && page <= currentPage + 2
      )).map((i) => (
        <span
          onClick={() => onPageChanged(i)}
          className={cn(
            { [styles.selectedPage]: currentPage === i },
            styles.paginationPage
          )}
        >
          {i}
        </span>
      ))}

      {/* To next page button */}
      {currentPage < pagesCount && (
        <button
          className={cn(
            styles.paginationButton,
            styles.rightPaginatonButton
          )}
          onClick={() => {
            onPageChanged(currentPage + 1)
          }}
          disabled={isFetching}
        >
          &gt;
        </button>
      )}

      {/* To last page button */}
      {currentPage < pagesCount - 3 && (
        <button
          className={cn(
            styles.paginationButton,
            styles.sidePaginationButton
          )}
          onClick={() => {
            onPageChanged(pagesCount);
          }}
          disabled={isFetching}
        >
          &gt;&gt;
        </button>
      )}
    </div>
  );
};

export default Paginator;
