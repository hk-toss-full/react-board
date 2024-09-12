import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Boards from './components/Boards';
import BoardDetail from './components/BoardDetail.jsx';
import { api } from './api/index.js';
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';
import { getBoards } from './api/boards.js';

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const getPosts = async () => {
    const data = await getBoards();
    setPosts(data)
  }
  useEffect(() => {
    getPosts()
  }, [])
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<Boards posts={posts} setPosts={setPosts} setSelectedPost={setSelectedPost} />} 
        />
        <Route 
          path="/Boards/:id" 
          element={<BoardDetail posts={posts} setPosts={setPosts} setSelectedPost={setSelectedPost} />}
        />
        <Route
          path='/register'
          element={<Register/>}
        />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
};

createRoot(document.getElementById('root')).render(
    <Main />
);
