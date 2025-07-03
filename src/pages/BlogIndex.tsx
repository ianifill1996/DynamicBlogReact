import { Link } from 'react-router-dom';
import { posts } from '../lib/posts';
import React from 'react';

export default function BlogIndex() {
  return (
    <div>
      <h1>All Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
