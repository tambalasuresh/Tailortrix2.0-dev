import React, { useState } from "react";
import "./homepage.css";
import NavBarHome from "./navbar";
import { useNavigate } from "react-router-dom";



const HomePage=()=>{
   
    
    return(
        <div className="container-fluid main_backImage">
           <NavBarHome />
            <div className="row mt-5 ">
                <div className="col-lg-3">
                </div>
                <div className="col-lg-6 mt-5">
                    <h1 className="text-center text-uppercase h1_style">TailorTrix</h1>
                    <p className="para_label">TailorTrix is a patent-pending online fashion design 
                        software that helps you create unlimited designs easier </p>
                </div>
                <div className="col-lg-3">
                </div>

            </div>
            <div className="row mt-2">
                <div className="col-lg-1">
                </div>
                <div className="col-lg-10 center">
                    <div className="text-center">
                    <button className="welcome_btn"
                   >Blouse</button>
                    <button className="welcome_btn">Chudidhar</button>
                    <button className="welcome_btn">Men's</button>
                    <button className="welcome_btn">KId's</button>
                    </div>
                </div>
                <div className="col-lg-1">
                </div>

            </div>
        </div>
    )
}
export default HomePage