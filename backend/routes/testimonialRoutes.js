import express from "express";
const router = express.Router();
import {
  makeTestimonialInactive,
  createTestimonial,
  getTestimonials,
} from "../controllers/testimonialController.js";

router.route("/:id").patch(makeTestimonialInactive);
router.route("/").get(getTestimonials).post(createTestimonial);

// router.put(updateTestimonial);

export default router;
