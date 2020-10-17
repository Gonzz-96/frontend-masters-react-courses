import React, { useState } from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Link, Router } from '@reach/router';
import Details from './Details';
import ThemeContext from './ThemeContext';

// <React.StringMode> will restrict the use
// of older or unstable api.
// Reach router will always render the most
// specific route.
const App = () => {
  const themeHook = useState('darkBlue');

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
render(<App />, document.getElementById('root'));
