import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogHeader from './BlogHeader';

// import { Button, Badge ,Spinner} from 'react-bootstrap';
class BlogItemSmdetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
    this.state = {
      databo: []
    };
    this.state = {
      dataimage: []
    };
    this.state = {
      dataimage: []
    };
  }

  async componentDidMount() {
    try {
      // FETCH FROM IMAGES_BLOGS TABLE

      const response_imago = await fetch(
        'http://localhost:3001/images_blogs/read'
      );
      const iiblogs = await response_imago.json();

      await this.setState({ data: iiblogs.DATA });
      await console.log('my IMAGE is:', this.state.data);

      // FETCH FROM BLOGS TABLE
      const response_blogna = await fetch('http://localhost:3001/blogs/read');
      const ttblogs = await response_blogna.json();
      await this.setState({ databo: ttblogs.DATA });
      await console.log('databo is:', this.state.databo);

      //------------------------------------------------------------------------------------------------------------
      //Fetch from images according to id
      const id = this.props.match.params.id;
      const response_image_id = await fetch(
        `http://localhost:3001/images_blogs/read/${id}`
      );
      const iblogs_id = await response_image_id.json();

      await this.setState({ dataimage: iblogs_id.DATA[0] });
      await console.log('my AUTHOR is:', this.state.dataimage);

      //----------------------------------------------------------------------------------------------------------------------
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <BlogHeader />

        <div className='article__wrapper'>
          <div className='article__wrapper--left' />
          <div className='article__wrapper--right'>
            <div className='article__title'>
              {this.state.dataimage.blogs_author}
            </div>
            <div className='article__picture'>
              <img
                src={`http://localhost:3001/Golden_Bites_Images/blogs/${
                  this.state.dataimage.images_link
                }`}
                alt='Article Image'
              />
            </div>

            <div className='article__details'>
              <p>By Chef {this.state.dataimage.blogs_author}</p>
              <p>{this.state.dataimage.blogs_date}</p>

              <div />
            </div>

            <div className='maintextblog'>
              <p>{this.state.dataimage.blogs_content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogItemSmdetails;
