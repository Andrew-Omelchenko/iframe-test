import React, { Component } from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import InstagramEmbed from 'react-instagram-embed';

//Styles
import './App.css';

class App extends Component {
  render() {
    return (
        <div
            className="wrapper"
        >
            <InstagramEmbed
                className="instagramStyled"
                url="https://www.instagram.com/p/BuWrKTKBxhL/?utm_source=ig_web_button_share_sheet"
                containerTagName='span'
                hideCaption={false}
            />
        </div>
    );
  }
}

export default App;
