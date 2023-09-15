import React, { useState } from "react";
import "./filterOther.css";

const FilterOther=()=>{
    const [radioActive,setRadioActive]=useState(false);

    const getFilterOther=(index)=>{
        setRadioActive(index);
    }
    return(
        <div className="other_filter_container">
            <label className={radioActive === 1 ? 'label_radio active_radio': 'label_radio'}>
                    <input type="radio" value="Uniforms" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterOther(1,'Uniforms')}
                    />
                    Uniforms
                </label>
                <label className={radioActive === 2 ? 'label_radio active_radio': 'label_radio'}>
                    <input type="radio" value="Crop Tops" name="filterBlouse" className="radio_input"
                     onClick={()=>getFilterOther(2,'Crop Tops')}
                     />
                    Crop Tops
                </label>
                <label className={radioActive === 3 ? 'label_radio active_radio': 'label_radio'}>
                    <input type="radio" value="Short Tops" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterOther(3,'Short Tops')}
                    />
                    Short Tops
                </label>
                <label className={radioActive === 4 ? 'label_radio active_radio': 'label_radio'}>
                    <input type="radio" value="Nighties" name="filterBlouse" className="radio_input"
                    onClick={()=>getFilterOther(4,'Nighties')}
                    />
                    Nighties
                </label>
        </div>
    )
}
export default FilterOther