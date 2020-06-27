import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";

const countryOptions = [
  { key: "us", value: "us", flag: "us", text: "United States" },
  { key: "ar", value: "ar", flag: "ar", text: "Argentina" },
  { key: "au", value: "au", flag: "au", text: "Australia" },
  { key: "at", value: "at", flag: "at", text: "Austria" },
  { key: "be", value: "be", flag: "be", text: "Belgium" },
  { key: "br", value: "br", flag: "br", text: "Brazil" },
  { key: "bg", value: "bg", flag: "bg", text: "Bulgaria" },
  { key: "ca", value: "ca", flag: "ca", text: "Canada" },
  { key: "cn", value: "cn", flag: "cn", text: "China" },
  { key: "co", value: "co", flag: "co", text: "Colombia" },
  { key: "cu", value: "cu", flag: "cu", text: "Cuba" },
  { key: "cz", value: "cz", flag: "cz", text: "Czech Republic" },
  { key: "eg", value: "eg", flag: "eg", text: "Egypt" },
  { key: "fr", value: "fr", flag: "fr", text: "France" },
  { key: "de", value: "de", flag: "de", text: "Germany" },
  { key: "gr", value: "gr", flag: "gr", text: "Greece" },
  { key: "hk", value: "hk", flag: "hk", text: "Hong Kong" },
  { key: "hu", value: "hu", flag: "hu", text: "Hungary" },
  { key: "in", value: "in", flag: "in", text: "India" },
  { key: "id", value: "id", flag: "id", text: "Indonesia" },
  { key: "ie", value: "ie", flag: "ie", text: "Ireland" },
  { key: "il", value: "il", flag: "il", text: "Israel" },
  { key: "it", value: "it", flag: "it", text: "Italy" },
  { key: "jp", value: "jp", flag: "jp", text: "Japan" },
  { key: "lv", value: "lv", flag: "lv", text: "Latvia" },
  { key: "lt", value: "lt", flag: "lt", text: "Lithuania" },
  { key: "my", value: "my", flag: "my", text: "Malaysia" },
  { key: "mx", value: "mx", flag: "mx", text: "Mexico" },
  { key: "ma", value: "ma", flag: "ma", text: "Morocco" },
  { key: "nl", value: "nl", flag: "nl", text: "Netherlands" },
  { key: "nz", value: "nz", flag: "nz", text: "New Zealand" },
  { key: "ng", value: "ng", flag: "ng", text: "Nigeria" },
  { key: "no", value: "no", flag: "no", text: "Norway" },
  { key: "ph", value: "ph", flag: "ph", text: "Philippines" },
  { key: "pl", value: "pl", flag: "pl", text: "Poland" },
  { key: "pt", value: "pt", flag: "pt", text: "Portugal" },
  { key: "ro", value: "ro", flag: "ro", text: "Romania" },
  { key: "ru", value: "ru", flag: "ru", text: "Russia" },
  { key: "sa", value: "sa", flag: "sa", text: "Saudi Arabia" },
  { key: "rs", value: "rs", flag: "rs", text: "Serbia" },
  { key: "sg", value: "sg", flag: "sg", text: "Singapore" },
  { key: "sk", value: "sk", flag: "sk", text: "Slovakia" },
  { key: "si", value: "si", flag: "si", text: "Slovenia" },
  { key: "za", value: "za", flag: "za", text: "South Africa" },
  { key: "kr", value: "kr", flag: "kr", text: "South Korea" },
  { key: "se", value: "se", flag: "se", text: "Sweden" },
  { key: "ch", value: "ch", flag: "ch", text: "Switzerland" },
  { key: "tw", value: "tw", flag: "tw", text: "Taiwan" },
  { key: "th", value: "th", flag: "th", text: "Thailand" },
  { key: "tr", value: "tr", flag: "tr", text: "Turkey" },
  { key: "ua", value: "ua", flag: "ua", text: "Ukraine" },
  { key: "ae", value: "ae", flag: "ae", text: "United Arab Emirates" },
  { key: "gb", value: "gb", flag: "gb", text: "United Kingdom" },
  { key: "ve", value: "ve", flag: "ve", text: "Venezuela" }
];

class LanguageDropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "us"
    };
  }

  onValueChange = (event, data) => {
    const value = data.value;
    this.setState({ value });
    this.props.onLanguageChange(value);
  };

  render() {
    return (
      <Dropdown
        placeholder="Select Country"
        search
        selection
        onChange={this.onValueChange}
        options={countryOptions}
      />
    );
  }
}

export default LanguageDropdown;
