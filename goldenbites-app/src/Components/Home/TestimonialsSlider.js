import React, { Component } from 'react';
import './testimonialsSlider.css';
import Slider from 'react-slick';

// var cards = [
//   {
//     image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg',
//     title: 'Burgundy Flemming',
//     subtitle: 'Advertising'
//   },
//   {
//     image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg',
//     title: 'Nigel Nigel',
//     subtitle: 'Sound & Vision'
//   },
//   {
//     image: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg',
//     title: 'Caspian Bellevedere',
//     subtitle: 'Accounting'
//   }
// ];

class TestimonialsSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };

    return (
      <Slider className='testimonials__list' {...settings}>
        <div className='testimonials__container'>
          <div className='testimonials__card'>
            <div className='testimonials__content'>
              {/* This morning my husband picked up the cake you made for our
              daughter. When he came home the 1st thing he said to me was “It’s
              phenomenal!”. Which is a bit out of his character. When I saw it I
              was amazed! The cake was beautiful! Our daughter LOVED it. She had
              given us a few ideas of the cake she wanted but we told her she
              had to wait to see what we got her at her party. The guests
              actually gasped when they saw it. They thought it was gorgeous.
              But not only did it look wonderful it tasted great too. */}
              We wanted to tell you what a wonderful cake you made for a special
              day for our daughter.
              <br />
              Thank you so much!
            </div>
            <div className='testimonials__line' />
            <div className='testimonials__name'>Angela &#38; Doug</div>
          </div>
        </div>
        <div className='testimonials__container'>
          <div className='testimonials__card'>
            <div className='testimonials__content'>
              Just wanted to give you yet again another HUGE THANK YOU for being
              so creative and making wonderful treats for all these years! The
              Diva cupcakes were a HUGE hit – not to mention YUMMY!!!! I truly
              do tell all my friends about you and your wonderful
              services!!Thank you – will be placing 2 more orders VERY soon!!!
            </div>
            <div className='testimonials__line' />
            <div className='testimonials__name'>Melanie</div>
          </div>
        </div>
        <div className='testimonials__container'>
          <div className='testimonials__card'>
            <div className='testimonials__content'>
              The cake and cupcakes were a huge success;
              <br />
              Not one cupcake left behind.
              <br />I loved the frosting.
              <br />
              Thank you for the wonderful work you do.
            </div>
            <div className='testimonials__line' />
            <div className='testimonials__name'>Mary-Jo</div>
          </div>
        </div>
        <div className='testimonials__container'>
          <div className='testimonials__card'>
            <div className='testimonials__content'>
              Just wanted to thank you for making
              <br />
              an amazing cake for my daughters birthday.
              <br />
              It looked and tasted perfect, our guests loved the cake.
              <br />
              We’ll be visiting you soon for another order.
            </div>
            <div className='testimonials__line' />
            <div className='testimonials__name'>Samantha</div>
          </div>
        </div>
        <div className='testimonials__container'>
          <div className='testimonials__card'>
            <div className='testimonials__content'>
              Two years in a row for my wife's b-day we have ordered the
              incredible cupcakes made from 'Golden Bites’!
            </div>
            <div className='testimonials__line' />
            <div className='testimonials__name'>Smith</div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default TestimonialsSlider;
