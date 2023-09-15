import React from "react";
import "../filter.css";

const FilterKatouriDart=()=>{
    return(
        <div className="filtersub_container">
            <label className="label_radio">
                <input type="radio" name="4DartFilter" value="Single Pice"/>
                Single Pice
            </label>
            <label className="label_radio">
                <input type="radio" name="4DartFilter" value="Doubble Pice"/>
                Doubble Pice
            </label>
        </div>
    )
}
export default FilterKatouriDart