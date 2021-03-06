import React from 'react'
import styles from './UserProfile.module.css'
import Preloader from "../../common/Preloader/Preloader";
import UserProfileStatusHooks from "./UserProfileStatusHooks";

let UserProfile = (props) => {
    if(!props.profile)
    {
        return Preloader;
    }
    if (props.isFetching) {
        return <div className={styles.userProfile}><Preloader/></div>
    }
    else {
        return <div className={styles.userProfile}><img src={props.profile.photos.small || "https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png"} width="100px" height="100px"/>
            <UserProfileStatusHooks status = {props.status} updateStatus = {props.updateStatus}/>
            <div>{props.profile.fullName}</div></div>
    }

}

export default UserProfile;
