import React from "react";
import { Route, Switch } from "react-router";
import Home from "../pages/Home";
import Creation from "../pages/Creation";
import Detail from "../pages/Detail";
import NoMatch from "../pages/NoMatch";

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/create" component={Creation} />
    <Route path="/detail/:itemId" component={Detail} />
    <Route component={NoMatch} />
  </Switch>
);

export default routes;
