import React from "react";
import {addPostAC, onPostChangeAC} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";

/*export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState()

                    let addPost = () => {
                        store.dispatch(addPostAC())
                    }
                    let onPostChange = (text) => {
                        store.dispatch(onPostChangeAC(text))
                    }

                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addNewPost={addPost}
                        posts={state.profilePage.posts}
                        newPostText={state.profilePage.newPostText}
                    />
                }}
        </StoreContext.Consumer>
    )
}*/

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) =>{
    return {
        updateNewPostText: (text)=>{
            dispatch(onPostChangeAC(text))
        },
        addNewPost: () => {
            dispatch(addPostAC())
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)