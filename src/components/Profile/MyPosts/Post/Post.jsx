import React from "react";
import ava from "../../../../assets/ava.jpg"
import like from "../../../../assets/like.png"
import s from "./Post.module.css"

export const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={ava}/>
            {props.message}
            <div className={s.like}>
                <img src={like}/>
                {props.likeCount}
            </div>
        </div>
    )
}