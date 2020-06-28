import React from "react";
import Category from "./Category";
import "./NewsFiltersBar.css";
import { Input } from "semantic-ui-react";

const NewsFiltersBar = (onCategoryChange) => (
  <div className="NewsFiltersBar">
    <div className="category">
      <Category onCategoryChange={onCategoryChange} />
    </div>
    <div className="search">
      <Input
        icon="search"
        placeholder="Search..."
        onChange={(e) =>
          e.target.value.length > 2
            ? onCategoryChange.onSearchQueryChange(e.target.value)
            : onCategoryChange.onSearchQueryChange(null)
        }
      />
    </div>
  </div>
);

export default NewsFiltersBar;
