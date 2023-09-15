import React, { useEffect, useState } from "react";
import FilterData from "./filterData";
import BlouseItemsList from "./blouseItems";
import axios from "axios";
import "./blouse.css";

const BlouseItems=({getApiData})=>{
    const [allData,setAllData]=useState([]);
    const [filterData,setFilterData]=useState('');
    const [blouseFilter,setBlouseFilter]=useState('');
    const [filterArray,setFilterArray]=useState([]);

    const getFilterValue=(filterData)=>{
      setFilterData(filterData);
    }

      useEffect(()=>{
        axios.get("http://api.tailortrix.com/rest/api/grouped-blouse-items/")
        .then(res=>{
            setAllData(res.data.categories);
            const  selectedCategory = res.data.categories.find(category => category.name === filterData);
            if (selectedCategory) {
              setFilterArray(selectedCategory.items);
            }
        })
        .catch(err=>{
            console.log("svg import not",err)
        })

      },[])

     console.log("filter Value",filterArray);
     
    return(
        <>
        <FilterData getFilterValue={getFilterValue}/>
            <div className="list_item_container_div">
                 {allData.map((categories) => {
                    const arrayLength = categories.items.length;
                //     {categories.items.map((item)=> (
                   
                //               <BlouseItemsList key={item.id} id={item.id} name={item.name}
                //               BackPath={item.back_svg} frontPath={item.front_svg}
                //                data={item} getApiData={getApiData}
                //               />
                //  ))}

                if(categories.name === filterData){
                    return(
                        <div key={categories.name}>
                            <div className="count_contaienr">
                                  {/* <input type="search" className="search_name_blouse" placeholder="Search Items For Name"
                                  onChange={(e)=>setBlouseFilter(e.target.value)}/> */}
                                  <p></p>
                                  <p></p>
                                  <p></p>
                                <p className="count_label">
                                    Total Items 
                                    <span className="span_length">{arrayLength}</span>
                                </p>
                            </div>
                            <div className="list_item_container">
                                
                        {categories.items.map((item)=> (
                            item.name.toLowerCase().includes(blouseFilter.toLowerCase()) && (
                        <BlouseItemsList key={item.id} id={item.id} name={item.name}
                        BackPath={item.back_svg} frontPath={item.front_svg}
                         data={item} getApiData={getApiData}
                        />
                        )
                 ))}
                  </div>
                  </div>)
                  
                }
        //         else{
        //           return (
        //           categories.items.map((item)=> (
                   
        //         <BlouseItemsList key={item.id} id={item.id} name={item.name}
        //         BackPath={item.back_svg} frontPath={item.front_svg}
        //          data={item} getApiData={getApiData}
        //         />
                    
        //  ))
        //           )

        //         }
                
            })}

          </div>
          
          
          </>
            
       
    )
}
export default BlouseItems