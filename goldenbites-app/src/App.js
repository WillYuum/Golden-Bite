import React,{Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BlogPage from "./Components/Blogs/BlogPage";
import MainBlogClick from "./Components/Blogs/MainBlogClick";


<<<<<<< HEAD
  render() {
 
=======
import ProductsPage from "./Components/Products/ProductPage";
>>>>>>> 14c57c21fb9a5e8ba3e8c7f92ab5a5ad724c88ec

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD

   
  
 




=======
>>>>>>> 14c57c21fb9a5e8ba3e8c7f92ab5a5ad724c88ec
        <Router>
          <Route path="/MainBlogClick" component={MainBlogClick} />
          <Route path="/" exact component={BlogPage} />
          <Route path="/Products" component={ProductsPage}/>
        </Router>
<<<<<<< HEAD
=======

>>>>>>> 14c57c21fb9a5e8ba3e8c7f92ab5a5ad724c88ec
      </div>
    );
  }
}

export default App;
