export const ADD_POST = 'ADD-POST'
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
export const SET_PROFILE_PAGE = 'SET_PROFILE_PAGE'

let initialState = {
    posts: [
        {id: 1, message: 'Hello, how are you?', likesCount: '20'},
        {id: 2, message: 'My first post', likesCount: '15'}
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_PROFILE_PAGE:{
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}


export const addPostAC = () => ({type: ADD_POST})
export const onPostChangeAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile =(profile)=>({type: SET_PROFILE_PAGE, profile})

export default profileReducer