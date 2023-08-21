import React, { useState, useEffect } from "react";
import SinglePost from "./SinglePost";
import PostModal from "./PostModal";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const COHORT_NAME = "2302-ACC-PT-WEB-PT-D";

  // GET post function
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts"
        );
        const data = await response.json();
        setPosts(data.data.posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <div>
      <div className="header">
        {/* <h1>Stranger's Things</h1> */}
      </div>
      <div>
        {posts.map((post) => (
          <div key={post._id}>
          <SinglePost
          post={post}
          currentUser={currentUser}
          onClick={() => handlePostClick(post)}
          />
          </div>
        ))}
      </div>
      {selectedPost && (
        <PostModal
        post={selectedPost}
        currentUser={currentUser}
        onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
};
