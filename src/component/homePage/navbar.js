import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.css"


const NavBarHome=()=>{
    
    return(
        <div>
             <div className="row p-1 bg-white">
                <div className="col-lg-3">
                    <Link to="/" className="link_style">
                    <h3 className="text-uppercase logo_style">TailorTrix</h3>
                    </Link>
                </div>
                <div className="col-lg-7">
                    {/* <h3>TailorTrix</h3> */}
                </div>
                <div className="col-lg-2 ">
                   
                    <div className="mt-1">
                        <Link to="/login">
                           <button className="btn btn-dark btn-sm mx-3">Sign In</button>
                        </Link>
                    </div>
                   
                </div>
            </div>

        </div>
    )
}
export default NavBarHome