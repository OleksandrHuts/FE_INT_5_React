import { useEffect, useState } from 'react';
import ResultsCount from '../components/ResultsCount';
import SearchInput from '../components/SearchInput';
import MovieGrid from '../components/MovieGrid';

const KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNzc1N2M3ODlmMTQ0MWIwMDllZjA2MDkyNmRhMjMxZCIsIm5iZiI6MTcyOTYyMjI0Ni4wMTM1MTcsInN1YiI6IjY3MTdmMDNhMjJmMTRhMGM1ZDg1NzE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Nk3GE9qZFAVwcX4RRz5-suNbgnxXmiG5zYpycc6bhw';
const BASE_URL = 'https://api.themoviedb.org/3/movie';
const BASE_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie';


export default function Home() {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${KEY}`
        }
    };

    const getPopular = () => {
        setIsLoading(true);
        setMovies([]);
        fetch(BASE_URL + '/popular?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => {
                setMovies(res.results);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    const findMovie = () => {
        setIsLoading(true);
        setMovies([]);
        fetch(BASE_SEARCH_URL + '?query=' + searchQuery, options)
            .then(res => res.json())
            .then(res => {
                setMovies(res.results);
                setIsLoading(false);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getPopular();
    }, []);

    return (
        <div className='home container'>
            <SearchInput
                getPopular={getPopular}
                findMovie={findMovie}
                setSearchQuery={setSearchQuery} />
                <ResultsCount moviesAmount={movies.length} />
            {isLoading ? <h2>Loading...</h2> : <MovieGrid movies={movies} />}
            
        </div>
    )
}