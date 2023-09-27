import * as React from 'react';
import Navbar from './Components/Navbar';
import PostPage from './Components/PostPage';
import api from './Api/Api'
import { useEffect, useState } from 'react';
function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
        console.log(posts)
      }
      catch {
        console.log("error")
      }
    }
    fetchData();
  }, [open])
  return (
    <div className="App">
      <Navbar open={open} setOpen={setOpen} search={search} setSearch={setSearch} />
      {
        posts && <PostPage posts={posts.filter(
        (post) => ((post.title).toLowerCase()).includes(search.toLowerCase()))}
        open={open}
        setOpen={setOpen}
        setPosts={setPosts}
      />
      }

    </div>
  );
}

export default App;
