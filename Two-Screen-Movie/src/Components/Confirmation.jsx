// components/ConfirmationPage.jsx
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ConfirmationPage = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

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

  return (
    <div className="confirmation-page">
      <h1>Booking Confirmation</h1>
      {show ? (
        <div className="confirmation-details">
          <h2>{show.name}</h2>
          <img
            src={show.image?.medium || show.image?.original}
            alt={`${show.name} Poster`}
          />
          <p>
            Your booking for {show.name} has been confirmed. Enjoy the show!
          </p>
          <button className="home_btn">
            <Link className="link" to="/">
              Move to Homepage
            </Link>
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ConfirmationPage;
