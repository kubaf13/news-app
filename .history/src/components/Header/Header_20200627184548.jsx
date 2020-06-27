import React, { Component } from "react";
import { Button, Menu, Segment, Dropdown, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import LanguageDropdown from "./LanguageDropdown";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      device: "mobile",
    };
  }
  reportWindowSize = () => {
    if (window.innerWidth < 768) {
      this.setState({ device: "mobile" });
    } else {
      this.setState({ device: "desktop" });
    }
  };
  componentDidMount() {
    window.addEventListener("resize", this.reportWindowSize);
    if (window.innerWidth < 768) {
      this.setState({ device: "mobile" });
    } else {
      this.setState({ device: "desktop" });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.reportWindowSize);
  }
  render() {
    const { device } = this.state;
    return (
      <header>
        <Segment inverted color="blue" clearing>
          {device === "mobile" ? (
            <Dropdown item icon="angle double down">
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/" exact>
                  Home
                </Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/playstation">
                  PlayStation News
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <>
              <Button animated color="blue">
                <Button.Content visible>Home</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                  <Menu.Item as={NavLink} to="/" exact />
                </Button.Content>
              </Button>
              <Button animated color="blue">
                <Button.Content visible>PlayStation News</Button.Content>
                <Button.Content hidden>
                  <Icon name="game" />
                  <Menu.Item as={NavLink} to="/playstation" />
                </Button.Content>
              </Button>
            </>
          )}

          <LanguageDropdown onLanguageChange={this.props.onLanguageChange} />
        </Segment>
      </header>
    );
  }
}
