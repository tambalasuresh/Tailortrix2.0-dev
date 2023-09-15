import { useState } from "react";
import FooterIconItems from "./footerbar";
import "./sideleft.css";
import IconItems from "./topbar/iconItems";
import "animate.css";
// import ItemsList from "./itembar";


const SideLeft=({getApiData})=>{
    
    return(
        <div className="sideleft_contaienr" id="LeftBar">
                   <IconItems  getApiData={getApiData}/>
                   {/* <ItemsList/> */}
                   {/* <FooterIconItems/> */}
        </div>
    )
}
export default SideLeft