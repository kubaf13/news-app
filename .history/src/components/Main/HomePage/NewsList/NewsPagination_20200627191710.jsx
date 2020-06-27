import React from "react";
import { Pagination } from "semantic-ui-react";

const NewsPagination = ({ onPageChange, pagesNumber, currentPage }) => {
  const changePage = (e, { activePage }) => {
    onPageChange(activePage);
  };
  return (
    <Pagination
      defaultActivePage={0}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
      totalPages={pagesNumber > 6 ? 6 : pagesNumber}
      onPageChange={changePage}
    />
  );
};

export default NewsPagination;
