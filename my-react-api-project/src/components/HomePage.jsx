import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <h1>Welcome to the House Management App!</h1>
      <p>
        <Link to="/houses">View Houses</Link>
      </p>
      <p>
        <Link to="/create">Create a New House</Link>
      </p>
      <p>
        <Link to="/edit">Edit an Existing House</Link>
      </p>
    </div>
  );
}
