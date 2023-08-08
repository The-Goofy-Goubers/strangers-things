import React, { useState, useEffect } from 'react';

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const COHORT_NAME = '2302-acc-pt-web-pt-d';


 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts');
      const data = await response.json();
      setPosts(data.data.posts);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();
}, []);

  return (
    <div>
        <div className="header">
      <h1>Stranger's Things</h1>
        </div>
      <div>
        {posts.map(post => (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

