import photo from "../assets/cover-a1d5b40.png";
import React from "react";
import s from "./profile.module.css"

export const Profile = () =>{
    return (
        <div className={s.content}>
            <img src={photo}/>
            <div>ava+description</div>
            <div>My posts</div>
            <div>New post</div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    )
}