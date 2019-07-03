import React,{Component} from 'react';

import '../App.css';
import BlogItemLg from './BlogItemLg';
import BlogItemListing from './BlogItemListing';
import MainBlogClick from './MainBlogClick';

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