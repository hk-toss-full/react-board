import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../src/App.css'


const Boards = ({ posts, setPosts, setSelectedPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddPost = () => {
    if (title && content) {
      const idList = posts.map(post => post.id).sort((a, b) => a - b);
      const newId =  (idList.find((element)=>element > idList.indexOf(element)+1))-1 || idList.length + 1;
      const newPost = {
        id: newId,  // 비어있는 가장 작은 ID 부여
        title,
        content
      };
      setPosts([...posts, newPost]);
      setTitle('');
      setContent('');
    }
  };

  return (
    <div>
      <h2>게시글 작성</h2>
      <hr/>
      <br/>
      <input
        type="text"
        placeholder="제목"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br/><br/>
      <textarea
        placeholder="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br/>
      <button onClick={handleAddPost}>
        등록
      </button>

      <h3>게시글 리스트</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/Boards/${post.id}`} onClick={() => setSelectedPost(post)}>
              <h4>{post.title}</h4>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Boards;
