import React, { useState } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import NavBarLogin from "./loginnavbar";
import { useAuth } from '../authContext';

const LoginPage=()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [registrationData,setRegistrationData]=useState({
        Name:"",Email:"",Number:"",Address:""
    })
    const [createAccount,setCreateAccount]=useState(false);
    const { isAuthenticated, login } = useAuth();
    
    const navigate=useNavigate();
    const getCreateAccount=()=>{
        setCreateAccount(true);
    }

    const handleFrom=(e)=>{
        e.preventDefault();
        const inputName = e.target.name;
        const inputValue = e.target.value;

        setRegistrationData({
            ...registrationData,
            [inputName]: inputValue,
          })
          localStorage.setItem("RegistrationData",JSON.stringify(registrationData))
    }
    const getRegistration=()=>{
        alert("Registration Successfully")
        setCreateAccount(false);
        

    }   
    const getLoginHere=(e)=>{
         e.preventDefault();
         const data={
            name:"Suresh",
            password:"123456"
         }
         if(data){
            alert("Login Successfully");
            login();
            localStorage.setItem("LoginData",JSON.stringify(data));
            navigate("/design");
         }
         else{
            alert('Login failed. Please check your credentials.')
         }  
    }
    return(
        <div className="container-fluid login_container">
         <NavBarLogin />
            <div className="row mt-5">
                <div className="col-lg-12">
                    <div className="row mt-5">
                        <div className="col-lg-1">
                        </div>
                        <div className="col-lg-5 text-center">
                           <h1 className="text-uppercase text-warning">TailorTrix</h1>
                           <p className="para_label_login">TailorTrix is a patent-pending online fashion design 
                                 software that helps you create unlimited designs easier </p>
                        </div>
                        <div className="col-lg-5">
                            <div className="row">
                                <div className="col-lg-2">
                                </div>
                                <div className="col-lg-8 form_style_container">
                                    {login && 
                                        <form onSubmit={getLoginHere}>
                                            <div className="input_div">
                                                <label className="login_label mx-2">UserName<span className="text-danger"> *</span></label>
                                                <input type="text" className="form-control mb-2" placeholder="Enter UserName"
                                                onChange={(e)=>setName(e.target.value)}/>
                                            </div>
                                            <div className="input_div">
                                                <label className="login_label mx-2">Password <span className="text-danger"> *</span></label>
                                                <input type="password" className="form-control" placeholder="Enter Password"
                                                onChange={(e)=>setPassword(e.target.value)}/>
                                            </div>
                                            <div className="input_div mt-2">
                                                <button type="submit"  className="btn btn-success" onSubmit={getLoginHere}>Login</button>
                                            </div>
                                            <hr/>
                                            <div className="text-center">
                                                <button className="btn btn-dark" onClick={getCreateAccount}>Create Your Account</button>
                                            </div>
                                        </form>
                                          }
                                        {createAccount && 
                                        <form onSubmit={getRegistration}>
                                            <h4 className="text-center text-success">Create Your Account</h4>
                                            <div>
                                                <label className="login_label mx-2">Name<span className="text-danger"> *</span></label>
                                                <input type="text" className="form-control text-capitalize"
                                                name="Name" onChange={handleFrom}
                                                 placeholder="Enter Your Name"/>
                                            </div>
                                            <div>
                                                <label className="login_label mx-2">Email<span className="text-danger"> *</span></label>
                                                <input type="text" className="form-control"
                                                name="Email" onChange={handleFrom}
                                                placeholder="Enter Your Gmail"/>
                                            </div>
                                            <div>
                                                <label className="login_label mx-2">Phone Number<span className="text-danger"> *</span></label>
                                                <input type="number" className="form-control"
                                                name="Number" onChange={handleFrom}
                                                placeholder="Enter Youer Number"/>
                                            </div>
                                            <div>
                                                <label className="login_label mx-2">Address<span className="text-danger"> *</span></label>
                                                <input type="text" className="form-control text-capitalize"
                                                name="Address" onChange={handleFrom}
                                                placeholder="Enter Your Address"/>
                                            </div>
                                            <div className="text-center mt-3">
                                                <button className="btn btn-dark text" type="submit" 
                                               >Registration</button>
                                            </div>
                                        </form>
                                       }
                                </div>
                                <div className="col-lg-2">
                                </div>
                           </div>
                        </div>
                        <div className="col-lg-1">
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}
export default LoginPage