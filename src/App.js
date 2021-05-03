import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./views/shop";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
