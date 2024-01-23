import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";

function PostsList({ isModalVisible, toggleModal }) {
  const [postsList, setPostsList] = useState([]);

  function addPostHandler(postData) {
    setPostsList((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isModalVisible && (
        <Modal onClose={toggleModal}>
          <NewPost onAddPost={addPostHandler} onCancel={toggleModal} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post
          author={"Sheldon"}
          body={"sheldon is learning react, how cool is that"}
        />
        <Post
          author={"Leonard"}
          body={"I'm also learning it but I don't brag"}
        />
        <Post author={"Penny"} body={"WTH is react"} />
        {postsList.map((post, index) => {
          return <Post key={index} author={post.author} body={post.body} />;
        })}
      </ul>
    </>
  );
}

export default PostsList;
