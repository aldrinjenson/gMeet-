import React from "react";
import LandingPage from "./components/LandingPage";
import { Switch, Route } from "react-router-dom";
import MeetingRoom from "./components/MeetingRoom";
import "./App.css";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/meeting/:id" component={MeetingRoom} />
      </Switch>
    </div>
  );
};

export default App;
