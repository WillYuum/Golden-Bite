import React,{Component} from "react";
import {Link} from 'react-router-dom'

class BlogItemLg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      
    }
  }
  async componentDidMount() {
    try{
      const response  = await fetch("http://localhost:3001/images_blogs/read");
      const blogs = await response.json()
      await this.setState({data:blogs})
      await console.log("DATA +>" ,this.state.data)
    }catch(err){
      console.log(err)
    }
  }
   
  

  


  render() {
     return (
         
     <div className="blogitemlg">
        <div className="blogitemlgimage">
          {/* <div className="caka">hi</div> */}

          <img className="caka" src="./cake.jpg" />

          <div className="rightimagetext">
            <h1>We are your #1 Choice</h1>
            <hr className="style-eight" />
            <div className="headingflex">
              <h2 className="chef">By Chef Lama</h2>
              <h2 className="date">11/07/2019</h2>
            </div>

            <div className="underflextext">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Collatio igitur ista te nihil iuvat. An vero, inquit, quisquam
                potest probare, quod perceptfum, quod. Philosophi autem in suis
                lectulis plerumque moriuntur. Haec dicuntur inconstantissime.
                Iam contemni non poteris. Audeo dicere, inquit. Duo Reges:
                constructio interrete. Quid de Platone aut de Democrito loquar?
                Illud dico, ea, quae dicat, praeclare inter se cohaerere. Tu
                enim ista lenius, hic Stoicorum more nos vexat. Parvi enim primo
                ortu sic iacent, tamquam omnino sine animo sint...
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


