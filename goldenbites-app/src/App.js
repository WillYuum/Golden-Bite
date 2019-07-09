import React from 'react';
import './css/App.css';
import Hero from './Components/Home/Hero';
import Nav from './Components/Home/Nav';
import BestSellersSection from './Components/Home/BestSellers-Section';
import BestSellersSlider from './Components/Home/BestSellersSlider';
import BlogsSection from './Components/Home/Blogs-Section';
import BlogItemLg from './Components/Home/BlogItemLg';
import TestimonialsSection from './Components/Home/Testimonials-Section';
import TestimonialsSlider from './Components/Home/TestimonialsSlider';
import FooterSection from './Components/Home/Footer-Section';

function App() {
  return (
    <div>
      <Nav />
      <Hero />

      <BestSellersSection />
      <BestSellersSlider />

      <BlogsSection />
      <BlogItemLg />

      <TestimonialsSection />
      <TestimonialsSlider />
      <FooterSection />
    </div>
  );
}

export default App;
