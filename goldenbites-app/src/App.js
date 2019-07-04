import React,{Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BlogPage from "./Components/Blogs/BlogPage";
import MainBlogClick from "./Components/Blogs/MainBlogClick";

class App extends Component {

<<<<<<< HEAD
  render() {
 

  
    return (
      <div className="App">
=======

//----Products Components------
 import ProductPage from "./Components/Products/ProductPage"
//--------- --------------------
class App extends React.Component{
>>>>>>> 4648882d2c5e2fb70166691c214708731ba92552

   
  
 

<<<<<<< HEAD



        <Router>
          <Route path="/MainBlogClick" component={MainBlogClick} />
          <Route path="/" exact component={BlogPage} />
        </Router>
=======
  render(){
    return(
      <div className = "App-container">
        {/* <BlogPage /> */}

        <ProductPage />
        
        
>>>>>>> 4648882d2c5e2fb70166691c214708731ba92552
      </div>
    );
  }
}

export default App;
