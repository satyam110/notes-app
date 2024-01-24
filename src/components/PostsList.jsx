import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState, useEffect } from "react";
import Modal from "./Modal";

function PostsList({ isModalVisible, toggleModal }) {
  const [postsList, setPostsList] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPostsList(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);
  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPostsList((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isModalVisible && (
        <Modal onClose={toggleModal}>
          <NewPost onAddPost={addPostHandler} onCancel={toggleModal} />
        </Modal>
      )}
      {!isFetching && postsList.length > 0 && (
        <ul className={classes.posts}>
          {postsList.map((post, index) => (
            <Post key={index} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && postsList.length === 0 && (
        <div className={classes.textCenter}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div className={classes.textCenter}>
          <h2>Loading Posts ....</h2>
        </div>
      )}
    </>
  );
}

/* <ul className={classes.posts}> */
// <Post
//           author={"Sheldon"}
//           body={"sheldon is learning react, how cool is that"}
//         />
//         <Post
//           author={"Leonard"}
//           body={"I'm also learning it but I don't brag"}
//         />
//         <Post author={"Penny"} body={"WTH is react"} />
// </ul>
export default PostsList;
