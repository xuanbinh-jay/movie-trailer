import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieSearch from "./components/MovieSearch";
import { MovieProvider } from "./context/MovieProvide.jsx";

export default function App() {

  const [movie, setMovie] = useState([]);
  const [moviRate, setMovieRate] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const handleMovieSearch = async (searchVal) => {
    setMovieSearch([]);
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchVal}&include_adult=false&language=vi&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      }
      const searchMovie = await fetch(url, options);
      const data = await searchMovie.json();
      console.log(data);
      setMovieSearch(data.results);
    } catch (error) {
      console.log(error);

    }
  }



  useEffect(() => {
    const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      }
      const url1 = 'https://api.themoviedb.org/3/movie/popular?language=vi-US&page=1';

      const url2 = 'https://api.themoviedb.org/3/movie/top_rated?language=vi-US&page=1';

      const [rest1, rest2] = await Promise.all([
        fetch(url1, options),
        fetch(url2, options)
      ]);
      const data1 = await rest1.json();
      const data2 = await rest2.json();

      setMovie(data1.results);
      setMovieRate(data2.results);
    }
    fetchMovie();
  }, []);

  return (
    <>
      <MovieProvider>
        <div className="bg-black pb-10">
          <Header onSearch={handleMovieSearch} />
          <Banner />
          {movieSearch.length > 0 ? <MovieSearch title="KET QUA TIM KIEM" data={movieSearch} /> : (
            <>
              <MovieList title="Phim Hot" data={movie} />
              <MovieList title="Phim Đề Cử" data={moviRate.slice(0, 5)} />)
            </>)
          }

        </div >
      </MovieProvider>

    </>
  )
}