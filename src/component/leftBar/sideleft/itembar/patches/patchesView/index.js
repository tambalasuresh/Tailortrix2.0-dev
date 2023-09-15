import axios from "axios";
import React, { useEffect, useState } from "react";


const PatchesView=({name,url,data})=>{
    const [svgContent, setSvgContent] = useState(null);

    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            setSvgContent(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    })

    const getSleevesPart=(jsonData)=>{
        document.getElementById('getSideRight').style.display="block";
        document.getElementById('back_svg').style.display="none";
        const svg_image_container_front = document.getElementsByClassName('svg_image_front');
        const svgWithClass = svgContent ? svgContent.replace('<svg', '<svg className="svg_image_front" id="front_image"') : null;
        svg_image_container_front[0].innerHTML = svgWithClass;

        sessionStorage.setItem("Patch", JSON.stringify(jsonData));   
    }
    const svgWithClass = svgContent ? svgContent.replace('<svg', '<svg class="icon_item_image"') : null;
    return(
        <>
        <button className="item_list_button" 
               onClick={()=>getSleevesPart(data)}>
                {svgContent && <div dangerouslySetInnerHTML={{ __html: svgWithClass }} />}
                <label className="item_label_style">{name}</label>
            </button>
        </>
    )
}
export default PatchesView