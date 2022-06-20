import React, { Component } from 'react';

class About extends Component {
   render() {
      return (
         <section id="about">
            <div className="row">
               <div className="nine columns main-col">
                  <h2>hello there!  i'm andi.</h2>

                  <span><p>
                  i graduated from george mason university with a degree in computer science minoring in art/visual 
                  technology. my experience is mostly in back end development but currently expanding on 
                  full-stack and data engineering skills. i am a big data engineer for oracle opower where i 
                  develop software that helps people reduce their energy usage through intersecting data analytics 
                  and behavioral science. in my free time i enjoy making art, playing instruments, helping out in the 
                  community, and exploring the latest in tech.
                  </p></span>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>let's talk!</h2>
                        <span><p>you can reach me at amotas2@gmu.edu</p></span><br />
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
