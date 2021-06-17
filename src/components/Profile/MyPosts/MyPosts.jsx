import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
export const MyPosts = () => {
    return (
        <div>
            <div>My posts</div>
            <div className={s.form}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
             <Post message='Hello, how are you?' likeCount='20'/>
             <Post message='My first post' likeCount='15'/>
            </div>
        </div>
    )
}