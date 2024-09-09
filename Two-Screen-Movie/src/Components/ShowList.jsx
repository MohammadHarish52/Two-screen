import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_KEY = "40f253a5e9b9b0056ddd5453da2887c7";

const ShowList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 bg-black text-white">
      <h1 className="text-3xl font-bold mb-8">Popular Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-black rounded-lg shadow-md overflow-hidden flex flex-col"
          >
            <div className="relative pt-[150%]">
              {" "}
              {/* 2:3 aspect ratio */}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} poster`}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>
                <p className="text-sm text-gray-300 mb-1">
                  Release Date: {movie.release_date}
                </p>
                <p className="text-sm text-gray-300 mb-4">
                  Rating: {movie.vote_average}/10
                </p>
              </div>
              <Link
                to={`/show/${movie.id}`}
                className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white text-center mt-auto"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;
