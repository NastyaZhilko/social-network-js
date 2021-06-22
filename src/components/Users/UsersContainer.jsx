import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsers, unFollowAC} from "../../Redux/users-reducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId) =>{
            dispatch(unFollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsers(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)