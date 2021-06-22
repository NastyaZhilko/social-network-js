import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css";

export const MyPosts = (props) => {
    let state = props.profilePage
    let newPostElement = React.createRef()

    let addPost = () => {
        props.addNewPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            <h3 className={s.main}>My posts</h3>
            <div className={s.block}>
                <div className={s.text}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={state.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {state.posts.map((p) => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)}
        </div>
    )
}