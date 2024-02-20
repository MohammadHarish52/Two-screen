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
    <div>
      <h1>Show List</h1>
      <div className="movies">
        {shows.map(
          (show) =>
            show.show.image && (
              <Card key={show.show.id} style={{ margin: 20 }}>
                <CardContent>
                  <ul key={show.show.id}>
                    <li>{show.show.name}</li>
                    <li>Language: {show.show.language}</li>
                    <li>Premiered: {show.show.premiered}</li>
                    <li>Rating: {show.show.rating?.average}</li>
                    {show.show.image && (
                      <img
                        src={`${
                          show.show.image.medium
                            ? show.show.image.medium
                            : show.show.image.original
                        }`}
                        alt="movie image"
                      />
                    )}
                    <li>
                      <Link to={`/show/${show.show.id}`}>
                        <button>View Summary</button>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            )
        )}
      </div>
    </div>
  );
};

export default ShowList;
