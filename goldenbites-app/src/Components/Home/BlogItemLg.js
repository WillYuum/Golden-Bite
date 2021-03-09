import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './blogItemLg.css';

class BlogItemLg extends Component {
  // state = {};

  constructor(props) {
    super(props);

    this.state = {
      data: [],
      datablogs: [],
      datablogslast: [],
      dataiblogslast: []
    };
  }

  Backend_Url = process.env.REACT_APP_PORT;

  async componentDidMount() {
    try {
      // FETCH FROM BLOGS TABLE
      const response_blogs_read = await fetch(
        this.Backend_Url + 'blogs/read'
      );
      const blogs_reading = await response_blogs_read.json();
      await this.setState({ datablogs: blogs_reading.DATA[0] });
      await console.log('my blogsnew are:', this.state.datablogs.blogs_author);

      // FETCH Last Blog FROM BLOGS TABLE
      const response_blogs_read_last = await fetch(
        this.Backend_Url +'blogs/readlast'
      );
      const blogs_reading_lastblog = await response_blogs_read_last.json();
      await this.setState({ datablogslast: blogs_reading_lastblog.DATA[0] });
      await console.log('my lastblog is:', this.state.datablogslast.blogs_date);

      // FETCH images FROM IbLOGS TABLE
      const response_blogs_images = await fetch(
        this.Backend_Url + 'images_blogs/readlast'
      );
      const blogs_reading_images = await response_blogs_images.json();
      await this.setState({ dataiblogslast: blogs_reading_images.DATA[0] });
      await console.log('my iblog is:', this.state.dataiblogslast.images_link);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className='blog__container'>
        <div className='blog__container--left'>
          <div className='blog__picture'>
            <img
              src={`${this.Backend_Url}Golden_Bites_Images/blogs/${
                this.state.dataiblogslast.images_link
              }`}
            />
          </div>
        </div>
        <div className='blog__container--right'>
          <div className='blog__title'>
            {this.state.datablogslast.blogs_title}
          </div>
          <div className='blog__date'>
            {this.state.datablogslast.blogs_date}
          </div>
          <div className='blog__author'>
            {' '}
            by&nbsp;
            {this.state.datablogslast.blogs_author}
          </div>
          <div className='blog__summary'>
            {this.state.datablogslast.blogs_content}
          </div>
          <div className='blog__button'>
            <Link to='/MainBlogClick'>Read More</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogItemLg;
