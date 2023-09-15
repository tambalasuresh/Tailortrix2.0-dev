import React from "react";
import "../filter.css";

const Filter4Dart=()=>{
    return(
        <div className="filtersub_container">
            <label className="label_radio">
                <input type="radio" name="4DartFilter" value="With Patti"/>
                With Patti
            </label>
            <label className="label_radio">
                <input type="radio" name="4DartFilter" value="WithOut Patti"/>
                WithOut  Patti
            </label>
        </div>
    )
}
export default Filter4Dart