import photo from "../../../assets/cover-a1d5b40.png";
import React from "react";
import Preloader from "../../common/preloader";

export const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img src={photo}/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                <div>About me: {props.profile.aboutMe}</div>
                <div>Name: {props.profile.fullName}</div>
            </div>
        </div>
    )
}

