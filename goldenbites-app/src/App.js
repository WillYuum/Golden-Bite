import React,{Component} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import BlogPage from "./Components/Blogs/BlogPage";
import MainBlogClick from "./Components/Blogs/MainBlogClick";
 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/MainBlogClick" component={MainBlogClick} />
          <Route path="/" exact component={BlogPage} />
          <Route path="/Products" component={ProductsPage}/>
        </Router>
      </div>
    );
  }
}

export default App;
