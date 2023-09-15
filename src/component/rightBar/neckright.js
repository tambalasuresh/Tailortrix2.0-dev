import React, { useEffect, useState } from "react";

import "./rightBar.css";
import axios from "axios";

const NeckRightBar=({selectedNeckItem,applycolor})=>{
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
        if (selectedNeckItem && selectedNeckItem.url) {
            FrontGetSvg(selectedNeckItem.url);
          }
    },[selectedNeckItem,applycolor]); 
    const svgWithNeck = svgContent ? svgContent.replace('<svg', `<svg class="neck_svg" fill="${applycolor || 'white'}" width="100mm" height="80mm" id="front_svg" `) : null;
   return(
    <div className="col-lg-9">
                  <div className="row">
                    <div className="col-lg-12">
                        <div className="row heading_style">
                            {selectedNeckItem &&
                             <h6 className="text-dark">{selectedNeckItem['name']} </h6>}
                        </div>
                        <div className="row text-center">
                            <div className="col-lg-8">
                            { selectedNeckItem && 
                                <div className="col-lg-7 mt-4" id="Neck_svg">
                                    {svgContent && <div dangerouslySetInnerHTML={{ __html: svgWithNeck }} />}
                                </div>}
                            </div>
                        </div>
                    </div>
                  </div>
              </div>
      
   )
}
export default NeckRightBar