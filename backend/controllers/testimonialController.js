import asyncHandler from "express-async-handler";
import Testimonial from "../models/testimonialModel.js";

// @desc   Fetch All Testimonials
// @route  GET /api/testimonials
// @access Public
const getTestimonials = asyncHandler(async (req, res) => {
  const testimonials = await Testimonial.find({ active: 1 });
  // console.log("testimonials: ", testimonials);
  res.json(testimonials);
});

// @desc   Create a single Testimonial
// @route  POST /api/testimonials
// @access Public
const createTestimonial = asyncHandler(async (req, res) => {
  const { photo, name, post, company, description } = req.body;

  // console.log(photo, name, post, company, description);
  const testimonial = new Testimonial({
    photo,
    name,
    post,
    company,
    description,
  });

  const createdTestimonial = await testimonial.save();
  res.status(201).json(createdTestimonial);
});

// @desc   Update a single Testimonial to inactive
// @route  Patch /api/testimonials/:id
// @access Public
const makeTestimonialInactive = asyncHandler(async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);
  if (testimonial) {
    testimonial.active = 0;
    const updatedTestimonial = await testimonial.save();
    res.json(updatedTestimonial);
  } else {
    res.status(404);
    throw new Error("Testimonial not found");
  }
});

export { getTestimonials, createTestimonial, makeTestimonialInactive };
