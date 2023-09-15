import React, { useEffect, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BlouseItems from "../leftBar/blouse";
import axios from "axios";

const AllTabs=()=>{
    const [allData,setAllData]=useState([]);
    const [slectedBlouseItem, setSlectedBlouseItem] = useState();

    const updateBlouseItem = (value) => {
        setSlectedBlouseItem(value);
      };

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
        <div className="row">
            <div className="col">
            <Tabs defaultActiveKey="Blouse" transition={true} id="fill-tab-example" fill className="mb-3">
                  <Tab eventKey="Blouse" title="Blouse"><BlouseItems allData={allData} 
                        slectedBlouseItem={slectedBlouseItem} updateBlouseItem={updateBlouseItem}/></Tab>
                 <Tab eventKey="Chudidhar" title="Chudidhar">Chudidhar</Tab>
            </Tabs>
            </div>

        </div>
    )
}
export default AllTabs