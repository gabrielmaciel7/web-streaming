import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./index.css";
import App from "./pages/Home/App";
import RegisterCategory from "./pages/Register/Category";
import RegisterMedia from "./pages/Register/Media";

const Page404 = () => <div>Page not found.</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/register/media" component={RegisterMedia} />
      <Route path="/register/category" component={RegisterCategory} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);
