import React from "react";
import "./NewsList.css";
import NewsCard from "./NewsCard";
import NewsPagination from "./NewsPagination";

const NewsList = props => (
  <>
    {props.articles.map(item => (
      <NewsCard
        urlToImage={item.urlToImage}
        title={item.title}
        description={item.description}
        url={item.url}
        author={item.source.name}
        key={item.title}
        publishedAt={item.publishedAt}
      />
    ))}
    <div className="NewsPagination">
      <NewsPagination
        onPageChange={props.onPageChange}
        pagesNumber={props.pagesNumber}
        currentPage={props.currentPage}
      />
    </div>
  </>
);

export default NewsList;
