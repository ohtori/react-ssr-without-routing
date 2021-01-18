import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function PostsComponent({ initialData }) {
  const initialState = initialData || [];
  const [posts, setPosts] = useState(initialState);
  useEffect(() => {
    if (!posts.length) {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(response => response.json())
      .then(result => setPosts(result))
      .catch(e => console.log(e));
    }
  }, []);

  return(
    <ul>
      {posts.map(post => <li>{post.title}</li>)}
    </ul>
  );
}