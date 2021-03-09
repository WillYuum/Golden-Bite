import React, { Component } from "react";
// import { withRouter, Switch, Route } from "react-router-dom";
import "../../css/App.css";
import Hero from "./Hero";
// import Nav from "./Components/Home/Nav";
import BestSellersSection from "./BestSellers-Section";
import BestSellersSlider from "./BestSellersSlider";
import BlogsSection from "./Blogs-Section";
import BlogItemLg from "./BlogItemLg";
import BlogAllArticlesButton from "./BlogAllArticlesButton";
import TestimonialsSection from "./Testimonials-Section";
import TestimonialsSlider from "./TestimonialsSlider";
import OrderPopup from "./OrderPopup";
// import FooterSection from "./Components/Home/Footer-Section";

import OrderPopUp from "./OrderPopup";

class HomePage extends Component {
  state = {
    data_Products: [], 
    slide_id:null,
    image:"",
    name:'',
    price:"",
    category:"",
    description:"",
  };

  Backend_Url = process.env.REACT_APP_PORT;

  async componentDidMount() {
    try {
      const response = await fetch(this.Backend_Url + "products/read");
      const products = await response.json();
      await this.setState({ data_Products: products.DATA });
      await console.log(this.state.data_Products);
    } catch (err) {
      console.log(err);
    }
  }
  handleSlideSelect =(id,image, name, price ,category, description)=>{
    this.setState({slide_id:id,image:image, name:name,price:price,category:category, description:description })
  }
  render() {
    return (
      <div>
        <Hero />

        <BestSellersSection  />

        <BestSellersSlider handleSlideSelect={this.handleSlideSelect} data_Products={this.state.data_Products}/>
        
        <OrderPopUp id = {this.state.slide_id} img = {this.state.image} popUpImg={this.state.image} productName={this.state.name} productPrice={this.state.price} productCat={this.state.category} productDiscription = {this.state.description} />

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
