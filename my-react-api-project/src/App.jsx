import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import HomePage from "./components/HomePage"; // Adjust the import path
import CreatePage from "./components/CreatePage"; // Adjust the import path
import EditPage from "./components/EditPage"; // Adjust the import path

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
