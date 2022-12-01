import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <ul>
          <li>
            <div className="btn">
              <Link to="/">home</Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
