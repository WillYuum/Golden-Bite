import React,{Component} from "react";
import {Link} from 'react-router-dom'

class BlogItemLg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      
    }
  }
  // async onGetBlogData (id) {
  //   try {
  //     const response = await fetch("http://localhost:3001/blogs/read")
  //     const blog_data = await response.json();
  //     await this.setState({blogData: blog_data})
  //   }
  // }
  async componentDidMount() {
    try{
      // FETCH FROM IMAGES_BLOGS TABLE
      const response  = await fetch("http://localhost:3001/images_blogs/read");
      const iblogs = await response.json()
      await this.setState({data:iblogs.DATA})
      await console.log("Image table is:",this.state.data)

 // FETCH FROM BLOGS TABLE author
 const response_blogs  = await fetch("http://localhost:3001/blogs/read");
 const blogs = await response_blogs.json()
 await this.setState({data:blogs.DATA})
 await console.log("blog table is:",this.state.data)

  // FETCH FROM BLOGS TABLE date
  const response_date  = await fetch("http://localhost:3001/blogs/read");
  const date = await response_date.json()
  await this.setState({data:date.DATA})
  await console.log("DATA:",this.state.data)

   // FETCH FROM BLOGS TABLE content
   const response_content = await fetch("http://localhost:3001/blogs/read");
   const content= await response_content.json()
   await this.setState({data:content.DATA})
   await console.log("DATA:",this.state.data)

    }catch(err){
      console.log(err)
    }
  }
  

  render() {
    
console.log("this is " + this.state.data)
     return (
         
     <div className="blogitemlg">
        <div className="blogitemlgimage">
        
     
{/* <div className="caka">
{this.state.data.length>0? this.state.data[0].images_link: null}   

</div> */}

     {/* <img className="caka" src={this.state.data.length>0? this.state.data[0].images_link: null} />   */}
     <img
							src={`http://localhost:3001/Golden_Bites_Images/${this.state.data.images_link}.jpg`}
							alt="no image"
						/>
          <div className="rightimagetext">
            <h1>We are your #1 Choice</h1>
            <hr className="style-eight" />
            <div className="headingflex">
              <h2 className="chef">By Chef {this.state.data.length>0? this.state.data[0].blogs_author: null}</h2>
              <h2 className="date">{this.state.data.length>0? this.state.data[0].blogs_date: null}</h2>
            </div>

            <div className="underflextext">
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className="batouna">
            
             
                <button type="submit"><Link to ="/MainBlogClick">Read More</Link></button>
                
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default BlogItemLg


