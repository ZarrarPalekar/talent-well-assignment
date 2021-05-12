import React from "react";
import CallToAction from "../components/CallToAction";
import ClientLogo from "../components/ClientLogo";
import Contact from "../components/Contact";
import Pricing from "../components/Pricing";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";

const HomeScreen = () => {
  return (
    <div>
      <Service />
      <Pricing />
      <CallToAction />
      <Testimonial />
      <ClientLogo />
      <Contact />
    </div>
  );
};

export default HomeScreen;
