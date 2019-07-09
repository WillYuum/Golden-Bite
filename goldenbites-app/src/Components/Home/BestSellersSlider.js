import React, { Component } from 'react';
import './bestSellersSlider.css';
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

class BestSellersSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 3,
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
      <Slider className='bestSellers__list' {...settings}>
        <div className='bestSellers__container'>
          <div className='bestSellers__card'>
            <div className='card__side card__side--front'>
              <div className='card__picture--container'>
                <div className='card__picture card__picture--1' />
              </div>
              <div className='card__heading'>
                <span className='card__heading--span'>Best Seller</span>
              </div>
              <div className='card__details'>
                <ul>
                  <li>Cherry Pie</li>

                  <li>
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </li>
                  <li>Category: Pie</li>
                  <li>$ 16.00</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back'>
              <div className='card_side--back--container'>
                <div className='card_side--back--picture card_side--back--picture--1' />
              </div>
              <div className='card_side--back--button'>
                <a href='#'>ORDER NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div className='bestSellers__container'>
          <div className='bestSellers__card'>
            <div className='card__side card__side--front'>
              <div className='card__picture--container'>
                <div className='card__picture card__picture--2' />
              </div>
              <div className='card__heading'>
                <span className='card__heading--span'>Best Seller</span>
              </div>
              <div className='card__details'>
                <ul>
                  <li>Chocolate Cake</li>

                  <li>
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </li>
                  <li>Category: Cake</li>
                  <li>$ 10.00</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back'>
              <div className='card_side--back--container'>
                <div className='card_side--back--picture card_side--back--picture--2' />
              </div>
              <div className='card_side--back--button'>
                <a href='#'>ORDER NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div className='bestSellers__container'>
          <div className='bestSellers__card'>
            <div className='card__side card__side--front'>
              <div className='card__picture--container'>
                <div className='card__picture card__picture--3' />
              </div>
              <div className='card__heading'>
                <span className='card__heading--span'>Best Seller</span>
              </div>
              <div className='card__details'>
                <ul>
                  <li>Fruit Muffin</li>

                  <li>
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </li>
                  <li>Category: Muffin</li>
                  <li>$ 15.00</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back'>
              <div className='card_side--back--container'>
                <div className='card_side--back--picture card_side--back--picture--3' />
              </div>
              <div className='card_side--back--button'>
                <a href='#'>ORDER NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div className='bestSellers__container'>
          <div className='bestSellers__card'>
            <div className='card__side card__side--front'>
              <div className='card__picture--container'>
                <div className='card__picture card__picture--4' />
              </div>
              <div className='card__heading'>
                <span className='card__heading--span'>Best Seller</span>
              </div>
              <div className='card__details'>
                <ul>
                  <li>Chocolate Cookies</li>

                  <li>
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </li>
                  <li>Category: Cookie</li>
                  <li>$ 10.00</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back'>
              <div className='card_side--back--container'>
                <div className='card_side--back--picture card_side--back--picture--4' />
              </div>
              <div className='card_side--back--button'>
                <a href='#'>ORDER NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div className='bestSellers__container'>
          <div className='bestSellers__card'>
            <div className='card__side card__side--front'>
              <div className='card__picture--container'>
                <div className='card__picture card__picture--5' />
              </div>
              <div className='card__heading'>
                <span className='card__heading--span'>Best Seller</span>
              </div>
              <div className='card__details'>
                <ul>
                  <li>Sugar Honey</li>

                  <li>
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </li>
                  <li>Category: Cookie</li>
                  <li>$ 18.00</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back'>
              <div className='card_side--back--container'>
                <div className='card_side--back--picture card_side--back--picture--5' />
              </div>
              <div className='card_side--back--button'>
                <a href='#'>ORDER NOW</a>
              </div>
            </div>
          </div>
        </div>
        <div className='bestSellers__container'>
          <div className='bestSellers__card'>
            <div className='card__side card__side--front'>
              <div className='card__picture--container'>
                <div className='card__picture card__picture--6' />
              </div>
              <div className='card__heading'>
                <span className='card__heading--span'>Best Seller</span>
              </div>
              <div className='card__details'>
                <ul>
                  <li>Nevada Muffin</li>

                  <li>
                    Lorem Ipsum is simply dummy text of the printing industry.
                  </li>
                  <li>Category: Muffin</li>
                  <li>$ 20.00</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back'>
              <div className='card_side--back--container'>
                <div className='card_side--back--picture card_side--back--picture--6' />
              </div>
              <div className='card_side--back--button'>
                <a href='#'>ORDER NOW</a>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

export default BestSellersSlider;
