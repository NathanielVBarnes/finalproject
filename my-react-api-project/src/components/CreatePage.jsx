import React from "react";
import NewHouseForm from "./NewHouseForm"; 

export default function CreatePage() {
  // You can customize this function to handle form submissions, API calls, etc.
  const handleCreateHouse = (houseData) => {
    // Handle the creation of a new house here
    console.log("Creating a new house with data:", houseData);
    // You can make API calls to create a new house using houseData
  };

  return (
    <div>
      <h1>Create a New House</h1>
      <NewHouseForm onSubmit={handleCreateHouse} />
      {/* You can add more content or components as needed */}
    </div>
  );
}
