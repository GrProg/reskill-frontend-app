import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './SinglePostPreview.scss';

const SinglePostPreview = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get('http://localhost:3000/posts/1'); // Fetch the first post for preview
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchPost();
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="single-post-preview">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      {post.photo && <img src={post.photo.url} alt={post.title} />}
    </div>
  );
};

export default SinglePostPreview;
