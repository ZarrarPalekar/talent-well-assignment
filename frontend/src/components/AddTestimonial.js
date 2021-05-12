import React, { useState } from "react";
import { Form } from "react-bootstrap";

const AddTestimonial = ({ onSubmit }) => {
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="photo">
        <Form.Label>Photo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Paste your photo URL here"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="post">
        <Form.Label>Post</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="company">
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your company"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          placeholder="Enter your testimonial description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></Form.Control>
      </Form.Group>
    </Form>
  );
};

export default AddTestimonial;
