import React,{ useState,useEffect } from "react";
import axios from "axios";
import SideBarRight from "../rightBar";
import "./bodycontainer.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BlouseItems from "../leftBar/blouse";
import ColorItems from "../leftBar/color";
import Sleeves from "../leftBar/sleeve";
import Patches from "../leftBar/patche";
import Necks from "../leftBar/necks";
import FabricItems from "../leftBar/fabrics";


const BodyContaienr=({getActiveTab,updateTabName})=>{
    const [allData,setAllData]=useState([]);
    const [key, setKey] = useState('Blouse');
    const [applycolor,setApplyColor]=useState(null);
    const [slectedBlouseItem, setSlectedBlouseItem] = useState(JSON.parse(localStorage.getItem("Blouse")));
    const [selectedNeckItem,setSelectedNeckItem]=useState(JSON.parse(localStorage.getItem("Necks")));
    const [selectedPatchItem,setSelectedPatcheItem]=useState(JSON.parse(localStorage.getItem("Patche")));
    const [selectedSleeveItem,setSelectedSleeveItem]=useState(JSON.parse(localStorage.getItem("Sleeves")));
    
    
    const updateBlouseItem = (value) => {
        setSlectedBlouseItem(value);
      };
  
       // This method is update NecksItem
      const updateNeckItem=(value)=>{
        setSelectedNeckItem(value);
      }

      // This Method is Update PatcheItem
      const updatePatcheItem=(value)=>{
        setSelectedPatcheItem(value);
      }

      const updateSleeveItem=(value)=>{
        setSelectedSleeveItem(value);
      }     
      
      const handleTabClick = (key) => {
        setKey(key); 
      };

      // This method is color Updateing
      const getAllpyingColor=(applycolor)=>{
        setApplyColor(applycolor)

      }
    //   console.log(applycolor);


    useEffect(()=>{
        axios.get("http://api.tailortrix.com/rest/api/grouped-blouse-items/")
            .then(res=>{
                setAllData(res.data.categories);
        })
        .catch(err=>{
            console.log("svg import not",err)
        })
  
    },[])

    
    return(
        <div className="container-fluid menu" id="menu">
            <div className="row">
                <div className="col-lg-4 sideLeft_container">
                    <div>
                        <div className="col-lg-12">
                        <Tabs activeKey={key} onSelect={handleTabClick}
                         transition={true} id="fill-tab-example" fill className="mb-3">
                        <Tab eventKey="Blouse" title="Blouse"><BlouseItems allData={allData} 
                        slectedBlouseItem={slectedBlouseItem} updateBlouseItem={updateBlouseItem}/></Tab>
                        <Tab eventKey="Chudidhar" title="Chudidhar">Chudidhar</Tab>
                        <Tab eventKey="Mens" title="Men's">Men's</Tab>
                        <Tab eventKey="Kids" title="Kid's">Kid's</Tab>
                        <Tab eventKey="Sleeves" title="Sleeves"
                        >
                            <Sleeves selectedSleeveItem={selectedSleeveItem}
                        updateSleeveItem={updateSleeveItem}/></Tab>
                        <Tab eventKey="PATCHES" title="PATCHES"><Patches selectedPatchItem={selectedPatchItem}
                        updatePatcheItem={updatePatcheItem} /></Tab>
                        <Tab eventKey="COLOR" title="COLOR"><ColorItems getAllpyingColor={getAllpyingColor}/></Tab>
                        <Tab eventKey="NECKS" title="NECKS"><Necks selectedNeckItem={selectedNeckItem} 
                        updateNeckItem={updateNeckItem}/></Tab>
                        <Tab eventKey="FABRICS" title="FABRICS"><FabricItems/></Tab>
                         </Tabs>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-8 bg-white bigSvg" id="bigSvg">
                    { slectedBlouseItem &&
                        <SideBarRight  slectedBlouseItem={slectedBlouseItem} updateNeckItem={updateNeckItem}
                            selectedNeckItem={selectedNeckItem} selectedPatchItem={selectedPatchItem} updateBlouseItem={updateBlouseItem}
                            selectedSleeveItem={selectedSleeveItem} updatePatcheItem={updatePatcheItem}
                            updateSleeveItem={updateSleeveItem} getActiveTab={getActiveTab} updateTabName={updateTabName}
                            tabKey={key} applycolor={applycolor}
                            />
                    }
                </div>
                
            </div>
          
        </div>
    )
}
export default BodyContaienr