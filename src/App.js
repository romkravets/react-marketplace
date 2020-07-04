import React, {useState, useEffect, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import axios from 'axios';
import Loader from './components/UI/Loader ';

function App() {
  const [posts, setPosts] = useState([]);
  const [load, setLoad] = useState(false);
  const [limit, setLimit] = useState(10);

  console.log(limit, limit);

  const onAdd = () => {
    return setLimit(limit + 10);
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
      console.log(result.data);
      setPosts(result.data);
      setLoad(true);
    };
    fetchData();
  }, [limit]);

  let postsAll = <Loader />;

  if (load) {
    postsAll = <div className="App">
      <PostList posts={posts} onAdd={onAdd}/>
  </div>
  }

  return  <Fragment>{postsAll}</Fragment>
}

export default App;
