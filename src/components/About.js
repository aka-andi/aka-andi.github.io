import React, { Component } from 'react';

class About extends Component {
   render() {
      return (
         <section id="about">
            <div className="row">
               <div className="three columns">
                  <img className="profile-pic" src="./../../images/favicon.jpg?" alt="andi motas" />
               </div>
               <div className="nine columns main-col">
                  <h2>andi motas</h2>

                  <span><p>I have 4+ years of experience with back end development, and I am currently expanding on my skills in full-stack development and machine learning. I enjoy anything that allows me to exercise my creativity- from music to art to programming!</p></span>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>let's talk!</h2>
                        <span><p>just shoot me an email at amotas2@gmu.edu</p></span><br />
                     </div>
                     <div className="columns download">
                        <p>
                           <a href="https://drive.google.com/file/d/1QZs1Er7rOgSVxN4J0ArrB2yeLPclyMnb/view" className="button">résumé</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>
      );
   }
}

export default About;
