import axios from "axios";
import {
  TESTIMONIAL_LIST_REQUEST,
  TESTIMONIAL_LIST_SUCCESS,
  TESTIMONIAL_LIST_FAIL,
  TESTIMONIAL_DETAILS_REQUEST,
  TESTIMONIAL_DETAILS_SUCCESS,
  TESTIMONIAL_DETAILS_FAIL,
  TESTIMONIAL_DELETE_REQUEST,
  TESTIMONIAL_DELETE_SUCCESS,
  TESTIMONIAL_DELETE_FAIL,
  TESTIMONIAL_CREATE_REQUEST,
  TESTIMONIAL_CREATE_SUCCESS,
  TESTIMONIAL_CREATE_FAIL,
  TESTIMONIAL_UPDATE_REQUEST,
  TESTIMONIAL_UPDATE_SUCCESS,
  TESTIMONIAL_UPDATE_FAIL,
} from "../constants/testimonialConstants";

export const listTestimonials = () => async (dispatch) => {
  try {
    console.log("1".big);
    dispatch({ type: TESTIMONIAL_LIST_REQUEST });

    const { data } = await axios.get("/api/testimonials");
    console.log("data: ", data);

    dispatch({ type: TESTIMONIAL_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTestimonialDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TESTIMONIAL_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/testimonials/${id}`);

    dispatch({ type: TESTIMONIAL_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const makeInactive = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TESTIMONIAL_DELETE_REQUEST,
    });

    await axios.patch(`/api/testimonials/${id}`);

    dispatch({ type: TESTIMONIAL_DELETE_SUCCESS });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createTestimonial = (formBody) => async (dispatch) => {
  try {
    dispatch({
      type: TESTIMONIAL_CREATE_REQUEST,
    });

    const { data } = await axios.post(`/api/testimonials`, formBody);

    dispatch({ type: TESTIMONIAL_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TESTIMONIAL_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateTestimonial =
  (TESTIMONIAL) => async (dispatch, getState) => {
    try {
      dispatch({
        type: TESTIMONIAL_UPDATE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/testimonials/${TESTIMONIAL._id}`,
        TESTIMONIAL,
        config
      );

      dispatch({ type: TESTIMONIAL_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: TESTIMONIAL_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
