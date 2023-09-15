  import React, {  useState } from "react";
import BlouseItemsList from "./blouseItems";
import "./blouse.css";


const BlouseItems=({allData,slectedBlouseItem,updateBlouseItem})=>{
  
  const [filterData,setFilterData]=useState('All');
  const [blouseFilter,setBlouseFilter]=useState('');
  const [filterArray,setFilterArray]=useState([]);

  const getFilterValue=(filterData)=>{
    setFilterData(filterData);
    setFilterArray(allData.find(category => category.name === filterData));
  }


    return(
      <>
      <div className="filter_container"> 
                {/* <Form.Check defaultChecked type='radio' label='All' id='radio' onClick={()=>getFilterValue('All')}/> 
                <Form.Check type='radio' label='3 Dart' id='3_Dart' onClick={()=>getFilterValue('3 Dart')}/> 
                <Form.Check type='radio' label='4 Dart' id='4_Dart' onClick={()=>getFilterValue('4 Dart')}/> 
                <Form.Check type='radio' label='Princess' id='Princess' onClick={()=>getFilterValue('Princess')}/> 
                <Form.Check type='radio' label='Katouri' id='Katouri' onClick={()=>getFilterValue('Katouri')}/> 
                <Form.Check type='radio' label='Sabyasachi' id='Sabyasachi' onClick={()=>getFilterValue('Sabyasachi')}/>  */}
                
                <label>
                    <input type="radio" value="All" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterValue('All')} defaultChecked/>
                    All
                </label>
                <label >
                    <input type="radio" value="3 Dart" name="filterBlouse" className="radio_input"
                     onClick={()=>getFilterValue('3 Dart')}/>
                    3 Dart
                </label>
                <label >
                    <input type="radio" value="4 Dart" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterValue('4 Dart')}/>
                    4 Dart
                </label>
                <label >
                    <input type="radio" value="Princess" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterValue('Princess')}/>
                    Princess
                </label>
                <label >
                    <input type="radio" value="Katouri" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterValue('Katouri')}/>
                    Katouri
                </label>
                <label >
                    <input type="radio" value="Sabyasachi" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterValue('Sabyasachi')}/>
                    Sabyasachi
                </label>
                
            </div>
        <div style={{"height":"61vh","overflow-y":"scroll"}}>
            <div >
              <div className="row">
                    {allData.map((categories) => {
                        const arrayLength = categories.items.length;                     
                        if(filterData === 'All'){
                          return(
                            <>
                             {categories.items.map((item)=> (
                                   item.name.toLowerCase().includes(blouseFilter.toLowerCase()) && (
                                     <div className="col">
                                        <BlouseItemsList key={item.id} id={item.id} name={item.name}
                                          BackPath={item.back_svg} frontPath={item.front_svg}
                                          data={item} updateBlouseItem={updateBlouseItem} 
                                        />
                                      </div>
                                     )
                               ))}
                            
                            </>)
                          
                        }else{
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
                                      <div className="col filter_item_container">
                                        {categories.items.map((item)=> (
                                              item.name.toLowerCase().includes(blouseFilter.toLowerCase()) && (
                                          <BlouseItemsList key={item.id} id={item.id} name={item.name}
                                          BackPath={item.back_svg} frontPath={item.front_svg}
                                          data={item} updateBlouseItem={updateBlouseItem}  
                                          />
                                          
                                          )
                                        ))}
                            </div>
                            </div>)
                            
                          }

                        }
                    
                })}

              </div>
            </div>
        </div>
      </>
    )
}
export default BlouseItems