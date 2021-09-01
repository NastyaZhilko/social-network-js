import React from "react";
import s from "./Users.module.css";
import profile from "../../assets/images/profile.png";
import {createPages} from "../utils/pagesCreator";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    createPages(pages, pagesCount, props.currentPage)
    return (
        <div className={s.blockUsers}>
            <div className={s.search}>
                <input
                    type="text"
                    placeholder={"Enter user name"}
                />
                <button onClick={() => {
                }}>Search
                </button>
            </div>
            {props.users.map(u => <div key={u.id} className={s.userContainer}>
                <h3>User name: {u.name}</h3>
                <div>
                    <img className={s.img} src={u.photos.small != null ? u.photos.small : profile}/>
                </div>
                <div>Status: {u.status != null ? u.status : u.status = 'No status'}</div>
                <div>
                    {
                        u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Unfollow</button>
                    }
                </div>
            </div>)}
            <div className={s.pages}>
                {pages.map((p, index) =>
                    <span key={index}
                          className={props.currentPage === p ? s.currentPage : s.page}
                          onClick={() => {
                              props.onPageChanged(p)
                          }}>{p}</span>)}
            </div>
        </div>
    )
}
export default Users