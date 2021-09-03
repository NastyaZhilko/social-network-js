import React from "react";
import s from "./Users.module.css";
import profile from "../../assets/images/profile.png";
import {createPages} from "../utils/pagesCreator";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

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
                    <NavLink to={'/profile/' + u.id}>
                        <img className={s.img} src={u.photos.small != null ? u.photos.small : profile}/>
                    </NavLink>
                </div>
                <div>Status: {u.status != null ? u.status : u.status = 'No status'}</div>
                <div>
                    {
                        u.followed
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                    {
                                        withCredentials: true,
                                        headers:
                                            {"API-KEY": "5562f413-fdfb-4253-9584-34a31cc657d3"}
                                    }
                                )

                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unFollow(u.id)
                                        }
                                    })
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers:
                                            {"API-KEY": "5562f413-fdfb-4253-9584-34a31cc657d3"}
                                    })

                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }
                                    })
                            }}>Follow</button>
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