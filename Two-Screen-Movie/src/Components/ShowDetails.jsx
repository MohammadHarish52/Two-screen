import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import movieData from "../movieData.json";

const ShowDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movieData.find((m) => m.id === parseInt(id));
    if (selectedMovie) {
      setMovie(selectedMovie);
    } else {
      console.error(`Movie with id ${id} not found`);
      // Handle the error, perhaps set an error state or redirect
    }
  }, [id]);

  if (!movie) return <p className="text-center mt-8 text-white">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-black border-2 border-gray-700 rounded-lg shadow-xl text-white">
      <h1 className="text-3xl font-bold mb-6">{movie.title}</h1>
      <div className="flex flex-col md:flex-row">
        <img
          src={`${movie.poster_path}`}
          alt={`${movie.title} poster`}
          className="w-full md:w-1/3 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
        />
        <div className="flex-1">
          <p className="mb-4">{movie.overview}</p>
          <p className="mb-2">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p className="mb-2">
            <strong>Rating:</strong> {movie.vote_average.toFixed(1)}/10
          </p>
          <p className="mb-2">
            <strong>Popularity:</strong> {movie.popularity.toFixed(1)}
          </p>
          <p className="mb-2">
            <strong>Original Language:</strong> {movie.original_language}
          </p>
          <p className="mb-4">
            <strong>Adult:</strong> {movie.adult ? "Yes" : "No"}
          </p>
          <Link
            to={`/book/${movie.id}`}
            className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white text-center"
          >
            Book Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
