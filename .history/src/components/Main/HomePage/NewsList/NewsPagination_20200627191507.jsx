import React from "react";
import { Pagination } from "semantic-ui-react";

const NewsPagination = ({ onPageChange, pagesNumber, currentPage }) => {
  const changePage = (e, { activePage }) => {
    onPageChange(activePage);
  };
  return (
    <Pagination
      defaultActivePage={1}
      activePage={currentPage}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      totalPages={pagesNumber > 6 ? 6 : pagesNumber}
      onPageChange={changePage}
    />
  );
};
{
  /* <Pagination

  firstItem={null}
  lastItem={null}
  pointing
  secondary
  totalPages={3}
/> */
}

export default NewsPagination;
