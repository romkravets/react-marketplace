import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/PostList';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState({
    data: [],
  });
  const [load, setLoad] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
      'https://jsonplaceholder.typicode.com/posts',
    );
      console.log(result.data);
      setPosts(result.posts);
    };
    fetchData();
  }, []);
 


// useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(
//         (result) => {
//          console.log(result);
//         },
//         // Примітка: важливо обробляти помилки саме тут,
//         // а не в блоці catch (), щоб не перехоплювати
//         // виключення з помилок в самих компонентах.
//         (error) => {
          
//         }
//       )
// }, [])



  return (
    <div className="App">
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
