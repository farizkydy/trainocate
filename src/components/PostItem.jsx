import React from 'react';

const PostItem = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <hr />
    </div>
  );
};

export default PostItem;
