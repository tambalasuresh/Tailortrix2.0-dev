import React, { useEffect, useState } from "react";

import "./rightBar.css";
import axios from "axios";

const BlouseRight=({slectedBlouseItem})=>{
    const [svgContent, setSvgContent] = useState(null);
    

    const FrontGetSvg=async (url)=>{
        try {
          const response = await axios.get(url);
          setSvgContent(response.data);
        } catch (error) {
          console.error('Error big image SVG content:', error);
        }
      };
      useEffect(()=>{
        if (slectedBlouseItem && slectedBlouseItem.url) {
            FrontGetSvg(selectedSleeveItem.url);
          }
    },[selectedSleeveItem]); 

    const svgWithNeck = svgContent ? svgContent.replace('<svg', '<svg class="" fill="white" width="100mm" height="80mm" id="front_svg" ') : null;
   return(
            <div className="col-lg-9">
            <div className="row">
            <div className="col-lg-12">
                <div className="row">
                    {selectedSleeveItem &&
                    <h6 className="text-success">{selectedSleeveItem['name']} </h6>}
                </div>
                <div className="row text-center">
                    <div className="col-lg-8">
                    { selectedSleeveItem && 
                        <div className="col-lg-7 mt-4" id="Front_image">
                            {svgContent && <div dangerouslySetInnerHTML={{ __html: svgWithNeck }} />}
                        </div>}
                    </div>
                </div>
            </div>
            </div>
           </div>
   )
}
export default SleeveRight