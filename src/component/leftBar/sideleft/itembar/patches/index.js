import React, { useEffect, useState } from "react";
import PatchesView from "./patchesView";
import axios from "axios";
import "./patches.css";

const PatchesItems=()=>{
    const [PatchesData,setPatchesData]=useState([]);
    const [filterValue,setFiltervalue]=useState("");
    
    useEffect(()=>{
        axios.get("http://api.tailortrix.com/rest/api/patches/")
        .then(res=>{
            //console.log(res.data);
            setPatchesData(res.data);
        })
        .catch(err=>{
            console.log(err);
        })

    },[])

    const filterData=PatchesData.filter((each)=>(
        each.name.toUpperCase().includes(filterValue.toUpperCase())
    ))

      console.log("getData",filterData);

    return(
        <div className="patches_container_div">
            <div className="count_div">
                {/* <input type="search"  className="search_input_Patches" placeholder="Search Itmes With Name"
                onChange={(e)=>(setFiltervalue(e.target.value))}/> */}
                <p className="label_count">Total Items <span className="span_count"> {PatchesData.length}</span></p>
            </div>
            <div className="patches_container">
                {filterData.map((each)=>(
                    <PatchesView
                    key={each.id}
                    name={each.name}
                    url={each.url}
                    data={each}/> 
                ))}
            </div>
        </div>
    )
}
export default PatchesItems