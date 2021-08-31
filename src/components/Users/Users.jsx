import React from "react";
import * as axios from "axios"
import profile from "../../assets/images/profile.png"
import s from "./Users.module.css"
import {createPages} from "../utils/pagesCreator";

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (currentPage) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        createPages(pages, pagesCount, this.props.currentPage)
      /*  for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }*/

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
                {this.props.users.map(u => <div key={u.id} className={s.userContainer}>
                    <h3>User name: {u.name}</h3>
                    <div>
                        <img className={s.img} src={u.photos.small != null ? u.photos.small : profile}/>
                    </div>
                    <div>Status: {u.status != null ? u.status : u.status = 'No status'}</div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Unfollow</button>
                        }
                    </div>
                </div>)}
                <div className={s.pages}>
                    {pages.map((p, index) =>
                        <span key={index}
                        className={this.props.currentPage === p ? s.currentPage : s.page}
                                          onClick={() => {
                                              this.onPageChanged(p)
                                          }}>{p}</span>)}
                </div>
            </div>
        )
    }
}

export default Users