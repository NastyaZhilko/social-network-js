import './App.css';
import React from "react";
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = (props) => {

    return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                   {/* <Route exact path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>*/}

                    <Route exact path='/dialogs' render={()=><DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={()=><ProfileContainer/>}/>
                    <Route path='/users' render={()=><UsersContainer/>}/>
                    <Route path={"/news"} render={()=><News/>}/>
                    <Route path={"/music"} render={()=><Music/>}/>
                    <Route path={"/settings"} render={()=><Settings/>}/>


                </div>
            </div>

    )

}
export default App;
