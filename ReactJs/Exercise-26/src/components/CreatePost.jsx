import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

const CreatePost = () => {
  const { addPost } = useContext(PostsContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    addPost({ title, content });
    navigate('/');
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default CreatePost;