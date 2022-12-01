import React from 'react';
import { Link } from 'react-router-dom';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
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

export default Contact;
