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
                ava+description
            </div>
        </div>
    )
}