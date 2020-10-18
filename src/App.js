import React, { useState, lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { Link, Router } from '@reach/router';
import ThemeContext from './ThemeContext';

// this will create a placeholder component
// and it will be loaded until the actual
// component is needed by the app
// Dynamic import! Javascript concept.
const Details = lazy(() => import('./Details'));
const SearchParams = lazy(() => import('./SearchParams'));

// The Suspense component is a kind of placeholder
// that will display a fallback until the real
// component gets load.

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
        <Suspense fallback={<h1>Loading route... </h1>}>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};
render(<App />, document.getElementById('root'));
