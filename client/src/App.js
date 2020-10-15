import React from "react";
import LandingPage from "./components/LandingPage";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default App;
