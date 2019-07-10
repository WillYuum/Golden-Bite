import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './blogItemLg.css';

class BlogItemLg extends Component {
  state = {};
  render() {
    return (
      <div className='blog__container'>
        <div className='blog__container--left'>
          <div className='blog__picture' />
        </div>
        <div className='blog__container--right'>
          <div className='blog__title'>Design Your Box</div>
          <div className='blog__date'>08 July 2019</div>
          <div className='blog__author'>by Lama</div>
          <div className='blog__summary'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </div>
          <div className='blog__button'>
            <Link to='/MainBlogClick'>Read Article</Link>
          </div>
          {/* <div className='blogs__button'>
            <a href='#'>View All Articles</a>
          </div> */}
        </div>
      </div>
    );
  }
}

export default BlogItemLg;
