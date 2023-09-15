 import React, { useEffect, useRef, useState } from "react";
 import {AiOutlineDelete} from "react-icons/ai";
import "./rightBar.css";
import axios from "axios";
import NeckRightBar from "./neckright";
import SleeveRight from "./sleeveright";
import PatcheRight from "./patcheright";
import {GrLinkNext} from "react-icons/gr"
import {RiLuggageCartFill} from "react-icons/ri"
import 'animate.css'

const SideBarRight=({slectedBlouseItem,selectedNeckItem,selectedPatchItem,selectedSleeveItem,
  updateBlouseItem,updateNeckItem,updatePatcheItem,updateSleeveItem,getActiveTab,updateTabName,tabKey,applycolor})=>{
    const [svgContent, setSvgContent] = useState(null);
    const [backSvgContent, setBackSvgContent] = useState(null);
    const [btnActive,setBtnActive]=useState(0);
    // const [updateColor,setUpdateColor]=useState(applycolor);
  
    const frontPath=slectedBlouseItem.front_svg;
    const backPath=slectedBlouseItem.back_svg;
    const BaseUrl='http://api.tailortrix.com';

    const getToNextTab=()=>{
      updateTabName("customerDetails_tab");
      getActiveTab(true); 
    }

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

      const getDeleteBlouse=()=>{ 
        if(slectedBlouseItem !== null){
          localStorage.removeItem("Blouse");
          // updateBlouseItem(null)
        }
        
        console.log(slectedBlouseItem.id);
        localStorage.removeItem("Blouse");
        // updateBlouseItem(null);
      }

      const getDeleteNecks=()=>{
        if(selectedNeckItem !== null){
          document.getElementById(selectedNeckItem.name).classList.remove("active_items_Necks");
          updateNeckItem(null);
          localStorage.removeItem("Necks");
        }
        alert("You Want To Delete This Necks !");
      }

      const getDeletePatche=()=>{
        if(selectedPatchItem !== null){
          document.getElementById(selectedPatchItem.name).classList.remove("active_patche");
          updatePatcheItem(null);
          localStorage.removeItem("Patche");
        }
        alert("You Want To Delete This Patche !");
      }

      const getDeleteSleeve=()=>{
        if(selectedSleeveItem !== null){
          document.getElementById(selectedSleeveItem.name).classList.remove("active_sleeve");
          updateSleeveItem(null);
          localStorage.removeItem("Sleeves");
        }
        alert("You Want To Delete This Sleeve !");
      }

      const renderTabContent = () => {
        const svgWithBack = backSvgContent ? backSvgContent.replace('<svg', `<svg class="" fill="${applycolor || 'white'}" width="80mm" height="80mm" id="back_svg"`) : null;
        const svgWithClass = svgContent ? svgContent.replace('<svg', `<svg class="" fill="${applycolor || 'white'}" width="80mm" height="80mm" id="back_svg"`) : null;
        return (
          <div className="col-lg-9">
            <div className="row">
              <div className="col-lg-12">
                <div className="col p-2">
                  <button className={btnActive === 0 ? "btn btn-sm mx-1 btn_active" : "btn btn-sm mx-1"} onClick={() => getBothSvg(0)}>Both</button>
                  <button className={btnActive === 1 ? "btn btn-sm mx-1 btn_active" : "btn btn-sm mx-1"} onClick={() => getFrontSvg(1)}>Front</button>
                  <button className={btnActive === 2 ? "btn btn-sm mx-1 btn_active" : "btn btn-sm mx-1"} onClick={() => getBackSvg(2)}>Back</button>
                </div>
                <div className="row text-center" >
                  {slectedBlouseItem && <h6 className="text-dark">{slectedBlouseItem['name']}</h6>}
                </div>
                <div className="row">
                  <div className= "col-lg-6" id="Front_image">  
                    {svgContent && <div dangerouslySetInnerHTML={{ __html: svgWithClass }} />}
                  </div>
                  <div className="col-lg-6" id="Back_image">
                    {backSvgContent && <div dangerouslySetInnerHTML={{ __html: svgWithBack }} />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
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
        setBtnActive(index);
      }

    useEffect(()=>{
      
      if (slectedBlouseItem && slectedBlouseItem.front_svg) {
        FrontGetSvg(frontPath);
        BackGetSvg(backPath);
      }
    },[slectedBlouseItem]); // this line Main....

    return(
        <div className="col">
            <div className="row p-2">
              { tabKey === "Blouse" &&
               renderTabContent()
              }
              { tabKey === "COLOR" &&
               
               renderTabContent()
               
              }
              { tabKey === "FABRICS" &&
               renderTabContent()
              }
              { tabKey === "NECKS" &&
                  <NeckRightBar selectedNeckItem={selectedNeckItem} applycolor={applycolor}/>
              }

              { tabKey === "Sleeves" &&
                  <SleeveRight selectedSleeveItem={selectedSleeveItem}/>
              }
              { tabKey === "PATCHES" &&
                  <PatcheRight selectedPatchItem={selectedPatchItem}/>
              }

              <div className="col-lg-3"  >
                 <h6 className="user_style text-center" >Selected <RiLuggageCartFill/>
                  </h6>
                  <div>
                 {slectedBlouseItem &&  
                   <div class="card  text-center card_style mx-5">
                          <div class="card-body text-success body_card">
                          <div dangerouslySetInnerHTML={{ __html: slectedBlouseItem['svg_content'] }} />
                          </div>
                          <button class="btn btn-outline-danger btn_style_card" onClick={getDeleteBlouse}>
                            <AiOutlineDelete/>
                            </button>
                    </div>
                    }

                 {selectedNeckItem &&  
                    <div class="card text-center card_style mx-5">
                        <div class="card-body text-success body_card">
                        <div dangerouslySetInnerHTML={{ __html: selectedNeckItem['svg_content'] }} />
                        </div>
                        <button class="btn btn-outline-danger btn_style_card" onClick={getDeleteNecks}>
                          <AiOutlineDelete/>
                          </button>
                    </div>
                    }

                    { selectedPatchItem &&
                      <div class="card text-center card_style mx-5">
                         <div class="card-body text-success body_card">
                         <div dangerouslySetInnerHTML={{ __html: selectedPatchItem['svg_content'] }} />
                         </div>
                         <button class="btn btn-outline-danger btn_style_card" onClick={getDeletePatche}>
                           <AiOutlineDelete/>
                           </button>
                      </div>
                     } 
                     
                     {selectedSleeveItem && 
                        <div class="card  text-center card_style mx-5">
                        <div class="card-body text-success body_card">
                        <div dangerouslySetInnerHTML={{ __html: selectedSleeveItem['svg_content'] }} />
                        </div>
                        <button class="btn btn-outline-danger btn_style_card" onClick={getDeleteSleeve}>
                          <AiOutlineDelete/>
                          </button>
                        </div>
                     }

                     {slectedBlouseItem && 
                     <div className="text-center floating_button_next mt-3">
                        <button className="btn btn-outline-success text-white btn-sm float_btn"
                         onClick={()=>getToNextTab()}>
                        <span className="text-white mx-1">
                        <GrLinkNext 
                        className="animate__animated animate__shakeX animate__delay-2s"/>
                        </span></button>
                     </div>
                     }
                   </div>

              </div>
            </div>
        </div>
    )
}
export default SideBarRight