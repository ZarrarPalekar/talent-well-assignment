import React from "react";
import { Route } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"; // if you want to call an action its useDispatch, and to bring in state useSelector
import { createTestimonial } from "../actions/testimonialActions";

const Header = () => {
  const dispatch = useDispatch();

  const createTestimonialHandler = () => {
    dispatch(createTestimonial());
  };

  return (
    <header className="header-area">
      <div className="navgition navgition-transparent">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Nav className="navbar navbar-expand-lg">
                <a className="navbar-brand" href="#">
                  <img src="assets/images/logo.svg" alt="Logo" />
                </a>

                <Button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarOne"
                  aria-controls="navbarOne"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                  <span className="toggler-icon"></span>
                </Button>

                <div
                  className="collapse navbar-collapse sub-menu-bar"
                  id="navbarOne"
                >
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item active">
                      <a className="page-scroll" href="#home">
                        HOME
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#service">
                        SERVICES
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#pricing">
                        PRICING
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="page-scroll" href="#contact">
                        CONTACT
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="navbar-social d-none d-sm-flex align-items-center">
                  <span>FOLLOW US</span>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-instagram-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Nav>
            </div>
          </div>
        </div>
      </div>

      <div
        id="home"
        className="header-hero bg_cover"
        style={{ backgroundImage: "url(assets/images/header-bg.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="header-content text-center">
                <h3 className="header-title">
                  Handcrafted Landing Page for Startups and SaaS Businesses
                </h3>
                <p className="text">
                  A simple, customizable, and, beautiful SaaS business focused
                  landing page to make your project closer to launch!
                </p>
                <ul className="header-btn">
                  <li>
                    <a className="main-btn btn-one" href="#">
                      GET IN TOUCH
                    </a>
                  </li>
                  <li>
                    <a
                      className="main-btn btn-two video-popup"
                      href="https://www.youtube.com/watch?v=r44RKWyfcFw"
                    >
                      WATCH THE VIDEO <i className="lni-play"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-shape">
          <img src="assets/images/header-shape.svg" alt="shape" />
        </div>
      </div>
    </header>
  );
};

export default Header;
