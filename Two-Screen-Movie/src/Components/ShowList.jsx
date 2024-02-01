import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
      });
  }, []);

  return (
    <div>
      <h1>Show List</h1>
      <div className="movies">
        {shows.map((show) => (
          <ul key={show.id}>
            <li key={show.id}>{show.show.name}</li>
            <li>Language: {show.show.language}</li>
            <li>Premiered: {show.show.premiered}</li>
            <li>Rating: {show.show.rating?.average}</li>
            {show.show.image && (
              <img
                src={`${
                  show.show.image.medium
                    ? show.show.image.medium
                    : show.show.image.original
                }`}
                alt="movie image"
              />
            )}
            <li>
              <Link to={`/show/${show.show.id}`}>
                <button>View Summary</button>
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
