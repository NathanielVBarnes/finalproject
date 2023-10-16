import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function NewRoomForm({ addRoom }) {
  const [name, setName] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && area > 0) {
      addRoom({ name, area });
      setName("");
      setArea("");
    } else {
      alert("Please provide valid room details.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <label htmlFor="newRoomName">New Room Name:</label>
        <Form.Control
          type="text"
          id="newRoomName"
          placeholder="Room Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Form.Group>
      <Form.Group>
        <label htmlFor="newRoomArea">Area (Sq Ft.):</label>
        <Form.Control
          type="number"
          id="newRoomArea"
          placeholder="Area"
          onChange={(e) => setArea(Number(e.target.value))}
          value={area}
        />
      </Form.Group>
      <Button type="submit" className="btn-sm">
        Add Room
      </Button>
    </Form>
  );
}
