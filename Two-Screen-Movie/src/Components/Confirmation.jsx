import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import movieData from "../movieData.json";

const ConfirmationPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movieData.find((m) => m.id === parseInt(id));
    if (selectedMovie) {
      setMovie(selectedMovie);
    } else {
      console.error(`Movie with id ${id} not found`);
    }
  }, [id]);

  if (!movie) return <p className="text-center mt-8 text-white">Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-black text-white border-gray-700 border-2 rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6">Booking Confirmation</h1>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">{movie.title}</h2>
        <img
          src={`${movie.backdrop_path}`}
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
          Rating: {movie.vote_average.toFixed(1)}/10
        </p>
        <Link
          to="/"
          className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white text-center"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
