import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import "./CategoryDropdown.css";

const options = [
  { key: 1, text: "General", value: "general" },
  { key: 2, text: "Entertainment", value: "entertainment" },
  { key: 3, text: "Business", value: "business" },
  { key: 4, text: "Health", value: "health" },
  { key: 5, text: "Science", value: "science" },
  { key: 6, text: "Sports", value: "sports" },
  { key: 7, text: "Technology", value: "technology" }
];

const CategoryDropdown = ({ onCategoryChange }) => (
  <Menu compact>
    <Dropdown
      placeholder="Select category"
      options={options}
      selection
      onChange={(event, data) => onCategoryChange(data.value)}
      className="category-dropdown"
    />
  </Menu>
);

export default CategoryDropdown;
