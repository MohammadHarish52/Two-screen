import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const API_KEY = "40f253a5e9b9b0056ddd5453da2887c7";

const ConfirmationPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch movie details: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.error(error);
        // Handle the error
      });
  }, [id]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 text-white border-gray-700 border-2 rounded-lg shadow-xl ">
      <h1 className="text-2xl font-bold mb-6">Booking Confirmation</h1>
      {movie ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`${movie.title} Poster`}
            className="w-full rounded-lg shadow-md"
          />
          <p>
            Your booking for {movie.title} has been confirmed. Enjoy the movie!
          </p>
          <p className="text-sm text-gray-300">
            Release Date: {movie.release_date}
          </p>
          <p className="text-sm text-gray-300">
            Runtime: {movie.runtime} minutes
          </p>
          <p className="text-sm text-gray-300">
            Rating: {movie.vote_average.toFixed(1)}/10
          </p>
          <Link
            to="/"
            className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white text-center"
          >
            Return to Homepage
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ConfirmationPage;
