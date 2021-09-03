export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_IS_FETCHING = 'SET_IS_FETCHING'
export const SET_PROFILE = 'SET_PROFILE'


let InitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null,
    isFetching: false
}
const authReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.boolean
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }

        default :
            return state
    }
}

export const setUserData = (id, email, login) =>({type: SET_USER_DATA, data:{id, email, login}})
export const setIsFetching = (boolean)=>({type: SET_IS_FETCHING, boolean})
export const setProfile = (profile)=>({type: SET_PROFILE, profile})

export default authReducer