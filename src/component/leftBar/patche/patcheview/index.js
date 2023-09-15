import axios from "axios";
import React, { useEffect, useState } from "react";
import "./patche.css";

const PatcheDisplay=({name,url,id,data,updatePatcheItem})=>{
    const [svgPatche,setSvgPatche]=useState(null);
    const [activePatche,setActivePatche]=useState(false);


    useEffect(()=>{
        const patcheData=JSON.parse(localStorage.getItem("Patche"));
        if(patcheData === null){
            setActivePatche(false);
        }
        else if(id === patcheData.id){
            setActivePatche(true);
        }

        axios.get(url)
        .then(res=>{
            setSvgPatche(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[url]);

    const getPatcheItem=(jsonData,svg_content)=>{
        const patcheData=JSON.parse(localStorage.getItem("Patche"));
        if(patcheData !== null){
            document.getElementById(patcheData.name).classList.remove('active_patche');
        }
        jsonData["svg_content"]=svg_content;
        localStorage.setItem("Patche",JSON.stringify(jsonData));
        setActivePatche(true);
        updatePatcheItem(jsonData);
    }


    const svgWithClass = svgPatche ? svgPatche.replace('<svg', '<svg class="icon_item_image"') : null;
    return(
        <div className="col">
                <button className={activePatche ? "Patche_btn active_patche":"Patche_btn"} 
                onClick={()=>getPatcheItem(data,svgWithClass)} id={name}>
                  {svgPatche && <div dangerouslySetInnerHTML={{ __html: svgWithClass }} />}
                    <label className="Patche_label">{name}</label>
                </button>
        </div>
    )
}
export default PatcheDisplay