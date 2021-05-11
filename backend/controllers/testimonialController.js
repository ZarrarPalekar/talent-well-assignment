import asyncHandler from "express-async-handler";
import Testimonial from "../models/testimonialModel.js";

// @desc   Fetch All Testimonials
// @route  GET /api/testimonials
// @access Public
const getTestimonials = asyncHandler(async (req, res) => {});

// @desc   Create a single Testimonial
// @route  POST /api/testimonials
// @access Public
const createTestimonial = asyncHandler(async (req, res) => {
  const testimonial = new Testimonial({
    name: "Sample name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });

  const createdTestimonial = await testimonial.save();

  res.status(201).json(createdTestimonial);
});

// @desc   Update a single Testimonial
// @route  PUT /api/testimonials/:id
// @access Public
const updateTestimonial = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    brand,
    category,
    countInStock,
  } = req.body;

  const testimonial = await Testimonial.findById(req.params.id);
  if (testimonial) {
    testimonial.name = name;
    testimonial.price = price;
    testimonial.description = description;
    testimonial.image = image;
    testimonial.brand = brand;
    testimonial.category = category;
    testimonial.countInStock = countInStock;

    const updatedTestimonial = await testimonial.save();

    res.json(updatedTestimonial);
  } else {
    res.status(404);
    throw new Error("Testimonial not found");
  }
});

export { getTestimonials, createTestimonial, updateTestimonial };
