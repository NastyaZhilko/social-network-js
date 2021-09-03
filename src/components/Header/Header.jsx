import logo from "../../assets/react-icon.svg";
import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <header className={s.header}>
            <img src={logo}/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>
                        <span>{props.login}</span>
                    </div>
                    :
                    <NavLink to={'/login'}>
                        Login
                    </NavLink>
                }
            </div>
        </header>


    )
}