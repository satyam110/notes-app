import { useState } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function toggleModalHandler() {
    setModalIsVisible(!modalIsVisible);
  }
  return (
    <>
      <MainHeader onCreatePost={toggleModalHandler}/>
      <main>
        {/* <h1 className="text-center">Hello world (1:56:09)</h1> */}
        <PostsList isModalVisible={modalIsVisible} toggleModal={toggleModalHandler} />
      </main>
    </>
  );
}

export default App;
