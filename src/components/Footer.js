import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <footer>

        <div className="row">
          <div className="twelve columns">

            <ul className="copyright">
              <li>andi motas &copy; {new Date().getFullYear()}</li>
            </ul>

          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
