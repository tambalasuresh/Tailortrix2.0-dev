import { useState } from "react";
import "./footer.css";
import ColorItems from "../itembar/color";
import NeckItems from "../itembar/necks";

const FooterIconItems=()=>{
    const [activeIcon,setIconActive]=useState(false);
    const [isColor,setIsColor]=useState(false);
    const [isNecks,setIsNecks]=useState(false);

    const GetSleeves=(index)=>{
        setIconActive(index);
    }
    const GetPatches=(index)=>{
        setIconActive(index)
    }
    const GetNecks=(index)=>{
        setIconActive(index);
        setIsNecks(!isNecks);
        setIsColor(false);

    }
    const GetColor=(index)=>{
        setIconActive(index);
        setIsColor(!isColor);
        setIsNecks(false);
    }
    const GetFabrics=(index)=>{
        setIconActive(index)
    }

    return(
        <div>
            {isColor && <ColorItems/>}
            {isNecks && <NeckItems/>}
            <div className="icon_contianer">
                <button className={activeIcon ===1 ?
                    ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'} 
                    onClick={()=>GetSleeves(1)}>Sleeves</button>
                <button className={activeIcon ===2 ?
                    ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'} 
                    onClick={()=>GetPatches(2)}>Patches</button>
                <button className={activeIcon ===3 ?
                    ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'} 
                    onClick={()=>GetNecks(3)}>Necks</button>
                <button className={activeIcon ===4 ?
                    ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'}
                    onClick={()=>GetColor(4)}>color</button>
                <button className={activeIcon===5 ?
                    ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'} 
                    onClick={()=>GetFabrics(5)}>fabrics</button>
            </div>
        </div>
    )
}
export default FooterIconItems