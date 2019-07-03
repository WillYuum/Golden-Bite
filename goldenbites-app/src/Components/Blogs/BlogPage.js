import React,{Component} from 'react';

import './Blogs.css';
// import BlogItemLg from "./BlogItemLg.1";
import BlogItemListing from './BlogItemListing';
import MainBlogClick from './MainBlogClick';
import BlogItemLg from './BlogItemLg';

class BlogPage extends Component {

render(){

return(

<div className="blogpage">
<switch>

{/* <Route path ="/Mainblogclick" component={MainBlogClick}/> */}
</switch>



<BlogItemLg/>
<BlogItemListing/>

</div>


    
)



}




}




export default BlogPage