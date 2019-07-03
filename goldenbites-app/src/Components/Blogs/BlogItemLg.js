import React,{Component,Link} from "react";

class BlogItemLg extends Component {
  render() {
     return (
         
     <div className="blogitemlg">
        <div className="blogitemlgimage">
          

          <img src="./cake.jpg" />

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
            <div class="batouna">
             
                <button type="submit">Read More</button>
              
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default BlogItemLg


