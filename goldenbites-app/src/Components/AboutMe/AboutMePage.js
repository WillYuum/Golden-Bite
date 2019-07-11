import React, { Component } from 'react';
import './aboutMe.css';
import AboutMeFullStory from './AboutMeFullStoty';

class AboutMePage extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className='aboutMe__Wrapper'>
          <div className='aboutMe__container'>
            {/* <div className='aboutMe__container--logo' /> */}
            <div className='aboutMe__container--title'>About Me</div>
            <div className='aboutMe__container--slogan'>I BAKE WHAT I LOVE</div>
            <div className='aboutMe__container--story'>
              At Golden Bites we embrace a clients specific needs with the use
              of quality material baked with organic ingredients and decorated
              with seasonal ingredients and also meeting specific dietary needs
              such as gluten free.
            </div>
            <div className='aboutMe__container--contact'>+961 3 770421</div>
            <div className='aboutMe__container--contact'>
              info@goldenbites.com
            </div>
          </div>
        </div>
        {/* <AboutMeFullStory /> */}
      </div>
    );
  }
}

export default AboutMePage;
