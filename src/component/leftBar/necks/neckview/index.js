import axios from "axios";
import React, { useEffect, useState } from "react";
import "./necks.css";

const NecksDisplay=({name,url,data,id,updateNeckItem})=>{
    const [svgNecks,setSvgNecks]=useState(null);
    const [activeNecks,setActiveNecks]=useState(false);


    useEffect(()=>{
        const neckdata=JSON.parse(localStorage.getItem("Necks"));
        if(neckdata  === null){
            setActiveNecks(false);
        }
        else if(name === neckdata.name){
            setActiveNecks(true);
        }

        axios.get(url)
        .then(res=>{
            setSvgNecks(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[url])

    const getNecks=(jsonData,svg_content)=>{
        const necksData=JSON.parse(localStorage.getItem("Necks"));
        if(necksData !== null){
            document.getElementById(necksData.name).classList.remove('active_items_Necks');
        }
        jsonData['svg_content']=svg_content;
        updateNeckItem(jsonData);
        localStorage.setItem("Necks",JSON.stringify(jsonData,svgNecks));
        setActiveNecks(true);
    }
    
    const svgWithClass = svgNecks ? svgNecks.replace('<svg', '<svg class="icon_item_image"') : null;
    return(
        <div className="col">
                <button className={activeNecks ? "necks_btn active_items_Necks":"necks_btn"}  id={name}
                 onClick={()=>getNecks(data,svgWithClass)}>
                  {svgNecks && <div dangerouslySetInnerHTML={{ __html: svgWithClass }} />}
                    <label className="necks_label">{name}</label>
                </button>
        </div>
    )
}
export default NecksDisplay