import React, { Component } from 'react';

class Header extends Component {
   render() {

      if (this.props.data) {
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

               <ul id="nav" className="nav">
                  <li className="brand"><h2>⁺₊【&e】</h2></li>
                  <li className="current"><a className="smoothscroll" href="#home">home</a></li>
                  <li><a className="smoothscroll" href="#about">about</a></li>
                  <li><a href="https://drive.google.com/file/d/1jlRSBUBgI0JStEHdG6rP2iyHL37RnrCH/view?usp=sharing">resume</a></li>
                  <li><a href="/music.html">music</a></li>
               </ul>

            </nav>


            <div className="row banner">
               <div className="banner-text">
                  <h1>andi【&e】motas</h1>
                  <h3>⁺₊ <span>software engineer</span><br></br>with a passion for <span>design</span> and <span>data</span> ⁺₊</h3>
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

         </header>
      );
   }
}

export default Header;
