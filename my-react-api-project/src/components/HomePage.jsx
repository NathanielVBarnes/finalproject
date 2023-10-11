import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./HomePage"; // Assuming HomePage is in the same directory
import CreatePage from "./CreatePage"; // Assuming CreatePage is in the same directory
import EditPage from "./EditPage"; // Assuming EditPage is in the same directory

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/edit/:id" component={EditPage} />
      </Switch>
    </Router>
  );
}

export default App;
