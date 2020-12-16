import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="brand"><h2>andi motas</h2></li>
                        <li className="current"><a className="smoothscroll" href="#home">home</a></li>
                        <li><a className="smoothscroll" href="#about">about</a></li>
                        <li><a className="smoothscroll" href="#resume">experience</a></li>
                        <li><a className="smoothscroll" href="#portfolio">works</a></li>
                    </ul>

                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">hi, I'm andi!</h1>
                        <h3>I'm an aspiring software engineer based in northern virginia, <br />currently studying computer science and art/visual technology at george mason university. this is my personal website where you can learn more about me and explore some of my creations.</h3>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
