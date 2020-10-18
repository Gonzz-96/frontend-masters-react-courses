import React from 'react';
import { Link } from '@reach/router';

const Pet = ({ name, animal, breed, media, location, id }) => {
  let hero = 'http://placecorgi.com/300/300';

  if (media.length) {
    hero = media[0].small;
  }

  // anchor tag was replace by Link because it caused the
  // destruction of the whole DOM, that required a whole re-rendering
  // of the application, and hence destroying the context.
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
