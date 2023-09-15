import axios from "axios";
import React, { useEffect, useState } from "react";
import PatcheDisplay from "./patcheview";



const Patches=({selectedPatchItem,updatePatcheItem})=>{
    const [patcheData,setPatcheData]=useState([]);

    useEffect(()=>{
        axios.get("http://api.tailortrix.com/rest/api/patches/")
        .then(res=>{
            // console.log(res.data);
            setPatcheData(res.data);
        })
        .catch(err=>{
            console.log("Sleeves Fetching Error",err);
        })
    },[])
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <p>Total Items {patcheData.length}</p>
                </div>
                {patcheData.map(each=>(
                    <PatcheDisplay
                    key={each.id} name={each.name} url={each.url} data={each} id={each.id}
                    updatePatcheItem={updatePatcheItem}/>
                ))}
            </div>
        </div>
    )
}
export default Patches