import React, { useState } from 'react';
import './ListPage.scss';

function ListPage () {
  const [shows, setShows] = useState(null);
  console.log('shows', shows);
  if (!shows) {
    fetch('http://api.tvmaze.com/search/shows?q=react')
    .then((res) => res.json() )
    .then((data) => {
      setShows(data);
    });
  }

  return (
    <div>
      <h2>ListPage Works</h2>
      <p>
        // List shows here
      </p>

    </div>
  );
}

export default ListPage;
