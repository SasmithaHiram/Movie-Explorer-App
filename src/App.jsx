import "./App.css";
import MovieList from "./components/movielist/MovieList";
import Navbar from "./components/navbar/Navbar";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <MovieList type="popular" title="Trending" />
      <MovieList type="top_rated" title="Top Rated" />
      <MovieList type="upcoming" title="Upcomming" />
    </div>
  );
};

export default App;
