import logo from "../../assets/react-icon.svg";
import React from "react";
import s from "./Header.module.css"

export const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo}/>
        </header>
    )
}