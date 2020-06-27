import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import PlayStationNewsPage from "./PlayStationNewsPage/PlayStationNewsPage";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/playstation">
        <PlayStationNewsPage />
      </Route>
    </Switch>
  </main>
);

export default Main;
