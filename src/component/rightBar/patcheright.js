import React, { useEffect, useState } from "react";

import "./rightBar.css";
import axios from "axios";

const PatcheRight=({selectedPatchItem})=>{
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
        if (selectedPatchItem && selectedPatchItem.url) {
            FrontGetSvg(selectedPatchItem.url);
          }
    },[selectedPatchItem]); 

    const svgWithNeck = svgContent ? svgContent.replace('<svg', '<svg class="patche_svg" fill="white" width="100mm" height="80mm" id="front_svg" ') : null;
   return(
                <div className="col-lg-9">
                <div className="row">
                <div className="col-lg-12">
                    <div className="row heading_style">
                        {selectedPatchItem &&
                        <h6 className="text-dark">{selectedPatchItem['name']} </h6>}
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-8">
                        { selectedPatchItem && 
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
export default PatcheRight