import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import App from "./pages/Home/App";
import RegisterMedia from "./pages/register/media";

const Page404 = () => <div>Page not found.</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/register/media" component={RegisterMedia} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
