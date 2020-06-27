import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import JordanNewsPage from "./PlayStationNewsPage/JordanNewsPage";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/P">
        <JordanNewsPage />
      </Route>
    </Switch>
  </main>
);

export default Main;
