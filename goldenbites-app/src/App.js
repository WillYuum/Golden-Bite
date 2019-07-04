import React from 'react';

import './App.css';
import BlogPage from './Components/Blogs/BlogPage';


//----Products Components------
 import ProductPage from "./Components/Products/ProductPage"
//--------- --------------------
class App extends React.Component{

   
  
 

  render(){
    return(
      <div className = "App-container">
        {/* <BlogPage /> */}

        <ProductPage />
        
        
      </div>
    );
  }
}

export default App;
