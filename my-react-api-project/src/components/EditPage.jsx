import React from "react";
import { Link, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function EditPage() {
  const { id } = useParams();

  // Fetch the house data by ID and implement update logic

  return (
    <Container>
      <h1>Edit House</h1>
      <Form>
        {/* Form inputs and submit button */}
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
      <Link to="/" className="btn btn-secondary mt-3">
        Back to Home
      </Link>
    </Container>
  );
}
