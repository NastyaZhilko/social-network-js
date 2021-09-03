import React from "react";
import {setIsFetching, setProfile, setUserData} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import * as axios from "axios"
import {Header} from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    this.props.setUserData(id, email, login)
                    this.props.setIsFetching(false)
                }
            })

    }

    render() {
        return (
            <Header {...this.props} profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    id: state.auth.id
})

export default connect(mapStateToProps, {setUserData, setIsFetching, setProfile})(HeaderContainer)
