import { useState } from "react";
import "./icon.css";
import BlouseItems from "../../itembar/blouse";
import ChudidharItems from "../../itembar/chudidhar";
import MensItems from "../../itembar/mens";
import OtherItems from "../../itembar/others";
import KidsItems from "../../itembar/kids";
import NeckItems from "../../itembar/necks";
import Sleeves from "../../itembar/sleeves";
import PatchesItems from "../../itembar/patches";
import ColorItems from "../../itembar/color";
import FabricItems from "../../itembar/fabrics";

const IconItems=({getApiData})=>{
    const [activeIcon,setIconActive]=useState(false);
    const [isBlouse,setIsBlouse]=useState(false);
    const [isChudidhar,setIsChudidhar]=useState(false);
    const [isKids,setIsKids]=useState(false);
    const [isMen,setIsMen]=useState(false);
    const [isOther,setIsOther]=useState(false);
    const [isColor,setIsColor]=useState(false);
    const [isNecks,setIsNecks]=useState(false);
    const [isSleeves,setIsSleeves]=useState(false);
    const [isPatches,setIsPatches]=useState(false);
    const [isFabrics,setIsFabrics]=useState(false);

    const GetBlouse=(index)=>{
        setIconActive(index);
        setIsBlouse(!isBlouse);
        setIsChudidhar(false);
        setIsMen(false);
        setIsOther(false);
        setIsNecks(false);
        setIsPatches(false);
        setIsSleeves(false);
        setIsColor(false);
        setIsFabrics(false);
        
        
    }
    const GetChudidhar=(index)=>{
        setIconActive(index);
        setIsBlouse(false);
        setIsChudidhar(!isChudidhar);
        setIsKids(false);
        setIsMen(false);
        setIsOther(false);
        setIsPatches(false);
        setIsNecks(false);
        setIsFabrics(false);
        setIsSleeves(false);

    }
    const GetMens=(index)=>{
        setIconActive(index);
        setIsMen(!isMen);
        setIsChudidhar(false);
        setIsOther(false);
        setIsBlouse(false);
        setIsKids(false);
        setIsFabrics(false);
        setIsPatches(false);
        setIsNecks(false);
        setIsSleeves(false);
        setIsColor(false);
    }
    const GetKids=(index)=>{
        setIconActive(index);
        setIsKids(!isKids);
        setIsChudidhar(false);
        setIsOther(false);
        setIsMen(false);
        setIsBlouse(false);
        setIsFabrics(false);
        setIsColor(false);
    }
    const GetOther=(index)=>{
        setIconActive(index);
        setIsOther(!isOther);
        setIsMen(false);
        setIsBlouse(false);
        setIsKids(false);
        setIsChudidhar(false);
        setIsFabrics(false);
        setIsNecks(false);
        setIsSleeves(false);
        setIsKids(false);
        setIsColor(false);
    }
    const GetSleeves=(index)=>{
        setIconActive(index);
        setIsSleeves(!isSleeves);
        setIsNecks(false);
        setIsPatches(false);
        setIsChudidhar(false);
        setIsBlouse(false);
        setIsFabrics(false);
        setIsColor(false);
        setIsOther(false);
        setIsMen(false);
        setIsKids(false);
        document.getElementById('both_btn').style.display="none";
    }
    const GetPatches=(index)=>{
        setIconActive(index);
        setIsPatches(!isPatches);
        setIsBlouse(false);
        setIsNecks(false);
        setIsSleeves(false);
        setIsColor(false);
        setIsChudidhar(false);
        setIsFabrics(false);
        setIsOther(false);
        setIsMen(false);
        setIsKids(false);
        document.getElementById('both_btn').style.display="none";
    }
    const GetNecks=(index)=>{
        setIconActive(index);
        setIsNecks(!isNecks);
        setIsColor(false);
        setIsBlouse(false);
        setIsSleeves(false);
        setIsPatches(false);
        setIsChudidhar(false);
        setIsFabrics(false);
        setIsOther(false);
        setIsMen(false);
        setIsKids(false);
        document.getElementById('both_btn').style.display="none";
    }
    const GetColor=(index)=>{
        setIconActive(index);
        setIsColor(!isColor);
        setIsNecks(false);
        setIsBlouse(false);
        setIsChudidhar(false);
        setIsPatches(false);
        setIsOther(false);
        setIsFabrics(false);
        setIsSleeves(false);
        setIsMen(false);
        setIsKids(false);
    }
    const GetFabrics=(index)=>{
        setIconActive(index);
        setIsBlouse(false);
        setIsFabrics(!isFabrics);
        setIsChudidhar(false);
        setIsColor(false);
        setIsKids(false);
        setIsNecks(false);
        setIsOther(false);
        setIsSleeves(false);
        setIsMen(false);
    }

    

    return(
        <div>
                <div className="topbar_menu">
                    <button className={activeIcon ===1 ?
                        ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'} 
                        onClick={()=>GetBlouse(1,!isBlouse)}>Blouse</button>
                    <button className={activeIcon ===2 ?
                        ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'} 
                        onClick={()=>GetChudidhar(2)}>chudidhar</button>
                    <button className={activeIcon ===3 ?
                        ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'} 
                        onClick={()=>GetMens(3)}>men's</button>
                    <button className={activeIcon ===4 ?
                        ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'}
                        onClick={()=>GetKids(4)}>kid's</button>
                    <button className={activeIcon===5 ?
                        ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'} 
                        onClick={()=>GetOther(5)}>Others</button>
                </div>

                {isBlouse && <BlouseItems getApiData={getApiData}/> }
                {isChudidhar && <ChudidharItems/>}
                {isKids && <KidsItems/>}
                {isMen && <MensItems/>}
                {isOther && <OtherItems/>}
                {isNecks && <NeckItems/>}
                {isSleeves && <Sleeves/>}
                {isPatches && <PatchesItems/>}
                {isColor && <ColorItems/>}
                {isFabrics && <FabricItems/>}
                
                
                <div className="footer_menu">
                    <button className={activeIcon ===6 ?
                        ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'} 
                        onClick={()=>GetSleeves(6)}>Sleeves</button>
                    <button className={activeIcon ===7 ?
                        ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'} 
                        onClick={()=>GetPatches(7)}>Patches</button>
                    <button className={activeIcon ===8 ?
                        ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'} 
                        onClick={()=>GetNecks(8)}>Necks</button>
                    <button className={activeIcon ===9 ?
                        ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'}
                        onClick={()=>GetColor(9)}>color</button>
                    <button className={activeIcon===10 ?
                        ' btn icon_style text-uppercase active_icon' :'btn icon_style text-uppercase'} 
                        onClick={()=>GetFabrics(10)}>fabrics</button>
                </div>
        </div>
    )
}
export default IconItems