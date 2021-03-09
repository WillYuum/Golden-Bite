import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BlogHeader from './Blogs/BlogHeader';

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

  Backend_Url = process.env.REACT_APP_PORT;

  async componentDidMount() {
    try {
      // FETCH FROM IMAGES_BLOGS TABLE

      const response_imago = await fetch(
        this.Backend_Url + 'images_blogs/read'
      );
      const iiblogs = await response_imago.json();

      await this.setState({ data: iiblogs.DATA });
      await console.log('my IMAGE is:', this.state.data);

      // FETCH FROM BLOGS TABLE
      const response_blogna = await fetch(this.Backend_Url + 'blogs/read');
      const ttblogs = await response_blogna.json();
      await this.setState({ databo: ttblogs.DATA[0].blogs_title });
      await console.log('databo blogs are:', this.state.databo.blogs_title);

      //------------------------------------------------------------------------------------------------------------
      //Fetch from images according to id
      const id = this.props.match.params.id;
      const response_image_id = await fetch(
        this.Backend_Url + `images_blogs/read/${id}`
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
          <div className='article__wrapper--left'>
            <div className='article__titleSingle'>{this.state.databo}</div>
            <div className='article__picture'>
              <img
                src={`${this.Backend_Url}Golden_Bites_Images/blogs/${
                  this.state.dataimage.images_link
                }`}
                alt='Article Image'
              />
            </div>

            <div className='article__details'>
              <div className='article__details--author'>
                by {this.state.dataimage.blogs_author}
              </div>
              <div className='article__details--date'>
                {this.state.dataimage.blogs_date}
              </div>

              <div />
            </div>

            <div className='article__content'>
              <p>{this.state.dataimage.blogs_content}</p>
            </div>
          </div>
          <div className='article__wrapper--right'>
            <div className='article__Latest-title'>Latest Blogs</div>
            <div className='article__Latest-message'>Coming Soon...</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogItemSmdetails;

{
  /* <div>
        <BlogHeader />

        <div className='article__wrapper'>
          <div className='article__wrapper--left'>
            <div className='article__title'>
              {this.state.databo.blogs_title}
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
          <div className='article__wrapper--right'>Latest Blogs</div>
        </div>
      </div> */
}

{
  /* <div className='blogitemsmdetails'>
        <div>{this.state.dataimage.blogs_author}</div>
        <div className='mainimage'>
          <img
            width='10%'
            height='10%'
            src={`http://localhost:3001/Golden_Bites_Images/${
              this.state.dataimage.images_link
            }.jpg`}
            alt='nopic'
          />
        </div>

        <div className='headundermainimage'>
          <p>By Chef {this.state.dataimage.blogs_author}</p>
          <p>{this.state.dataimage.blogs_date}</p>

          <div />
        </div>

        <div className='maintextblog'>
          <h1>How it all started!</h1>

          <p>{this.state.dataimage.blogs_content}</p>
        </div>
      </div> */
}
