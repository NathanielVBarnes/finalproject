import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function UpdateRoomForm({ oldName, oldArea, changeRoom }) {
  const [name, setName] = useState(oldName);
  const [area, setArea] = useState(oldArea);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name !== "" && area > 0) {
      changeRoom(name, area);
    } else {
      alert("Please provide valid room details.");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <label htmlFor="roomName">Room Name:</label>
        <Form.Control
          type="text"
          id="roomName"
          placeholder="Room Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </Form.Group>
      <Form.Group>
        <label htmlFor="roomArea">Area (Sq Ft.):</label>
        <Form.Control
          type="number"
          id="roomArea"
          placeholder="Area"
          onChange={(e) => setArea(Number(e.target.value))}
          value={area}
        />
      </Form.Group>
      <Button type="submit" className="btn-sm">
        Update Room
      </Button>
    </Form>
  );
}
