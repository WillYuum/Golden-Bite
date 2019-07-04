import React,{Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BlogPage from "./Components/Blogs/BlogPage";
import MainBlogClick from "./Components/Blogs/MainBlogClick";


//----Products Components------
import ProductPage from "./Components/Products/ProductPage"
//--------- --------------------
class App extends Component {

  render() {
 

  
    return (
      <div className="App">

   
  
 




        <Router>
          <Route path="/MainBlogClick" component={MainBlogClick} />
          <Route path="/" exact component={BlogPage} />
        </Router>
        <ProductPage />
      </div>
    );
  }
}

export default App;
