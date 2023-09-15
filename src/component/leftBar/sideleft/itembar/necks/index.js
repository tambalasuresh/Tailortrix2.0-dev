import axios from "axios";
import React, { useEffect, useState } from "react";
import NeckView from "./neckview";
import "./neck.css";

const NeckItems=()=>{
    const [neckData,setNeckData]=useState([]);
    
    useEffect(()=>{
        axios.get("http://api.tailortrix.com/rest/api/backnecks/")
        .then(res=>{
            //console.log(res.data);
            setNeckData(res.data);
        })
        .catch(err=>{
            console.log(err);
        })

    },[])


    return(
        <div className="neck_container_div">
            <div className="length_container p-2">
                <label className="label_style">
                    <input type="radio" name="neckFilter" className="neck_input_radio"/>
                    Front Neck
                </label>
                <label className="label_style">
                    <input type="radio" name="neckFilter" className="neck_input_radio"/>
                    Back Neck
                </label>
                <p className="lebel_count">Total Items <span className="span_count_necks"> {neckData.length}</span></p>
            </div>
            <div className="neck_container">
            {neckData.map((each)=>(
                        <NeckView 
                        key={each.id}
                        name={each.name}
                        url={each.url}
                        data={each}/>
                 ))}
            </div>
        </div>
    )
}
export default NeckItems