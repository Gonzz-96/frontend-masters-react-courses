import React, { useState } from 'react';
import { Link } from '@reach/router';
import { css } from '@emotion/core';
import colors from './colors';

const color = 'black';

// anything that can be done with javascript
// can be done in inline emotion CSS.
const NavBar = () => {
  const [padding, setPadding] = useState(15);

  return (
    // eslint-disable-next-line
    <header
      onClick={() => setPadding(padding + 15)}
      css={css`
        background-color: ${colors.secondary};
        margin-bottom: 20px;
        padding: ${padding}px;
      `}
    >
      <Link to="/">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          &:hover {
            text-decoration: underline;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🐶
      </span>
    </header>
  );
};

export default NavBar;
