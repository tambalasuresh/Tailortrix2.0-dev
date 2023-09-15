import React, { useEffect, useRef, useState } from "react";
import "./color.css";

const ColorItems=({getAllpyingColor})=>{
    const buttonContainerRef = useRef(null);
    const [uploadColor,setUplaodColor]=useState(false);
    const [btnCount,setBtnCount]=useState('');
    const [color, setColor] = useState("#FF5733");
    const [buttons, setButtons] = useState(
      JSON.parse(localStorage.getItem('buttons')) || [
        { id: 1, label: 'Button 1', backgroundColor: '#FF5733' },
      ]
    );
    const [colorActive,setColorActive]=useState(null);

    const addNewButton = () => {
        const newButtonId = buttons.length + 1;
        const newButtonLabel = `Button ${newButtonId}`;
        const newButton = { id: newButtonId, label: newButtonLabel, backgroundColor: color };
        const updatedButtons = [...buttons, newButton];
        setButtons(updatedButtons);
        localStorage.setItem('buttons', JSON.stringify(updatedButtons));
      };

      useEffect(()=>{
        const buttonsInContainer = buttonContainerRef.current.querySelectorAll('button');
        setBtnCount(buttonsInContainer.length-1);
        localStorage.setItem('buttons', JSON.stringify(buttons));
  }, []);



    const getUploadColorButton=()=>{
        setUplaodColor(!uploadColor);
    }

    const GetColor=(color,id)=>{ 
        setColorActive(id);
        getAllpyingColor(color);
    }
    

    return(
        <div className="container-fluid color_container">
            <div className="row" ref={buttonContainerRef}>
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6">
                          <button className="btn btn_upload" onClick={()=>getUploadColorButton()}>Upload Your Color</button>
                        </div>
                        <div className="col-lg-6">
                        <p className="text-danger">Total Items <span className="text-info">{btnCount}</span></p>
                        </div>
                    </div>
                </div>
                <div className="col">
                {buttons.map((button) => (
          <button 
            key={button.id}
            className={colorActive === button.id ? " color_button active_color" : "color_button"}
            id={button.id}
            onClick={()=>GetColor(button.backgroundColor,button.id)}
          >
            <div  style={{ backgroundColor: button.backgroundColor }}   className="color1" ></div>
          </button>
        ))}
                </div>
            </div>
            {uploadColor &&
                <div className="row">
                    <div className="col">
                        <input type="color" className="input_color mx-2"
                        onChange={(e) => setColor(e.target.value)} value={color}/>
                        <button className="btn btn-success btn-sm mb-3" 
                        onClick={addNewButton}>Add Color</button>
                    </div>
                </div>
                }
        </div>
    )
}
export default ColorItems