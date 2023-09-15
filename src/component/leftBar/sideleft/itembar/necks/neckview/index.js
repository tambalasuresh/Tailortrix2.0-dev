import axios from "axios";
import React, { useEffect, useState } from "react";

const NeckView=({name,url,data})=>{
    const [svgContent, setSvgContent] = useState(null);
    const [neckName, setneckName] = useState(null);

    useEffect(()=>{
        axios.get(url)
        .then(res=>{
            setSvgContent(res.data);
            setneckName(name);
        })
        .catch(err=>{
            console.log(err);
        })
    })

    const CacheNecks=[
        {
          cacheName: 'Necks', cacheData: 'Necks',
          url: 'url'
      }
    ]

    const getNecksPart=async (name,cacheList,jsonData)=>{
        document.getElementById('getSideRight').style.display="block";
        document.getElementById('back_svg').style.display="none";
        const svg_image_container_front = document.getElementsByClassName('svg_image_front');
        const svgWithClass = svgContent ? svgContent.replace('<svg', '<svg className="svg_image_front" id="front_image"') : null;
        svg_image_container_front[0].innerHTML = svgWithClass;

        
        sessionStorage.setItem("Neck", JSON.stringify(jsonData));

        // const view=sessionStorage.getItem("neck");
        // console.log(view);
        // const FrontSvgName_div=document.getElementsByClassName("front_name");
        // const FrontName = neckName ? neckName.replace('<h5', '<h5 className="front_name" id="front"') : null;
        // FrontSvgName_div[0].innerHTML=FrontName;

       
    }

    const svgWithClass = svgContent ? svgContent.replace('<svg', '<svg class="icon_item_image"') : null;

    return(
        <> 
            <button className="item_list_button" 
            onClick={()=>getNecksPart(name,CacheNecks,data)}>
                {svgContent && <div dangerouslySetInnerHTML={{ __html: svgWithClass }} />}
                <label className="item_label_style">{name}</label>
            </button>
        </>
    )
}
export default NeckView