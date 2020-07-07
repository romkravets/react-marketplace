import React, {useEffect, useState} from "react";
import Home from './conteiners/Home/Home';
import Header from "./components/Header/Header";

import {
    API_URL,
    API_KEY,
    IMAGE_BASE_URL,
} from "./configApi";

export const App = () => {
    const [state, setState] = useState({
        movies: [],
        loading: false,
        bannerImage: null,
        searchTerm: '',
        currentPage: 0,
        totalPages: 0,
    })

    useEffect(() => {
        const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchItems(endpoint);
    }, []);

    const fetchItems = endpoint => {
        fetch(endpoint)
            .then(result => result.json())
            .then(result => {
                setState({
                    movies: [...state.movies, ...result.results],
                    bannerImage: state.bannerImage || result.results[0],
                    loading: false,
                    currentPage: result.page,
                    totalPages: result.total_pages
                });

            });
    };

      return (
          <div className="App">
              {console.log(state)}
              <Header/>
              <Home/>
        </div>
      );
};

export default App;
