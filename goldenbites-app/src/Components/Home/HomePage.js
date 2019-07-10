import React, { Component } from 'react';
// import { withRouter, Switch, Route } from "react-router-dom";
import '../../css/App.css';
import Hero from './Hero';
// import Nav from "./Components/Home/Nav";
import BestSellersSection from './BestSellers-Section';
import BestSellersSlider from './BestSellersSlider';
import BlogsSection from './Blogs-Section';
import BlogItemLg from './BlogItemLg';
import BlogAllArticlesButton from './BlogAllArticlesButton';
import TestimonialsSection from './Testimonials-Section';
import TestimonialsSlider from './TestimonialsSlider';
import OrderPopup from './OrderPopup';
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
        <BlogAllArticlesButton />

        <TestimonialsSection />
        <TestimonialsSlider />

        <OrderPopup />
      </div>
    );
  }
}

export default HomePage;
