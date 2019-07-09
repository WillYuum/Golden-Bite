import React from "react";
import "./Style/PopUpModel.css";



export default class ProductsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      address: "",
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


   submitHandler = async()=>{
    console.log(this.state);
        let a = new FormData();
   await a.append('name',this.state.name)
    a.append('address',this.state.address)
    a.append('phone_number',this.state.phone)
    a.append('email',this.state.email)
    

    try{
    const order = await fetch("http://localhost:3001/orders/create",{
      method:"POST",
      body:a,
      headers:{"Content-Type":"application/json"}
      
    })
      }catch(err){
        console.log(err)
      }
   }  



  render() {
    const { name, email, phone_number, address } = this.state;
    return (
      <div className="ProductsItem-container">
        <div
          className="ProductsItem-image"
          style={{
            backgroundImage: `url(\"http://localhost:3001/Golden_Bites_Images/${
              this.props.img
            }.jpg\")`,
            backgroundSize: "100% 100%"
          }}
        />

        <div className="ProductsItem-details">
          <p className="ProductsItem-Text">{this.props.name}</p>

          <div className="ProductsItem-BellowTitle">
            <p className="ProductsItem-info ">
              <b>${this.props.price}</b>
            </p>
            <div className="ProductsItem-info addToCart">
              <a href={`#${this.props.name}`}>
                <p className="ProductsItem-text">BUY NOW</p>
              </a>
            </div>
          </div>
        </div>
        {/*-----------------------------------------POPUP-----------------------------------------------------*/}
        <div id={`${this.props.name}`} className="ProductsItem-overlay">
          <div className="ProductsItem-content">
            <a href="#" className="ProductsItem-close">
              &times;
            </a>
            <div className="ProductsItem-MainDetails">
              <div className="ProductsItem-popupImage">
                <img
                  width="300px"
                  height="250px"
                  src={`http://localhost:3001/Golden_Bites_Images/${
                    this.props.img
                  }.jpg`}
                  alt=""
                />
              </div>

              <p className="ProductsItem-productname">{this.props.name}</p>
              <p className="ProductsItem-productprice">
                <b>${this.props.price}</b>
              </p>
              <p className="Productsitem-productCategory">
                Categories: {this.props.category}
              </p>
              <p className="ProductsItem-productdescription">
                {this.props.discription}
              </p>
            </div>
            <div className="ProductsItem-form">
              <form onSubmit={this.submitHandler}>
                <input
                  className="ProductsItem-Name"
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={this.changeHandler}
                  required
                />
                <input
                  className="ProductsItem-email"
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={this.changeHandler}
                  required
                />
                <input
                  className="ProductsItem-phone"
                  type="text"
                  placeholder="Phone-Number"
                  name="phone"
                  value={phone_number}
                  onChange={this.changeHandler}
                  required
                />
                <input
                  className="ProductsItem-address"
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={address}
                  onChange={this.changeHandler}
                  required
                />
              </form>
            </div>
            <div className="ProductsItem-btn-bg">
              <button className="Productsitem-btn" onClick={this.submitHandler}>
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
