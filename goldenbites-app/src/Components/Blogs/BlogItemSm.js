import React,{Component} from 'react'


class BlogItemSm extends Component{
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      
    }
	}
	
  async componentDidMount() {
    try{
      // FETCH FROM IMAGES_BLOGS TABLE
      const response_images= await fetch("http://localhost:3001/images_blogs/read");
      const iiblogs = await response_images.json()
      await this.setState({data:iiblogs.DATA})
      await console.log("DATA:",this.state.data.blogs_id)

			

    }catch(err){
      console.log(err)
    }
  }
  

render(){
  
    
return(

 <div className="blogitemsm" >

 <div className="hereitis">
<a href="#popup1">
 {/* <img src="frez.jpg"/>   */}


 { this.state.data.map(data=>
	<div>
	<img src={data.images_link} />
  <div className="textunderimage">
	<p>Title: {data.blogs_id} </p>
<p>Author:{data.blogs_author} </p>
<p>Date: {data.blogs_date}</p>
</div>
	</div>
) }

{/* <div className="textunderimage">

{this.state.data.map(data=>
<div>
<p>Title: {data.length>0?  data.blogs_title:null} </p>
<p>Author:{data.length>0?  data.blogs_author:null} </p>
<p>Date: {data.length>0?  data.blogs_date:null}</p>
</div>
)}

</div> */}


 {/* <img   src={this.state.data.length>0? this.state.data[1].images_link: null}/> */}
</a>

</div>
<div id="popup1" className="overlay">
	<div className="popup">
    <img src="frez.jpg"/>
		<a className="close" href="#">&times;</a>
		<div className="content">
        <div className="textunderimage">

<p>Title:</p>
<p>Author:</p>
<p>Date:</p>

</div>
		</div>
	</div>
</div>
{/* <div>
{this.state.data.map(data=>
	<div>
	
	<h1>Title is :{data.blogs_date}</h1>
	</div>
)}
</div>  */}
</div> 

)//return




} //render





} //component

export default BlogItemSm