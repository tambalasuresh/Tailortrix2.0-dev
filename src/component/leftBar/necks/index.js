import axios from "axios";
import React, { useEffect, useState } from "react";
import NecksDisplay from "./neckview";



const Necks=({selectedNeckItem,updateNeckItem})=>{
    const [necksData,setNecksData]=useState([]);

    useEffect(()=>{
        axios.get("http://api.tailortrix.com/rest/api/backnecks/")
        .then(res=>{
            // console.log(res.data);
            setNecksData(res.data);
        })
        .catch(err=>{
            console.log("Sleeves Fetching Error",err);
        })
    },[])
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <p>Total Items {necksData.length}</p>
                </div>
                {necksData.map(each=>(
                    <NecksDisplay
                    key={each.id} name={each.name} url={each.url} id={each.id} data={each}
                    updateNeckItem={updateNeckItem}/>
                ))}
            </div>
        </div>
    )
}
export default Necks