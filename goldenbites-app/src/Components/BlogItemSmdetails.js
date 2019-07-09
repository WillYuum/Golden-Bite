import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
  }

  async componentDidMount() {
    try {
      // FETCH FROM IMAGES_BLOGS TABLE
      const response_imago = await fetch(
        'http://localhost:3001/images_blogs/read'
      );
      const iiblogs = await response_imago.json();
      await this.setState({ data: iiblogs.DATA });
      await console.log('my data is:', this.state.data);

      // FETCH FROM BLOGS TABLE
      const response_blogna = await fetch('http://localhost:3001/blogs/read');
      const ttblogs = await response_blogna.json();
      await this.setState({ databo: ttblogs.DATA });
      await console.log('databo is:', this.state.databo);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className='blogitemsmdetails'>
        <div className='blogano'>
          {this.state.databo.map(item => (
            <div className='bordera'>
              <h1>{item.blogs_title}</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <hr className='style-eight' />
            </div>
          ))}
        </div>

        {/* <div className='holahola'>
          <h1>
            Every <Badge variant='secondary' />
          </h1>
          <h2>
            Blog<Badge variant='secondary' />
          </h2>
          <h3>
            Is <Badge variant='secondary' />
          </h3>
          <h4>
            A <Badge variant='secondary' />
          </h4>
          <h5>
            Story <Badge variant='secondary' />
          </h5>
        </div> */}
        {/* <div className='spana'>
          <Spinner animation='border' variant='primary' />
          <Spinner animation='border' variant='secondary' />
          <Spinner animation='border' variant='success' />
          <Spinner animation='border' variant='danger' />
          <Spinner animation='border' variant='warning' />
          <Spinner animation='border' variant='info' />
          <Spinner animation='border' variant='light' />
          <Spinner animation='border' variant='dark' />
          <Spinner animation='grow' variant='primary' />
          <Spinner animation='grow' variant='secondary' />
          <Spinner animation='grow' variant='success' />
          <Spinner animation='grow' variant='danger' />
          <Spinner animation='grow' variant='warning' />
          <Spinner animation='grow' variant='info' />
          <Spinner animation='grow' variant='light' />
          <Spinner animation='grow' variant='dark' />
        </div> */}
      </div>
    );
  }
}

export default BlogItemSmdetails;
