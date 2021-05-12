import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal } from "react-bootstrap";
import TestimonialCard from "./TestimonialCard";
import {
  createTestimonial,
  listTestimonials,
} from "../actions/testimonialActions";
import { TESTIMONIAL_CREATE_RESET } from "../constants/testimonialConstants";

const Testimonial = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleCloseModal();
    dispatch(createTestimonial({ photo, name, post, company, description }));
  };

  const testimonialCreate = useSelector((state) => state.testimonialCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    testimonial: createdTestimonial,
  } = testimonialCreate;

  const testimonialList = useSelector((state) => state.testimonialList);
  const { testimonials: allTestimonials } = testimonialList;

  const testimonialDelete = useSelector((state) => state.testimonialDelete);
  const { success: successDelete } = testimonialDelete;

  useEffect(() => {
    // dispatch({ type: TESTIMONIAL_CREATE_RESET });
    dispatch(listTestimonials());
  }, [dispatch, successCreate, successDelete]);

  return (
    <div>
      <section id="testimonial" className="testimonial-area">
        <div className="container">
          <Button
            title="Add Testimonial"
            className="mx-3 mb-2"
            onClick={handleShowModal}
          >
            <i data-toggle className="fas fa-plus"></i>
          </Button>

          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Your Testimonial</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="photo">
                  <Form.Label>Photo</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Paste your photo URL here"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="post">
                  <Form.Label>Post</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter your post"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="company">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    placeholder="Enter your company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    as="textarea"
                    placeholder="Enter your testimonial description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit" variant="primary" className="my-3">
                  Add the testimonial
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>

          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-10">
                <h4 className="title">Testimonial</h4>
                <p className="text">
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="row testimonial-active">
                {allTestimonials.length > 0 &&
                  allTestimonials.map((eachTestimonial) => (
                    <>
                      <TestimonialCard
                        id={eachTestimonial._id}
                        img={eachTestimonial.photo}
                        text={eachTestimonial.description}
                        authorName={eachTestimonial.name}
                        post={eachTestimonial.post}
                        company={eachTestimonial.company}
                      />
                    </>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
