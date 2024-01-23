import classes from "./NewPost.module.css";
import { useState } from "react";


function NewPost({ onCancel, onAddPost}) {
    const [text, setText] = useState("");
    const [name, setName] = useState("");
  
    function textChangeHandler(event) {
      setText(event.target.value);
    }
  
    function nameChangeHandler(event) {
      setName(event.target.value);
    }
  
    function submitHandler(event){
        event.preventDefault();
        const postData = {
            body: text,
            author: name
        }
        onAddPost(postData)
        onCancel()
    }
    return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={textChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={nameChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
