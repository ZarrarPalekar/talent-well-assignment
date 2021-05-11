import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Service from "./components/Service";
import Pricing from "./components/Pricing";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonial";
import ClientLogo from "./components/ClientLogo";

import ProductScreen from "./screens/ProductScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Service />
      <Pricing />
      <CallToAction />
      <Testimonial />
      <ClientLogo />
      <Contact />
      <main className="py-3">
        <Container>
          <Route path="/product/:id" component={ProductScreen} />
          <Route
            path="/admin/productlist"
            component={ProductListScreen}
            exact
          />
          <Route
            path="/admin/productlist/:pageNumber"
            component={ProductListScreen}
            exact
          />
          <Route path="/admin/product/:id/edit" component={ProductEditScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
