import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const API_KEY = "40f253a5e9b9b0056ddd5453da2887c7";

const ShowDetails = () => {
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

  if (!movie) return <p className="text-center mt-8 text-white">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-800 rounded-lg shadow-xl text-white">
      <h1 className="text-3xl font-bold mb-6">{movie.title}</h1>
      <div className="flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`${movie.title} poster`}
          className="w-full md:w-1/3 rounded-lg shadow-md mb-6 md:mb-0 md:mr-6"
        />
        <div className="flex-1">
          <p className="mb-4">{movie.overview}</p>
          <p className="mb-2">
            <strong>Tagline:</strong> {movie.tagline}
          </p>
          <p className="mb-2">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p className="mb-2">
            <strong>Rating:</strong> {movie.vote_average.toFixed(1)}/10
          </p>
          <p className="mb-2">
            <strong>Runtime:</strong> {movie.runtime} minutes
          </p>
          <p className="mb-2">
            <strong>Genres:</strong>{" "}
            {movie.genres.map((g) => g.name).join(", ")}
          </p>
          <p className="mb-2">
            <strong>Production Companies:</strong>{" "}
            {movie.production_companies.map((c) => c.name).join(", ")}
          </p>
          <p className="mb-4">
            <strong>Budget:</strong> ${movie.budget.toLocaleString()}
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
