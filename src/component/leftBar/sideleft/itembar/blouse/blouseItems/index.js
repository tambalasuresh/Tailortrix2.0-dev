import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import "./blouseitems.css";
import SidebarRight from "../../../../sideright";
import BigSvgComponent from "../../../../sideright/sidebarbody";



const BlouseItemsList=({id,name,frontPath,BackPath,data,getApiData})=>{
    const [svgContent, setSvgContent] = useState(null);
    const [backSvgContent, setBackSvgContent] = useState(null);
    const [FrontSvgnName, setFrontSvgName] = useState(null);
    const [view, setView] = useState(0);
    
    const [itemId,setItemId]=useState(null);

   


    const baseUrl='http://api.tailortrix.com';

    const FrontGetSvg=async (url,name,id)=>{
        try {
          const response = await axios.get(baseUrl+url);
          setSvgContent(response.data);
          setFrontSvgName(name);
          setItemId(id);
          
        } catch (error) {
          console.error('Error fetching SVG content:', error);
        }
      };

    const BackGetSvg=async (url)=>{
    
        try {
          const response = await axios.get(baseUrl+url);
          setBackSvgContent(response.data);
        } catch (error) {
          console.error('Error fetching SVG content:', error);
        }
      };

    useEffect(() => {
        FrontGetSvg(frontPath,name,id);
        BackGetSvg(BackPath)
      }, []);

    const getBigSvgImage=(id,name,jsonData)=>{
    

     
        document.getElementById('getSideRight').style.display="block";
        document.getElementById('back_svg').style.display="block";
        document.getElementById("svg_big_images").style.display="block";
        document.getElementById('both_btn').style.display="block";
        const svg_image_container_front = document.getElementsByClassName('svg_image_div_front');
        const svgWithClass = svgContent ? svgContent.replace('<svg', '<svg className="svg_image_front" id="front_svg"') : null;
        svg_image_container_front[0].innerHTML = svgWithClass;

        const svg_image_container_back = document.getElementsByClassName('svg_image_div_back');
        const backSVGContentUpdated = backSvgContent ? backSvgContent.replace('<svg', '<svg className="svg_image_front" id="back_svg"') : null;
        svg_image_container_back[0].innerHTML = backSVGContentUpdated;

        getApiData(jsonData,view);
        
     // setView(prevView => prevView + 1);
        // const SetCookie = () => {
        //   Cookies.set("blouse", 
        //   "jsonData", {
        //     expires: 7,
        //   });
        // };


        // console.log(jsonData);
       sessionStorage.setItem("Blouse", JSON.stringify(jsonData));

        // const view=sessionStorage.getItem("blouse");
        // console.log(view);
      
        // console.log(SetCookie);
        

        // blouse_item && <BigSvgComponent item_details={blouse_item}/>
        // let cache = await caches.open(cacheList[0].cacheName)
        // console.log(JSON.parse(localStorage.getItem('blouse')))
        // console.log(id);
        // const FrontSvgName_div=document.getElementsByClassName("front_name");
        // const FrontName = FrontSvgnName ? FrontSvgnName.replace('<h5', '<h5 className="front_name" id="front"') : null;
        // FrontSvgName_div[0].innerHTML=FrontName;

        // const SelectionId=document.getElementById("blouse_id").innerHTML=id;
        //console.log(SelectionId);
        //const IdSelection = itemId ? itemId.replace('<p', '<p className="id_value" id="blouse_id"') : null;
        // SelectionId[0].innerHTML=;
        // console.log(id);
        console.log("Status Of View ==>",view);

    }

    

    

    const svgWithClass = svgContent ? svgContent.replace('<svg', '<svg class="icon_item_image"') : null;  
    return(
        <>
           <button className="item_list_button" 
           onClick={()=>getBigSvgImage(id,name,data)}>
             {svgContent && <div dangerouslySetInnerHTML={{ __html: svgWithClass }} />}
             <label className="item_label_style">{name}</label>
           </button>

         </>
    )
}
export default BlouseItemsList 