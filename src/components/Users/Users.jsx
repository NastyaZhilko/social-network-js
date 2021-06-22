import React from "react";
import * as axios from "axios"
import profile from "../../assets/images/profile.png"
import s from "./Users.module.css"

export const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            debugger
            props.setUsers(response.data.items)
        })
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <h3>{u.name}</h3>
                <div>
                    <img className={s.img} src={u.photos.small != null ? u.photos.small : profile}/>
                </div>
                <div>{u.status != null ? u.status : u.status='No status'}</div>
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
        </div>

    )
}