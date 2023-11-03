import React, { Component } from 'react';

class About extends Component {
   render() {
      return (
         <section id="about">
            <div className="text">
               <h2>hello there!  i'm andi.</h2>
               <span><p>
                  i graduated from george mason university in dec '21 with a b.s. degree in computer science and a minor in art/visual
                  technology. my experience is mostly in back end development while i am currently expanding on
                  full-stack and data engineering skills. i am a big data engineer at oracle opower where i
                  develop software that helps people reduce their energy usage. in my free time i enjoy making art, playing instruments, helping out in the
                  community, and exploring the latest in tech.</p>
                  <p>you can reach me at <a href="mailto:amotas2@gmu.edu">amotas2@gmu.edu</a> <br></br>(ﾉ´ヮ´)ﾉ*: ･ﾟ⁺₊</p>
                  <h3>mentions:</h3>
                  <ul>
                     <li><a href="https://cahmp.gmu.edu/2022-cahmp-student-entrepreneurship-challenge/">center for the advancement of human-machine partnership ⁺₊ entrepreneurship challenge 2022</a></li>
                     <li><a href="https://kplsorority.org/events/march-convention-2022/ ">kappa phi lambda ⁺₊ national convention 2022 panelists</a></li>
                     <li><a href="https://cs.gmu.edu/blog/btt-mason-peer-leaders-are-cheer-leaders-for-students/">george mason university, computer science department ⁺₊ break through tech dc article</a></li>
                     <li><a href="https://computing.gmu.edu/news/2021-10/grace-hoppers-legacy-continues-draw-women-cs ">george mason university, college of engineering and computing ⁺₊ grace hopper 2021 article</a></li>
                  </ul>
               </span>
            </div>


         </section>
      );
   }
}

export default About;
