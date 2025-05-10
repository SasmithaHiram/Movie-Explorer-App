import React, { useEffect, useState } from "react";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  // const [filterMovies, setFilterMovies]  =useState(second)
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: "a859c5b5d3130a70473019bbc95cfd73",
          },
        }
      );
      setMovies(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.error("Error Fetching Movies", error);
    }
  };

  const handleFilter = (rate) => {
    setMinRating(rate);

    const filtered = movies.filter((movie) => movie.vote_average >= rate);
    setMovies(movies)
  };

  return (
    <section className="movie_list">
      <header className="align_center movie_list_header">
        <h2 className="align_center movie_list_heading">Trending</h2>
        <div className="align_center movie_list_fs">
          <ul className="align_center movie_filter">
            <li
              className="movie_filter_item active"
              onClick={() => handleFilter(8)}
            >
              8+ Star
            </li>
            <li className="movie_filter_item" onClick={() => handleFilter(7)}>
              7+ Star
            </li>
            <li className="movie_filter_item" onClick={() => handleFilter(6)}>
              6+ Star
            </li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <option value="">Sort By</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>

          <select name="" id="" className="movie_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>
      <div className="movie_cards">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default MovieList;
