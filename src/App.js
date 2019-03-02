import React, { Component } from 'react';
import { FacebookProvider, EmbeddedPost } from 'react-facebook';

//Styles
import AppStyled from './App.styled.js';

class App extends Component {
  isMobile() {
    const isInAppMode = ("standalone" in navigator && navigator.standalone) || (window.chrome && window.top.chrome.app && window.top.chrome.app.isInstalled);

    const ua = navigator.userAgent;
    // memoized values
    const isIphone = ua.indexOf('iPhone') !== -1 || ua.indexOf('iPod') !== -1;
    const isIpad = ua.indexOf('iPad') !== -1;
    const isAndroid = ua.indexOf('Android') !== -1;
    console.log('iPhone:', isIphone, 'iPad:', isIpad, 'Android:', isAndroid);
    return isIphone || isIpad || isAndroid;
  }

  render() {
    console.log('window', typeof window);
    console.log('height, width', window.innerHeight, window.innerWidth);
    console.log('device pixel ratio', window.devicePixelRatio);
      let width = 500;
    if (this.isMobile() || window.innerWidth < 548) {
      width = 350;
    }
    console.log('calc width', width);

    return (
      <AppStyled>
        <AppStyled.Block>
          <FacebookProvider appId="390050348463189">
            <EmbeddedPost
              href="https://www.facebook.com/OlenaDobrzhanska/posts/2043448672390166?__tn__=-UC-R"
              width={width}
            />
          </FacebookProvider>
        </AppStyled.Block>
        <AppStyled.Flex>
          <FacebookProvider appId="390050348463189">
            <EmbeddedPost
              href="https://www.facebook.com/OlenaDobrzhanska/posts/2043448672390166?__tn__=-UC-R"
              width={width}
            />
          </FacebookProvider>
        </AppStyled.Flex>
      </AppStyled>
    );
  }
}

export default App;
