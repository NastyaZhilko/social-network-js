import logo from "../../assets/react-icon.svg";
import React from "react";
import s from "./header.module.css"

export const Header = () => {
  return (
    <header className={s.header}>
        <img src={logo}/>
    </header>
  )
}