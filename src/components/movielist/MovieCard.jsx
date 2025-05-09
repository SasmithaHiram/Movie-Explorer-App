import React from "react";
import "./MovieCard.css";
import Star from "../../assets/Star.png";

const MovieCard = () => {
  return (
    <a href="" className="movie_card">
      <img
        src="https://i.ytimg.com/vi/ZtAlt2O_t28/maxresdefault.jpg"
        alt="Movie Poster"
        className="movie_poster"
      />
      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="movie_date_rate">
          <p>10-10-2025</p>
          <p>
            8.0
            <img src={Star} alt="Rating Icon" className="card_emoji" />
          </p>
        </div>
        <p className="movie_description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut natus
          iure ratione corporis. Qui, necessitatibus.
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
