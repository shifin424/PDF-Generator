import React from "react";
import {Route , Routes} from 'react-router-dom'
import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from '../Pages/LoginPage/LoginPage'
import SignUpPage from "../Pages/SignUpPage/SignUpPage";

const UserRoutes = () =>{
    return(
        <div>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/sign-up" element={<SignUpPage/>}></Route>
            </Routes>

        </div>
    )
}

export default UserRoutes;