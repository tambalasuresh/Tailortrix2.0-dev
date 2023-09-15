import axios from "axios";
import React, { useEffect, useState } from "react";
import "./blouseitems.css";
// import SidebarRight from "../../../../sideright";
// import BigSvgComponent from "../../../../sideright/sidebarbody";



const BlouseItemsList=({id,name,frontPath,BackPath,data,updateBlouseItem})=>{
    const [svgContent, setSvgContent] = useState(null);
    const [activeBlouse, setActiveBlouse] = useState(false);
    
    const baseUrl='http://api.tailortrix.com';
    const FrontGetSvg=async (url)=>{
        try {
          const response = await axios.get(baseUrl+url);
          setSvgContent(response.data);
          
        } catch (error) {
          console.error('Error blouse Items SVG content:', error);
        }
      };

    useEffect(() => {
      const blouseData=JSON.parse(localStorage.getItem("Blouse"));
      if(blouseData === null){
        setActiveBlouse(false);
      }
      else if(id === blouseData.id){
        setActiveBlouse(true);
      }
        FrontGetSvg(frontPath);
      }, [frontPath,id]);

    const getBigSvgImage=(id,name,jsonData,svg)=>{
         const getblousedata=JSON.parse(localStorage.getItem("Blouse"));
         if (getblousedata!= null){
            const temp=document.getElementById(getblousedata.id.toString())
            if (temp !==null){
            temp.classList.remove('active_item')
            }
         }

         jsonData['svg_content']=svg
         
         updateBlouseItem(jsonData);
         setActiveBlouse(true);
       localStorage.setItem("Blouse", JSON.stringify(jsonData));
    }

    const svgWithClass = svgContent ? svgContent.replace('<svg', '<svg class="icon_item_image"') : null;  
    return(
        <>
           <button className= {activeBlouse ? "item_list_button active_item":"item_list_button"} 
           onClick={()=>getBigSvgImage(id,name,data,svgWithClass)} id={id}>
             {svgContent && <div dangerouslySetInnerHTML={{ __html: svgWithClass }} />}
             <label className="item_label_style">{name}</label>
           </button>

         </>
    )
}
export default BlouseItemsList 