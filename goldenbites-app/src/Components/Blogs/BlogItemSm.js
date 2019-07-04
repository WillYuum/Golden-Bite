import React,{Component} from 'react'


class BlogItemSm extends Component{

render(){
   
    
return(

<div className="blogitemsm" >
<a href="#popup1">
<img src="frez.jpg"/>
</a>
<div className="textunderimage">

<p>Title:</p>
<p>Author:</p>
<p>Date:</p>

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
</div>


)




}





}

export default BlogItemSm