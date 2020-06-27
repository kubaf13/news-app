import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import "./SortingDropdown.css";

const options = [
  { key: 1, text: "Relevancy", value: "relevancy" },
  { key: 2, text: "Popularity", value: "popularity" },
  { key: 3, text: "Time of publication", value: "publishedAt" }
];

const SortingDropdown = ({ onSortingChange }) => (
  <div className="sorting">
    <Menu compact>
      <Dropdown
        placeholder="Sort by"
        options={options}
        selection
        onChange={(event, data) => onSortingChange(data.value)}
      />
    </Menu>
  </div>
);

export default SortingDropdown;
