import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './blogItemLg.css';

class BlogItemLg extends Component {
  // state = {};



	constructor(props) {
		super(props);

		this.state = {
			data: [],
			datablogs: [],
		};
	}

	async componentDidMount() {
		try {
	
			// FETCH FROM BLOGS TABLE
			const response_blogs_read = await fetch('http://localhost:3001/blogs/read');
			const blogs_reading = await response_blogs_read.json();
			await this.setState({ datablogs: blogs_reading.DATA[0] });
			await console.log('my blogsnew are:', this.state.datablogs[0].blogs_author);
		} catch (err) {
			console.log(err);
		}
	}


  render() {
    return (
      <div className='blog__container'>
        <div className='blog__container--left'>
          <div className='blog__picture' />
        </div>
        <div className='blog__container--right'>
          <div className='blog__title'>{this.state.datablogs.blogs_title}</div>
          <div className='blog__date'>{this.state.datablogs.blogs_date}</div>
          <div className='blog__author'>{this.state.datablogs.blogs_author}</div>
          <div className='blog__summary'>
          {this.state.datablogs.blogs_content}
          </div>
          <div className='blog__button'>
            <Link to ="/MainBlogClick">Read Article</Link>
          </div>
          <div className='blogs__button'>
            <a href='#'>View All Articles</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogItemLg;
