// components/ShowDetails.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShowDetails = ({ match }) => {
  const [show, setShow] = useState(null);

  useEffect(() => {
    // Fetch details for the specific show using the show ID from the URL parameter
    fetch(`https://api.tvmaze.com/shows/${match.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        setShow(data);
      });
  }, [match.params.id]);

  return (
    <div className="show-details">
      <h1>Show Details</h1>
      {show ? (
        <div>
          <h2>{show.name}</h2>
          <p>Summary: {show.summary}</p>
          <button>
            <Link to={`/book/${show.id}`}>Book Movie Ticket</Link>
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetails;
