import React, { Component } from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import "./css/App.css";
import Hero from "./Components/Home/Hero";
import Nav from "./Components/Home/Nav";
import BestSellersSection from "./Components/Home/BestSellers-Section";
import BestSellersSlider from "./Components/Home/BestSellersSlider";
import BlogsSection from "./Components/Home/Blogs-Section";
import BlogItemLg from "./Components/Home/BlogItemLg";
import TestimonialsSection from "./Components/Home/Testimonials-Section";
import TestimonialsSlider from "./Components/Home/TestimonialsSlider";
import FooterSection from "./Components/Home/Footer-Section";

import HomePage from "./Components/Home/HomePage";

import ProductsPage from "./Components/Products/ProductPage";

import BlogPage from "./Components/Blogs/BlogPage";
import MainBlogClick from "./Components/Blogs/MainBlogClick";
import BlogItemSmdetails from "./Components/BlogItemSmdetails";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />

        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/Products" render={() => <ProductsPage />} />
          <Route path="/blogs" render={() => <BlogPage />} />

          {/* <Route path='/about' component={Aboutme} /> */}
          {/* <Route path='/BlogItemSmdetails' component={BlogItemSmdetails} />
          <Route path='/MainBlogClick' component={MainBlogClick} /> */}
        </Switch>

        {/* <Hero />

        <BestSellersSection />
        <BestSellersSlider />
        <BlogsSection />
        <BlogItemLg />

        <TestimonialsSection />
        <TestimonialsSlider />*/}
        <FooterSection />
      </div>
    );
  }
}

export default withRouter(App);
