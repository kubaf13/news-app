import React from "react";
import { Pagination } from "semantic-ui-react";

const NewsPagination = ({ onPageChange, pagesNumber, currentPage }) => {
  const changePage = (e, { activePage }) => {
    onPageChange(activePage);
  };
  return (
    <Pagination
      defaultActivePage={1}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
      totalPages={3}
    />
  );
};

export default NewsPagination;
