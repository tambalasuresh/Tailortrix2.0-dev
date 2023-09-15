import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePage";
import LoginPage from "./homePage/login";
import AllPages from "./allpages";
import { AuthProvider } from '../component/authContext';

const RoutingPage=()=>{
      

    return(
        <BrowserRouter>
           <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<HomePage />}/>
                    <Route exact path="/login" element={<LoginPage />}/>
                    <Route exact path="/design" element={<AllPages />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    )
}
export default RoutingPage