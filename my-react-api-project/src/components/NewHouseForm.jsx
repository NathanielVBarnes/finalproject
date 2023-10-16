import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function NewHouseForm({ addHouse }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "") {
      addHouse({ name, rooms: [] });
      setName("");
    } else {
      alert("Please provide a valid house name.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <label htmlFor="newHouseName">New House Name:</label>
        <Form.Control
          type="text"
          id="newHouseName"
          placeholder="House Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Form.Group>
      <Button type="submit" className="btn-sm">
        Add House
      </Button>
    </Form>
  );
}
