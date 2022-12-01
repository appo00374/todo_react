import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <ul>
          <li>
            <div className="btn">
              <Link to="/about">about</Link>
            </div>
          </li>
          <li>
            <div className="btn">
              <Link to="/contact">contact</Link>
            </div>
          </li>
          <li>
            <div className="btn">
              <Link to="/todo">todo</Link>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
