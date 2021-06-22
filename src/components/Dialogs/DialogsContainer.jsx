import React from "react";
import {addMessageAC, onMessageChangeAC} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";


/*export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().dialogsPage

                    const addMessage = () => {
                        store.dispatch(addMessageAC())
                    }

                    const onMessageChange = (body) => {
                        store.dispatch(onMessageChangeAC(body))
                    }
                    return <Dialogs
                        updateNewMessageBody={onMessageChange}
                        sendMessage={addMessage}
                        dialogsPage={state}
                    />
                }
            }
        </StoreContext.Consumer>
    )
}*/

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(onMessageChangeAC(body))
        },
        sendMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
