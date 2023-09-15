import React, { useState } from "react";
import "./fabric.css";

const FabricTop=()=>{
    const [activeFabric,setActiveFabric]=useState(0);

    const getDefaultFabrics=(index)=>{
        setActiveFabric(index);
        document.getElementById('defaultFabric').style.display="block";
        document.getElementById('uploadFabric').style.display="none";
    }
    const getUploadFabrics=(index)=>{
        setActiveFabric(index);
        document.getElementById('defaultFabric').style.display="none";
        document.getElementById('uploadFabric').style.display="block";
    }

    return(
        <div className="top_fabric">
            <button className={activeFabric === 0 ? 'btn default_fab_btn default_fab_btn_active':'btn default_fab_btn'}
            onClick={()=>getDefaultFabrics(0)}>default Fabrics</button>
            <button className={activeFabric === 1 ? 'btn default_fab_btn default_fab_btn_active':'btn default_fab_btn'}
            onClick={()=>getUploadFabrics(1)}>Upload Your Fabrics</button>
        </div>
    )
}
export default FabricTop