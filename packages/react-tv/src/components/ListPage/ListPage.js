import React, { useState, useEffect } from 'react';
import './ListPage.scss';


function moopy (e) {
  console.log('moopy!', e);
};


function ListPage () {
  const [shows, setShows] = useState(null);
  let element = null;
  let ref = React.createRef();
  console.log('shows', shows);

  if (!shows) {
    fetch('http://api.tvmaze.com/search/shows?q=react')
    .then((res) => res.json() )
    .then((data) => {
      setShows(data);
    });
  }

  useEffect(() => {
    console.log('ref', ref);
    console.log('use effect', element);
    element.removeEventListener('moop', moopy);
    element.addEventListener('moop', moopy);
  })

  const createListElements = () => {
    if (!shows) {
      return <div></div>
    } else {
      return shows.map((show, index) => {
        return <li key={index}>
          <image-wrap url={show.show.image.medium} alt="cover artwork"></image-wrap>
          {/* <img src={show.show.image.medium}/> */}
          <div className="info-wrap">
            <div className="grid headings">
              <div className="title col-span-6-12">
                Title
              </div>
              <div className="year col-span-3-12">
                Year
              </div>
              <div className="rating col-span-3-12">
                Rating
              </div>
            </div>
            <div className="grid">
              <div className="title col-span-6-12">
                {show.show.name}
              </div>
              <div className="year col-span-3-12">
                {show.show.premiered}
              </div>
              <div className="rating col-span-3-12">
                {show.show.rating.average}
              </div>
            </div>
          </div>
        </li>
      })
    }
  }

  return (
    <div ref={el => element = el}>
      <div className="card">
        <ul>
          {createListElements()}
        </ul>
      </div>
    </div>
  );
}

export default ListPage;
