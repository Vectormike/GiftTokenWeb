import React, { Component } from "react";
import Privacy from "../frontend/privacy";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../frontend/App";
import Backend from "../backend/App"; // Could be used to implement a backend down the line
const AppRouter = () => (
  <Router>
    <div>
      <Route path="/" exact component={App} />
      <Route path="/privacy" exact component={Privacy} />
    </div>
  </Router>
);

export default AppRouter;
