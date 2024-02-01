import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    // Fetch details for the specific show using the show ID from the URL parameter
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch show details: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setShow(data);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  }, [id]);

  const handleBookTicket = () => {
    //Navigate to the Booking form
    history(`/book/${id}`);
  };

  return (
    <div className="show-details">
      <h1>Show Details</h1>
      {show ? (
        <div className="summary">
          <h2>{show.name}</h2>
          {show.summary}
          <button onClick={handleBookTicket} className="summary_btn">
            <Link className="link" to={`/book/${show.id}`}>
              Book Ticket
            </Link>
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowDetails;
