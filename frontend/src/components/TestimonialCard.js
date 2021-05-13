import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { makeInactive } from "../actions/testimonialActions";
import "../index.css";

const TestimonialCard = (props) => {
  const dispatch = useDispatch();
  const handleUpdateAsDelete = (id) => {
    // dispatch(makeInactive(id));
  };
  return (
    <>
      <div key={props.id} className="col-lg-4">
        <div className="single-testimonial mt-30 mb-30 text-center">
          <div className="testimonial-image">
            <img src={props.img} alt="Author" />
          </div>
          <div className="testimonial-content">
            <p className="text">{props.text}</p>
            <h6 className="author-name">{props.authorName}</h6>
            <span className="sub-title">
              {props.post}, {props.company}
            </span>
          </div>
          <Button variant="danger" onClick={handleUpdateAsDelete(props.id)}>
            <i className="fas fa-trash"></i>{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
