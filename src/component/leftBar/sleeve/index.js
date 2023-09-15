import axios from "axios";
import React, { useEffect, useState } from "react";
import Sleevesdisplay from "./sleeveview/index";


const Sleeves=({updateSleeveItem})=>{
    const [sleevesData,setSleevesData]=useState([]);

    useEffect(()=>{
        axios.get("http://api.tailortrix.com/rest/api/sleeves/")
        .then(res=>{
            setSleevesData(res.data);
        })
        .catch(err=>{
            console.log("Sleeves Fetching Error",err);
        })
    },[])
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <p>Total Items {sleevesData.length}</p>
                </div>
                {sleevesData.map(each=>(
                    <Sleevesdisplay
                    key={each.id} name={each.name} url={each.url} id={each.id}
                    data={each} updateSleeveItem={updateSleeveItem}/>
                ))}
            </div>
        </div>
    )
}
export default Sleeves