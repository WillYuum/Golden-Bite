import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BlogItemSm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
			datab: [],
		};
	}

	async componentDidMount() {
		try {
			// FETCH FROM IMAGES_BLOGS TABLE
			const response_images = await fetch('http://localhost:3001/images_blogs/read');
			const iiblogs = await response_images.json();
			await this.setState({ data: iiblogs.DATA });
			await console.log('my data is:', this.state.data);

			// FETCH FROM BLOGS TABLE
			const response_blogza = await fetch('http://localhost:3001/blogs/read');
			const zzblogs = await response_blogza.json();
			await this.setState({ datab: zzblogs.DATA });
			await console.log('my blogs are:', this.state.datab);
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		return (
			<div className="hereitis">
				{this.state.datab.map(item => (
					<div className="item">
						<img
							src={`http://localhost:3001/Golden_Bites_Images/${item.images_link}.jpg`}
							alt="no image"
						/>
	
						<div className="textunderimage">
							<Link to="/BlogItemSmdetails">
								<p>Title: {item.blogs_title} </p>
								<p>Author:{item.blogs_author} </p>
								<p>Date: {item.blogs_date}</p>
							</Link>
							
						</div>
					</div>
				))}
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
