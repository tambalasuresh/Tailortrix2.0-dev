import React, { useEffect, useRef, useState } from "react";
import "./color.css";

const ColorItems=()=>{
    const buttonContainerRef = useRef(null);
    const [btnCount,setBtnCount]=useState('');

      useEffect(()=>{
        const buttonsInContainer = buttonContainerRef.current.querySelectorAll('button');
        setBtnCount(buttonsInContainer.length);
    console.log(`Number of buttons: ${btnCount}`);
  }, []);



 

    const GetColor=(color,backcolor)=>{
        
        const FrontImage=document.getElementById("front_svg");
        const BackImage=document.getElementById("back_svg");

        console.log("Front Image",FrontImage)





    // const ColorChange=document.getElementsByClassName("p_color")[0];
    // ColorChange.style.backgroundColor=color;

    
    // console.log("svg one",FrontImage.children[0].childNodes[1].children[1]);
    // FrontImage.children[0].style.fill=color;
    // FrontImage.children[0].childNodes[1].children[1].style.fill=backcolor;
    // BackImage.children[0].style.fill=color;
    // BackImage.children[0].childNodes[1].children[1].style.fill=backcolor;

    // this is i am iploading file color
    // FrontImage.children[0].children[0].children[0].style.fill=backcolor;
    // FrontImage.children[0].children[0].children[1].style.fill=color;
    // BackImage.children[0].children[0].children[0].style.fill=backcolor;
    // FrontImage.children[0].children[1].style.fill=backcolor;
    }

    return(
        <div>
            <div className="getBtn_count">
                <p></p>
                <p className="color_label">Total Items  
                <span className="span_color">  {btnCount}</span></p>
            </div>
            <div className="color_container" ref={buttonContainerRef}>
                <button className="color_button" onClick={()=>GetColor('pink','rgb(248, 31, 67)')}>
                    <div className="color1"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('aqua','rgb(79, 113, 113)')}>
                    <div className="color2"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('aquamarine','rgb(69, 100, 90)')}>
                    <div className="color3"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('azure','rgb(42, 99, 99)')}>
                    <div className="color4"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('blue','rgb(127, 127, 173)')}>
                    <div className="color5"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('blueviolet','rgb(70, 57, 82)')}>
                    <div className="color6"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('brown','rgb(237, 164, 164)')}>
                    <div className="color7"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('burlywood','rgb(177, 109, 21)')}>
                    <div className="color8"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('cadetblue','rgb(47, 231, 237)')}>
                    <div className="color9"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('chartreuse','rgb(82, 104, 59)')}>
                    <div className="color10"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('chocolate','rgb(246, 204, 174)')}>
                    <div className="color11"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('cornflowerblue','rgb(70, 83, 106)')}>
                    <div className="color12"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('crimson','rgb(240, 172, 185)')}>
                    <div className="color13"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('cyan','rgb(187, 244, 244)')}>
                    <div className="color14"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('darkcyan','rgb(158, 230, 230)')}>
                    <div className="color15"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('darkmagenta','rgb(234, 144, 234)')}>
                    <div className="color16"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('deeppink','rgb(201, 137, 171)')}>
                    <div className="color17"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('deepskyblue','rgb(82, 118, 129)')}>
                    <div className="color18"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('dimgray','rgb(232, 205, 205)')}>
                    <div className="color19"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('dodgerblue','rgb(66, 92, 118)')}>
                    <div className="color20"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('firebrick','rgb(249, 168, 168)')}>
                    <div className="color21"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('khaki','rgb(91, 85, 28)')}>
                    <div className="color22"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('forestgreen','rgb(154, 242, 154)')}>
                    <div className="color23"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('gold','rgb(219, 212, 168)')}>
                    <div className="color24"></div>
                </button>
                <button className="color_button" onClick={()=>GetColor('goldenrod','rgb(160, 145, 106)')}>
                    <div className="color25"></div>
                </button>
                

            </div>
        </div>
    )
}
export default ColorItems