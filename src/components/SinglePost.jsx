import React, {useState, useEffect} from "react";
import PostModal from "./PostModal";


export default function SinglePost({post, currentUser}) {
const [showModal, setShowModal] = useState(false);
const COHORT_NAME = "2302-ACC-PT-WEB-PT-D"

useEffect(() => {
const fetchData = async () => {
    try {
        const response = await fetch(
            `https://strangers-things.herokuapp.com/api/${COHORT_NAME}/posts`
        );
        const data = await response.json();
       //setPosts(data.data.posts);
    } catch (error) {
        console.error("Errorr fetching data:", error);
}
};

fetchData();
}, []);
//console.log(posts)

const handleOpenModal = () => {
 setShowModal(true);
};

const handleCloseModal = () => {
    setShowModal(false);
};


console.log(post)
return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.price}</p>

      {currentUser && currentUser.username === post.author.username && (
        <div>
          <button onClick={handleDeletePost}>Delete Post</button>
          <button onClick={handleEditPost}>Edit Post</button>
        </div>
      )}

      <button onClick={handleOpenModal}>View Details</button>

      {showModal && (
        <PostModal 
        post={post}
        currentUser={currentUser}
        onClose={handleCloseModal}
        />
      )}
    </div>
  );
}