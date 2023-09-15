import React, { useEffect, useRef, useState } from "react";
import "./fabrics.css";
import FabricTop from "./fabrictop";
// import FabricTop from "./fabrictop";

const FabricItems=()=>{
        const buttonContainerRef = useRef(null);
        const [selectedFile, setSelectedFile] = useState(null);
    const [btnCount,setBtnCount]=useState('');
    const [show,setShow]=useState(false);

      useEffect(()=>{
        const buttonsInContainer = buttonContainerRef.current.querySelectorAll('button');
        setBtnCount(buttonsInContainer.length);
    console.log(`Number of buttons: ${btnCount}`);
  }, []);

  

  const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };

      const getFabricSvg=(path)=>{
        const frontImage=document.getElementById("front_svg");
        const backImage=document.getElementById("back_svg");
        frontImage.style.fill=`url("path")`;
        backImage.style.fill=`url("path")`;
        // console.log(path)
        
      }
      
    return(
        <>
        <div className="container-fulid" >
            <div className="row p-2" >
                <div className="col-lg-12">
                   <FabricTop />
                </div>
                <div id="defaultFabric">
                    <div className="col-lg-12" >
                            <p className="color_label">Total Items  
                            <span className="span_color">  {btnCount}</span></p>
                    </div>
                    <div className="col" ref={buttonContainerRef}>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://media.istockphoto.com/id/1250090516/vector/embroidery-seamless-ornament.jpg?s=612x612&w=0&k=20&c=_2ulRUWkCau37FQjne_OvoUPiKXk1gP-Do2zNc_D628=')}>
                                <div className="fabric1"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://img.freepik.com/premium-photo/embroidery-floral-seamless-pattern-embroidered-flowers-repeating-fabric-backdrop-3d-illustration_598586-2086.jpg')}>
                            <div className="fabric2"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://www.shutterstock.com/shutterstock/photos/2180120249/display_1500/stock-photo-ajrakh-pattern-and-block-print-pattern-and-batik-print-background-digital-printing-textile-pattern-2180120249.jpg')}>
                                <div className="fabric3"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://c8.alamy.com/comp/EX6YFD/textile-design-with-flower-motif-from-textile-arts-series-EX6YFD.jpg')}>
                                <div className="fabric4"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://cdn.dribbble.com/users/403631/screenshots/15098791/media/84fa50d4d153821c52b469f542b33e9b.jpg?resize=400x0')}>
                                <div className="fabric5"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://img.freepik.com/premium-vector/seamless-pattern-with-decorative-flowers_515421-690.jpg')}>
                                <div className="fabric6"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://i.pinimg.com/236x/1a/c2/ab/1ac2ab9ee0d984510a6cb4e9511b262f.jpg')}>
                                <div className="fabric7"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://i.pinimg.com/236x/d7/cb/5e/d7cb5ee47c618769bfda5fb2417bd52b--fabric-design-textile-design.jpg')}>
                                <div className="fabric8"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://www.fabricgateway.com/images/fabricgateway/b3/b36d720a79d15e70d020cdfebeb05b16.jpeg')}>
                                <div className="fabric9"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://www.fabricgateway.com/images/fabricgateway/s_e1/e15145b6d7201e2f0a740495739d7f36.jpeg')}>
                                <div className="fabric10"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://i.pinimg.com/236x/68/bf/2b/68bf2bebe19f5da1c630ba226b05a692--african-patterns-african-pattern-fabric.jpg')}>
                                <div className="fabric11"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://www.shutterstock.com/shutterstock/photos/2076941224/display_1500/stock-vector-seamless-pattern-in-patchwork-style-embroidered-print-for-carpet-textile-wallpaper-wrapping-2076941224.jpg')}>
                                <div className="fabric12"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://img.freepik.com/free-vector/floral-background-pattern_53876-80432.jpg')}>
                                <div className="fabric13"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS86OddBR7hpRYn2SJ__A4IrmNRmNR9lpIfW1qawoHyVZT6qbb9LJ-CN-2TiJIf_HLD2q0&usqp=CAU')}>
                                <div className="fabric14"></div>
                        </button>
                        <button className="fabric_button" 
                            onClick={()=>getFabricSvg('https://img.freepik.com/free-vector/vector-flower-seamless-pattern-element-elegant-texture-backgrounds-classical-luxury-old-fashioned-floral-ornament-seamless-texture-wallpapers-textile-wrapping_1217-2203.jpg')}>
                                <div className="fabric15"></div>
                        </button>
                    </div>
                </div>
                <div className="upload" id="uploadFabric">
                    <div className="col-lg-12 p-3">
                        <div className="fabricupload1"  style={{ backgroundImage: `url(${selectedFile && URL.createObjectURL(selectedFile)})` }}>
                        </div>
                        <div className="default_upload">
                           <input type="file" onChange={handleFileChange} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fulid" >
            <div className="row">
                
            </div>
            
    </div>
        </>
    )
}
export default FabricItems