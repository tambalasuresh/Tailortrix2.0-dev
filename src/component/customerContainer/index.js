import React, { useEffect, useState } from "react";
import Customer from "../customer";
import {RiLuggageCartFill} from "react-icons/ri"
import {AiOutlineDelete} from "react-icons/ai"
import axios from "axios";


const CustomerContainer=({updateTabName})=>{
    const [svgContent, setSvgContent] = useState(null);
    const [blosueData,setBlouseData]=useState([null]);
    const [neckData,setNeckData]=useState([]);
    const [patcheData,setPatcheData]=useState([]);
    const [sleeveData,setSleeveData]=useState([]);
    const [btnActive,setBtnActive]=useState(0);
    const [backSvgContent, setBackSvgContent] = useState(null);

   
    const BaseUrl='http://api.tailortrix.com';

    const FrontGetSvg=async (url)=>{
        try {
          const response = await axios.get(BaseUrl+url);
          setSvgContent(response.data);
        } catch (error) {
          console.error('Error big image SVG content:', error);
        }
      };

      const BackGetSvg=async(url)=>{
        try {
          const response = await axios.get(BaseUrl+url);
          setBackSvgContent(response.data);
        } catch (error) {
          console.error('Error fetching SVG content:', error);
        }
      };

        
      const getBothSvg=(index)=>{
        document.getElementById("Front_image").style.display="block";
        document.getElementById("Back_image").style.display="block";
        setBtnActive(index);
      }
      const getFrontSvg=(index)=>{
        document.getElementById("Front_image").style.display="block";
        document.getElementById("Back_image").style.display="none";
        setBtnActive(index);
      }
      const getBackSvg=(index)=>{
        document.getElementById("Front_image").style.display="none";
        document.getElementById("Back_image").style.display="block";
        setBtnActive(index)
      }
    

    useEffect(()=>{
        const Blousedata=JSON.parse(localStorage.getItem("Blouse"));
        const NecksData=JSON.parse(localStorage.getItem("Necks"));
        const SleeveData=JSON.parse(localStorage.getItem("Sleeves"));
        const PatcheData=JSON.parse(localStorage.getItem("Patche"));
        if(Blousedata === null){
          setBlouseData(null); 
        }
        else{
          setBlouseData(Blousedata);
          FrontGetSvg(blosueData.front_svg);
          BackGetSvg(blosueData.back_svg);
        }
        if(NecksData=== null){
          setNeckData(null);
        }
        else{
          setNeckData(NecksData);
          console.log(neckData);
        }
        if(SleeveData === null){
          setSleeveData(null);
        }
        else{
          setSleeveData(SleeveData)
        }
        if(PatcheData === null){
          setPatcheData(null);
        }
        else{
          setPatcheData(PatcheData);
        }
        
    },[blosueData.front_svg,blosueData.back_svg]);

    const svgWithBack = backSvgContent ? backSvgContent.replace('<svg', '<svg class="" fill="white" width="80mm" height="80mm" id="back_svg"') : null;
    const svgWithBlouse = svgContent ? svgContent.replace('<svg', '<svg class="" fill="white" width="20mm" height="10mm" id="back_svg"') : null;
    const svgWithClass = svgContent ? svgContent.replace('<svg', '<svg class="" fill="white" width="80mm" height="80mm" id="front_svg" ') : null;
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4 customer">
                    <Customer updateTabName={updateTabName}/>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                            <div className="col p-2">
                              <button className={btnActive === 0 ? "btn btn-sm mx-1 btn_active":"btn  btn-sm mx-1"}
                              onClick={()=>getBothSvg(0)}>Both</button>
                              <button className={btnActive === 1 ? "btn btn-sm mx-1 btn_active":"btn  btn-sm mx-1"}
                              onClick={()=>getFrontSvg(1)}>Front</button>
                              <button className={btnActive === 2 ? "btn btn-sm mx-1 btn_active":"btn  btn-sm mx-1"}
                              onClick={()=>getBackSvg(2)}>Back</button>
                              </div>
                            </div>
                            <div className="row">
                            <div className="col-lg-10">
                                <h6 className="text-dark text-center">
                                  {blosueData && blosueData.name}
                                  </h6>
                                <div className="row ">
                                    <div className="col-lg-1">
                                    </div>
                                    {blosueData && 
                                    <div className="col-lg-5 " id="Front_image">
                                    {svgContent && <div dangerouslySetInnerHTML={{ __html: svgWithClass }} />}
                                    </div>
                                       }
                                    <div className="col-lg-5 " id="Back_image">
                                    {backSvgContent && <div dangerouslySetInnerHTML={{ __html: svgWithBack }} />}
                                    </div>
                                    <div className="col-lg-1">
                                    </div>
                             </div>
                              </div>
                                <div className="col-lg-2">
                                   <h6 className="user_style text-center"> Selected <RiLuggageCartFill/></h6>
                                   {blosueData && 
                                   <div class="card text-center card_style">
                                   <div class="card-body text-success body_card">
                                   <div dangerouslySetInnerHTML={{ __html: blosueData.svg_content }} />
                                   </div>
                                   <button class="btn btn-outline-danger btn_style_card">
                                     <AiOutlineDelete/>
                                     </button>
                                   </div>
                                    }
                                    {neckData && 
                                    <div class="card text-center card_style">
                                    <div class="card-body text-success body_card">
                                    <div dangerouslySetInnerHTML={{ __html: neckData.svg_content }} />
                                    </div>
                                    <button class="btn btn-outline-danger btn_style_card">
                                      <AiOutlineDelete/>
                                      </button>
                                    </div>
                                  //  <div className="text-center">
                                  //     <p>Neck_id <span className="text-info">{neckData.id}</span></p>
                                  //     <div dangerouslySetInnerHTML={{ __html: neckData.svg_content }} />
                                  //  </div> 
                                   }
                                    {sleeveData &&
                                    <div class="card text-center card_style">
                                    <div class="card-body text-success body_card">
                                    <div dangerouslySetInnerHTML={{ __html: sleeveData.svg_content }} />
                                    </div>
                                    <button class="btn btn-outline-danger btn_style_card">
                                      <AiOutlineDelete/>
                                      </button>
                                    </div>
                                  //   <div className="text-center">
                                  //     <p>Sleeve_id <span className="text-success">{sleeveData.id}</span></p>
                                  //      <div dangerouslySetInnerHTML={{ __html: sleeveData.svg_content }} />
                                  //  </div>
                                     }
                                  {patcheData && 
                                  <div class="card text-center card_style">
                                    <div class="card-body text-success body_card">
                                    <div dangerouslySetInnerHTML={{ __html:patcheData.svg_content }} />
                                    </div>
                                    <button class="btn btn-outline-danger btn_style_card">
                                      <AiOutlineDelete/>
                                      </button>
                                  </div>
                                  //  <div className="text-center">
                                  //     <p>Patche_id <span className="text-warning">{patcheData.id}</span></p>
                                  //    <div dangerouslySetInnerHTML={{ __html: patcheData.svg_content }} />
                                  //  </div> 
                                   }
                                </div>

                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default CustomerContainer