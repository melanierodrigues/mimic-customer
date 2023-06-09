/* React */
import React from 'react';
import { ReactComponent as Arrow } from '../../assets/icons/arrow-down.svg'

/* usePagination */
import { DOTS, usePagination } from './usePagination';

/* Style */
import "./Pagination.scss";

const Pagination = props => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className="pagination-container">
      <li
        className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={onPrevious}
      >
        <Arrow className="arrow-pagination left" />
      </li>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots" key={index} >&#8230;</li>;
        }

        return (
          <li
            className={`pagination-item ${pageNumber === currentPage ? "selected" : ""}`}
            onClick={() => onPageChange(pageNumber)}
            key={index}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`pagination-item ${currentPage === lastPage ? "disabled" : ""}`}
        onClick={onNext}
      >
        <Arrow className="arrow-pagination right"/>
      </li>
    </ul>
  );
};

export default Pagination;
