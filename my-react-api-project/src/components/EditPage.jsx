import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpdateHouseForm from "./UpdateHouseForm"; // You may need to adjust the import path
import { HousesApi } from "./HousesApi"; // You may need to adjust the import path

export default function EditPage() {
  const { id } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    // Fetch the house data by its ID when the component mounts
    const fetchHouseData = async () => {
      try {
        const fetchedHouse = await housesApi.getHouseById(id);
        setHouse(fetchedHouse);
      } catch (error) {
        console.error("Error fetching house data:", error);
      }
    };

    fetchHouseData();
  }, [id]);

  const handleUpdateHouse = async (updatedHouse) => {
    // Handle the update of the house here
    try {
      await housesApi.updateHouse(updatedHouse);
      // Optionally, you can navigate to another page after successful update
      // history.push("/"); // You may need to import 'useHistory' from 'react-router-dom'
    } catch (error) {
      console.error("Error updating house:", error);
    }
  };

  if (!house) {
    return <div>Loading...</div>; // You can replace this with a loading spinner or message
  }

  return (
    <div>
      <h1>Edit House: {house.name}</h1>
      <UpdateHouseForm house={house} onUpdate={handleUpdateHouse} />
      {/* You can add more content or components as needed */}
    </div>
  );
}
