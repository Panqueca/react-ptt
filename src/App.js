import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ROUTES } from "./routes";

const renderRoute = ({ path = "", View = () => {}, exact = false }, index) => {
  return <Route exact={exact} path={path} component={View} key={index} />;
};

const App = props => {
  return <Router>{ROUTES.map(renderRoute)}</Router>;
};

export default App;
