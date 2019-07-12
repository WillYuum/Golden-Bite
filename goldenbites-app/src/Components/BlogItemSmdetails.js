import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import { Button, Badge ,Spinner} from 'react-bootstrap';
class BlogItemSmdetails extends Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [],
		};
		this.state = {
			databo: [],
		};
		this.state = {
			dataimage: [],
		};
		this.state = {
			dataimage: [],
		};
	}

	async componentDidMount() {
		try {
			// FETCH FROM IMAGES_BLOGS TABLE

			const response_imago = await fetch('http://localhost:3001/images_blogs/read');
			const iiblogs = await response_imago.json();

			await this.setState({ data: iiblogs.DATA });
			await console.log('my IMAGE is:', this.state.data);

			// FETCH FROM BLOGS TABLE
			const response_blogna = await fetch('http://localhost:3001/blogs/read');
			const ttblogs = await response_blogna.json();
			await this.setState({ databo: ttblogs.DATA[0] });
			await console.log('databo blogs are:', this.state.databo.blogs_title);

			//------------------------------------------------------------------------------------------------------------
			//Fetch from images according to id
			const id = this.props.match.params.id;
			const response_image_id = await fetch(`http://localhost:3001/images_blogs/read/${id}`);
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
			<div className="blogitemsmdetails">
				<div className="mainimage">
					<img
						width="10%"
						height="10%"
						src={`http://localhost:3001/Golden_Bites_Images/${this.state.dataimage.images_link}.jpg`}
						alt="nopic"
					/>
				</div>

				<div className="headundermainimage">
					<p>By Chef {this.state.dataimage.blogs_author}</p>
					<p>{this.state.dataimage.blogs_date}</p>

					<div />
				</div>

				<div className="maintextblog">
					<h1>How it all started!</h1>

					<p>{this.state.dataimage.blogs_content}</p>
				</div>
			</div>
		);
	}
}

export default BlogItemSmdetails;
