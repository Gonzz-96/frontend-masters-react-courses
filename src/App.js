import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Link, Router } from '@reach/router';
import Details from './Details';
import { Provider } from 'react-redux';
import store from './store';

// <React.StringMode> will restrict the use
// of older or unstable api.
// Reach router will always render the most
// specific route.
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <header>
          <Link to="/">Adopt Me</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </Provider>
  );
};
render(<App />, document.getElementById('root'));
