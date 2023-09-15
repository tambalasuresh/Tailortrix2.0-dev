import axios from "axios";
import React, { useEffect, useState } from "react";
import "./sleeve.css";

const SleevesDisplay=({name,url,data,id,updateSleeveItem})=>{
    const [svgSleeve,setSvgSleeve]=useState(null);
    const [activeSleeve,setActiveSleeve]=useState(false);

    useEffect(()=>{
        const sleeveData=JSON.parse(localStorage.getItem("Sleeves"));
        if(sleeveData === null){
            setActiveSleeve(false);
        }
        else if(id === sleeveData.id){
            setActiveSleeve(true);
        }
        axios.get(url)
        .then(res=>{
            setSvgSleeve(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[url]);
    

    const getSleeves=(jsonData,svg_content)=>{
        const sleeveData=JSON.parse(localStorage.getItem("Sleeves"));
        if(sleeveData !== null){
            document.getElementById(sleeveData.name).classList.remove('active_sleeve');
        }

        jsonData['svg_content']=svg_content
        localStorage.setItem("Sleeves",JSON.stringify(jsonData));
        updateSleeveItem(jsonData);
        setActiveSleeve(true);
       }


    const svgWithClass = svgSleeve ? svgSleeve.replace('<svg', '<svg class="icon_item_image"') : null;
    return(
        <div className="col">
                <button className={activeSleeve ? "sleeve_btn active_sleeve" :"sleeve_btn"}  id={name}
                onClick={()=>getSleeves(data,svgWithClass)}>
                  {svgSleeve && <div dangerouslySetInnerHTML={{ __html: svgWithClass }} />}
                    <label className="sleeve_label">{name}</label>
                </button>
        </div>
    )
}
export default SleevesDisplay