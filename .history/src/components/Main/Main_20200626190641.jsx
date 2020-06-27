import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import JordanNewsPage from "./JordanNewsPage/JordanNewsPage";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/jordan">
        <JordanNewsPage />
      </Route>
    </Switch>
  </main>
);

export default Main;
