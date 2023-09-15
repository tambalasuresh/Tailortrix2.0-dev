import React, { useState } from "react";
import "./filter.css";
import Filter4Dart from "./4dart filter";
import FilterKatouriDart from "./katourifilter";

const FilterData=({getFilterValue})=>{
    const [radioActive,setRadioActive]=useState(false);


    const getFilterData=(index,value)=>{
        setRadioActive(index);
        getFilterValue(value);
        if(value === "4 Dart"){
            document.getElementById('With_Without').style.display="block";
            document.getElementById('Katouri').style.display="none";
        }
        else if(value === "Princess"){
            document.getElementById('With_Without').style.display="block";
            document.getElementById('Katouri').style.display="none";
        }
        else if(value === "Katouri"){
            document.getElementById('Katouri').style.display="block";
            document.getElementById('With_Without').style.display="none";
        }
        else{
            document.getElementById('With_Without').style.display="none";
            document.getElementById('Katouri').style.display="none";
        }
       
    }

    return(
        <>
            <div className="filter_container">
                <label className={radioActive === 1 ? 'label_radio active_radio': 'label_radio'}>
                    <input type="radio" value="All" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterData(1,'All')} />
                    All
                </label>
                <label className={radioActive === 2 ? 'label_radio active_radio': 'label_radio'}>
                    <input type="radio" value="3 Dart" name="filterBlouse" className="radio_input"
                     onClick={()=>getFilterData(2,'3 Dart')}/>
                    3 Dart
                </label>
                <label className={radioActive === 3 ? 'label_radio active_radio': 'label_radio'}>
                    <input type="radio" value="4 Dart" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterData(3,'4 Dart')}/>
                    4 Dart
                </label>
                <label className={radioActive === 4 ? 'label_radio active_radio': 'label_radio'}>
                    <input type="radio" value="Princess" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterData(4,'Princess')}/>
                    Princess
                </label>
                <label className={radioActive === 5 ? 'label_radio active_radio': 'label_radio'}>
                    <input type="radio" value="Katouri" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterData(5,'Katouri')}/>
                    Katouri
                </label>
                <label className={radioActive === 6 ? 'label_radio active_radio': 'label_radio'}>
                    <input type="radio" value="Sabyasachi" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterData(6,'Sabyasachi')}/>
                    Sabyasachi
                </label>
                
            </div>
            <div className="with_filter" id="With_Without">           
                 <Filter4Dart />
            </div>
            <div className="with_filter" id="Katouri">           
                 <FilterKatouriDart />
            </div>

        </>
    )
}
export default FilterData