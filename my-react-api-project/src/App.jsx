import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HousesList from './components/HousesList';

// Import other components, like CreatePage and EditPage, as needed.

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HousesList} /> {/* Use HousesList as the component for the HomePage */}
        <Route path="/create" component={CreatePage} />
        <Route path="/edit/:id" component={EditPage} />
      </Switch>
    </Router>
  );
}
