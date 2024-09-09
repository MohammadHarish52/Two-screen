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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Booking Confirmation
      </h1>
      {show ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">{show.name}</h2>
          <img
            src={show.image?.medium || show.image?.original}
            alt={`${show.name} Poster`}
            className="w-full rounded-lg shadow-md"
          />
          <p className="text-gray-600">
            Your booking for {show.name} has been confirmed. Enjoy the show!
          </p>
          <Link
            to="/"
            className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black text-center"
          >
            Move to Homepage
          </Link>
        </div>
      ) : (
        <p className="text-gray-600">Loading...</p>
      )}
    </div>
  );
};

export default ConfirmationPage;
