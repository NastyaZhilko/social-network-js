export const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
export const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 'Nick'},
        {id: 2, name: 'Pasha'},
        {id: 3, name: 'Lena'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Tom'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'}
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.body
            }

        case ADD_MESSAGE: {
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 4, message: newMessage}]
            }
        }
        default:
            return state
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE})

export const onMessageChangeAC = (body) => ({type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default dialogsReducer