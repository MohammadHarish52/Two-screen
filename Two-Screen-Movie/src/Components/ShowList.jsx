import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shows.map(
          (show) =>
            show.show.image && (
              <div
                key={show.show.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                {show.show.image && (
                  <img
                    src={show.show.image.medium || show.show.image.original}
                    alt={`${show.show.name} poster`}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-gray-800">
                    {show.show.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1">
                    Language: {show.show.language}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    Premiered: {show.show.premiered}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    Rating: {show.show.rating?.average || "N/A"}
                  </p>
                  <Link
                    to={`/show/${show.show.id}`}
                    className="block w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black text-center"
                  >
                    View Summary
                  </Link>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default ShowList;
