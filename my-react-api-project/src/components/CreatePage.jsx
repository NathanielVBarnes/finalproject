import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function CreatePage() {
  // Implement your create house logic here

  return (
    <Container>
      <h1>Create a New House</h1>
      <Form>
        {/* Form inputs and submit button */}
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
      <Link to="/" className="btn btn-secondary mt-3">
        Back to Home
      </Link>
    </Container>
  );
}

