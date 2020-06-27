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
        <Segment inverted>
          <Menu inverted secondary>
            {device === "mobile" ? (
              <Dropdown item icon="align justify">
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/" exact>
                    Home
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/jordan">
                    PlayStation News
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
              <>
                <Button animated>
                  <Button.Content visible>Home</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                    <Menu.Item as={NavLink} to="/" name="home" exact />
                  </Button.Content>
                </Button>
                <Button animated>
                  <Button.Content visible>PlayStation News</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                    <Menu.Item
                      as={NavLink}
                      to="/jordan"
                      name="PlayStation News"
                    />
                  </Button.Content>
                </Button>
              </>
            )}

            <Menu.Menu position="right">
              <LanguageDropdown
                onLanguageChange={this.props.onLanguageChange}
              />
            </Menu.Menu>
          </Menu>
        </Segment>
      </header>
    );
  }
}
