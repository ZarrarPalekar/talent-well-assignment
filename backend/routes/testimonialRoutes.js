import express from "express";
const router = express.Router();
import {
  updateTestimonial,
  createTestimonial,
  getTestimonials,
} from "../controllers/testimonialController.js";

router.route("/").get(getTestimonials).post(createTestimonial);

router.put(updateTestimonial);

export default router;
