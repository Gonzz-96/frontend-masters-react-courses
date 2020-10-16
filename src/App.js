import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Router } from '@reach/router';
import Details from './Details';

// <React.StringMode> will restrict the use
// of older or unstable api.
// Reach router will always render the most
// specific route.
const App = () => (
  <div>
    <h1 id="something-important">Adopt Me</h1>
    <Router>
      <SearchParams path="/" />
      <Details path="/details/:id" />
    </Router>
  </div>
);

render(<App />, document.getElementById('root'));
