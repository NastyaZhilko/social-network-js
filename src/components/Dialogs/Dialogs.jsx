import React from "react";
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs = (props) => {
    let state = props.dialogsPage
    let addMessage = () => {
        props.sendMessage()
    }

    const onMessageChange = (e) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {state.messages.map((m) => <Message message={m.message} id={m.id}/>)}
            </div>
            <div>
                <div>
                    <textarea onChange={onMessageChange} value={state.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage}>add message</button>
                </div>
            </div>
        </div>
    )
}