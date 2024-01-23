import classes from './Post.module.css';
//const names = ["Sheldon", "Leonard","Rajesh", "Howard", "Penny"];
function Post(props) {
//    const chosenName = names[Math.floor((Math.random()*names.length))];
    return (
        <li className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </li>
    )
}

export default Post;