import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const BoardDetail = ({ posts, setPosts, setSelectedPost }) => {
  const { id } = useParams();
  const postId = parseInt(id);
  const selectedPost = posts.find((post) => post.id === postId);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  if (!selectedPost) {
    return <div>
      <h2>해당 게시글을 찾을 수 없습니다.</h2>
      <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
        <button>목록으로 돌아가기</button>
      </Link>
      </div>
  }

  const handleEditClick = () => {
    setIsEditing(true);
    setEditTitle(selectedPost.title);
    setEditContent(selectedPost.content);
  };

  const handleSaveEdit = () => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, title: editTitle, content: editContent } : post
    );
    setPosts(updatedPosts);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    setSelectedPost(null);
  };
  return (
    <div>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <br/>
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <br/>
          <button onClick={handleSaveEdit} >
            저장
          </button>
        </>
      ) : (
        <>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.content}</p>
          <button onClick={handleEditClick}>
            수정
          </button>
          <button onClick={handleDeleteClick}>
            삭제
          </button>
        </>
      )}
      <Link to="/" style={{ color: 'black', textDecoration: 'none' }}>
        <button>목록으로 돌아가기</button>
      </Link>
    </div>
  );
};

export default BoardDetail;
