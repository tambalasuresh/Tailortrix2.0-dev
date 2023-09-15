import React, { useEffect, useState } from "react";
import "./sleeves.css";
import SleeveView from "./sleeveView";
import axios from "axios";

const Sleeves=()=>{
    const [sleeveData,setSleeveData]=useState([]);
    
    useEffect(()=>{
        axios.get("http://api.tailortrix.com/rest/api/sleeves/")
        .then(res=>{
            //console.log(res.data);
            setSleeveData(res.data);
        })
        .catch(err=>{
            console.log(err);
        })

    },[])


    return(
        <div className="sleeves_menu_div">
            <div className="length_count">
                <p></p>
                <p className="count_label">Total Items
                <span className="span_label"> {sleeveData.length}</span></p>
            </div>
            <div className="sleeves_menu">
            {sleeveData.map(each=>(
              <SleeveView key={each.id}
              name={each.name}
                url={each.url}
                data={each}/>
            ))}
            </div>
        </div>
    )
}
export default Sleeves