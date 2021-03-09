import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogItemSm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      datab: []
    };
  }

  Backend_Url = process.env.REACT_APP_PORT;

  async componentDidMount() {
    try {
      // FETCH FROM IMAGES_BLOGS TABLE
      const response_images = await fetch(
        this.Backend_Url + 'images_blogs/read'
      );
      const iiblogs = await response_images.json();
      await this.setState({ data: iiblogs.DATA });
      await console.log('my data is:', this.state.data);

      // FETCH FROM BLOGS TABLE
      const response_blogza = await fetch(this.Backend_Url + 'blogs/read');
      const zzblogs = await response_blogza.json();
      await this.setState({ datab: zzblogs.DATA });
      await console.log('my blogs are:', this.state.datab);
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className='article__container-SM'>
        {this.state.datab.reverse().map((item, index) =>
          index !== 0 ? (
            <div className='article__card-SM'>
              <Link to={`/BlogItemSmdetails/${item.images_link_id}`}>
                <div className='article__picture-SM'>
                  <img
                    src={`${this.Backend_Url}Golden_Bites_Images/blogs/${
                      item.images_link
                    }`}
                    alt='Article Image'
                  />
                </div>

                <div className='article__details-SM'>
                  <div className='article__title'>{item.blogs_title} </div>
                  <div className='article__author'>by {item.blogs_author} </div>
                  <div className='article__date'>{item.blogs_date}</div>
                </div>
              </Link>
            </div>
          ) : (
            <></>
          )
        )}
      </div>

      /* <div className="textunderimage">

{this.state.data.map(data=>
<div>
<p>Title: {data.length>0?  data.blogs_title:null} </p>
<p>Author:{data.length>0?  data.blogs_author:null} </p>
<p>Date: {data.length>0?  data.blogs_date:null}</p>
</div>
)}

</div> */

      /* <img   src={this.state.data.length>0? this.state.data[1].images_link: null}/> */

      /* <div id={`${this.state.datab.blogs_title}`} className="overlay">
	<div className="popup">
    <img src="frez.jpg"/>
		<a className="close" href="#">&times;</a>
		<div className="content">
        <div className="textunderimage">

<p>Title: {this.state.datab.blogs_title}</p>
<p>Author: {this.state.datab.blogs_author}</p>
<p>Date: {this.state.datab.blogs_date}</p>

</div>
		</div>
	</div>
</div> */
      /* <div>
{this.state.data.map(data=>
	<div>
	
	<h1>Title is :{data.blogs_date}</h1>
	</div>
)}
</div>  */
    ); //return
  } //render
} //component

export default BlogItemSm;
