import React, {useEffect, useState} from "react";

export const News  = () => {
    return <div>
        News
    </div>
}
/*
export const News = () => {
    const [value, setValue] = useState(0)
    const [button, setButton] = useState(true)
    console.log('SetTimeoutExample')

    useEffect(() => {
        let interval = setInterval(() => setValue(state => state + 1), 1000)
        return () => clearInterval(interval)
    }, [])
    const onClickHandler = () => {

        setButton(!button)
    }
    return <div>
        Hello,
        counter: {value}
        <button onClick={onClickHandler}>{button ? 'start' : 'stop'}</button>
    </div>
}
*/
