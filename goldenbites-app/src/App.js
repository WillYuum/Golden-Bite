import React from 'react';

import './App.css';
import BlogPage from './Components/Blogs/BlogPage';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className = "App-container">
        <BlogPage/>
      </div>
    );
  }
}

export default App;
