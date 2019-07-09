import React, { Component } from "react";
// import { withRouter, Switch, Route } from "react-router-dom";
import "../../css/App.css";
import Hero from "./Hero";
// import Nav from "./Components/Home/Nav";
import BestSellersSection from "./BestSellers-Section";
import BestSellersSlider from "./BestSellersSlider";
import BlogsSection from "./Blogs-Section";
import BlogItemLg from "./BlogItemLg";
import TestimonialsSection from "./Testimonials-Section";
import TestimonialsSlider from "./TestimonialsSlider";
// import FooterSection from "./Components/Home/Footer-Section";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Hero />

        <BestSellersSection />
        <BestSellersSlider />

        <BlogsSection />
        <BlogItemLg />

        <TestimonialsSection />
        <TestimonialsSlider />
      </div>
    );
  }
}

export default HomePage;
