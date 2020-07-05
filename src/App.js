import React, {useState, useEffect, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import axios from 'axios';
import Loader from './components/UI/Loader ';
import Search from "./components/UI/Search";

function App() {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);
  const [limit, setLimit] = useState(10);

  const onAdd = () => {
    return setLimit(limit + 10);
 }

 const onSearch = value => {
        if (value === '') {
            setPosts(posts);
        } else {
            const filterPosts = posts.filter(post => post.title.includes(value))
                return (
                    setPosts(filterPosts)
                )
        }
    }


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
      'https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: limit,
         }
      }
    );
      setPosts(result.data);
      setLoad(true);
    };
    fetchData();
  }, [limit]);

  let postsAll = <Loader />;

  if (load) {
    postsAll = (
        <div className="App">
            <Search onSearch={onSearch}/>
            <PostList {...{posts}} onAdd={onAdd}/>
        </div>
    )
  }

  return  <Fragment>{postsAll}</Fragment>
}

export default App;
