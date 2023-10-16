import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { housesApi } from "./HousesApi.jsx";

export default function CreatePage() {
  const [houseName, setHouseName] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newHouse = {
      name: houseName,
      rooms: [],
    };
    await housesApi.post(newHouse);
    navigate("/houses");
  };

  return (
    <Container>
      <h1>Create a New House</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>House Name</Form.Label>
          <Form.Control type="text" value={houseName} onChange={(e) => setHouseName(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
      <Link to="/houses" className="btn btn-secondary mt-3">
        Back to House List
      </Link>
    </Container>
  );
}
