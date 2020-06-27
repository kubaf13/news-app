import React from "react";
import CategoryDropdown from "./CategoryDropdown";
import "./NewsFiltersBar.css";
import { Input, Placeholder } from "semantic-ui-react";

const placeholder = () => (
  <div>
    <p>Search...</p>
    <i class="fas fa-search"></i>
  </div>
);

const NewsFiltersBar = (props) => (
  <div className="NewsFiltersBar">
    <div className="category">
      <CategoryDropdown onCategoryChange={props.onCategoryChange} />
    </div>
    <div className="search">
      <Input
        placeholder = placeholder
        onChange={(e) =>
          e.target.value.length > 2
            ? props.onSearchQueryChange(e.target.value)
            : props.onSearchQueryChange(null)
        }
      />
    </div>
  </div>
);

export default NewsFiltersBar;
