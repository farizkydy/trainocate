import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } from '../redux/actions/postActions';
import axios from 'axios';
import PostItem from './PostItem';

function Home() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.post);

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch(fetchPostsRequest());
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(fetchPostsSuccess(response.data));
      } catch (err) {
        dispatch(fetchPostsFailure(err.message));
      }
    };

    fetchPosts();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Home;