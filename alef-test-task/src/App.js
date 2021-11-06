import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainPage } from "./Components/MainPage/MainPage";
import { UserInfo } from "./Components/UserInfo/UserInfo";

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/userinfo" component={UserInfo} />
   </Switch>
    </BrowserRouter>
  );
};
