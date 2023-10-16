import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { housesApi } from "./HousesApi.jsx";

export default function EditPage() {
  const { id } = useParams();
  const [houseName, setHouseName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHouse = async () => {
      const house = await housesApi.getHouseById(id);
      if (house) setHouseName(house.name);
    };

    fetchHouse();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedHouse = {
      _id: id,
      name: houseName,
    };
    await housesApi.put(updatedHouse);
    navigate("/houses");
  };

  return (
    <Container>
      <h1>Edit House</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>House Name</Form.Label>
          <Form.Control type="text" value={houseName} onChange={(e) => setHouseName(e.target.value)} required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
      <Link to="/houses" className="btn btn-secondary mt-3">
        Back to House List
      </Link>
    </Container>
  );
}
