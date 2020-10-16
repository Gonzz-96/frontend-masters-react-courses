import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';

// <React.StringMode> will restrict the use
// of older or unstable api.
const App = () => (
  <div>
    <h1>Adopt Me</h1>
    <SearchParams />
  </div>
);

render(<App />, document.getElementById('root'));
