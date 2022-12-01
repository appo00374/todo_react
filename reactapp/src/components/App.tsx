import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from 'components/routes/Home';
import About from 'components/routes/About';
import Contact from 'components/routes/Contact';
import Todo from 'components/routes/Todo';
import NoMatch from 'components/routes/NoMatch';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React Router v6</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    );
  }
}

export default App;
