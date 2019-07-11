import React, { Component } from 'react';
import BlogHeader from './BlogHeader';

import './Blogs.css';
import BlogItemListing from './BlogItemListing';
import MainBlogClick from './MainBlogClick';

import BlogItemLg from '../Home/BlogItemLg';

class BlogPage extends Component {
  render() {
    return (
      <div className='blogpage'>
        <BlogHeader />
        <BlogItemLg />
        <BlogItemListing />
      </div>
    );
  }
}

export default BlogPage;
