import React, { Component } from "react";

import "./Blogs.css";
// import BlogItemLg from "./BlogItemLg.1";
import BlogItemListing from "./BlogItemListing";
import MainBlogClick from "./MainBlogClick";
import BlogItemLg from "./BlogItemLg";

import BlogLarge from "../Home/BlogItemLg";
class BlogPage extends Component {
  render() {
    return (
      <div className="blogpage">
        {/* <BlogItemLg/> */}
        <BlogLarge />
        <BlogItemListing />
      </div>
    );
  }
}

export default BlogPage;
