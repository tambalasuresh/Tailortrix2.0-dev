import React, { useEffect, useState } from "react";
import Customize from "../customize";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
const CustomizeContainer=({customizeData})=>{
    const [pattrenSvgContent,setPattenSvgContent]=useState(null);
    const [localCustomizeData,setlocalCustomizeData]=useState(customizeData.customizations_form);

        

    const getPattren=(event)=>{
        event.preventDefault();
        const customizations_form ={}
        
        for (let element = 0; element < event.target.length; element++) {
            customizations_form[event.target[element].name]=parseFloat(event.target[element].value)
        }

        const payload = {
            "measurement":customizeData.measurement,
            "customizations_form":customizations_form

        }
        // console.log(customizations_form)

        axios.post("http://127.0.0.1:8000/rest/api/get_pattern/",payload)
            .then(res=>{
                setlocalCustomizeData(res.data.customizations_form);
                setPattenSvgContent(res.data.url);
                console.log('localCustomizeData',localCustomizeData)

                for (let element = 0; element < event.target.length; element++) {
                    event.target[element].value=res.data.customizations_form[event.target[element].name]
                }

            })
            .catch(err=>{
                console.log("measurments error ",err);
            })
        
                    

    }


    useEffect(()=>{
        setPattenSvgContent(customizeData.url);

    },[customizeData]);

    

    const svgWithBack = pattrenSvgContent ? pattrenSvgContent.replace('<svg', '<svg class="" fill="white" id="back_svg" preserveAspectRatio="xMinYMin meet"') : null;

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-4">
                    <div className="row customer">
                        <div className="col-lg-12">
                                <h4 className="text-success">Customizaton From</h4>
                                <form onSubmit={getPattren}>
                                    <div className="row">
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="ArmHoleHeight" className="bg-dark text-white col-lg-8">Arm Hole Height</InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="ArmHoleHeight"
                                                    name="Arm_Hole_Height"
                                                    defaultValue={localCustomizeData.Arm_Hole_Height}
                                                    // value={localCustomizeData.Arm_Hole_Height}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="ArmHoleRound" className="bg-dark col-lg-8 text-white">
                                                Arm Hole Round
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="ArmHoleRound"
                                                    name="Arm_Hole_Round"
                                                    defaultValue={localCustomizeData.Arm_Hole_Round}
                                                    // value={localCustomizeData.Arm_Hole_Round}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="BackNeckDWidth" className="bg-dark col-lg-8 text-white">
                                                Back Neck DWidth
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="BackNeckDWidth"
                                                    name="Back_Neck_D_Width"
                                                    defaultValue={localCustomizeData.Back_Neck_D_Width}
                                                    // value={localCustomizeData.Back_Neck_D_Width}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="FrontCupSize" className="bg-dark col-lg-8 text-white">
                                                Front Cup Size
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="FrontCupSize"
                                                    name="Front_Cup_Size"
                                                    defaultValue={localCustomizeData.Front_Cup_Size}
                                                    // value={localCustomizeData.Front_Cup_Size}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="NeckSeam" className="bg-dark col-lg-8 text-white">
                                                Neck Seam
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="NeckSeam"
                                                    name="Neck_Seam"
                                                    defaultValue={localCustomizeData.Neck_Seam}
                                                    // value={localCustomizeData.Neck_Seam}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="Size" className="bg-dark col-lg-8 text-white">
                                                Size
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="Size"
                                                    name="size"
                                                    defaultValue={localCustomizeData.size}
                                                    // value={localCustomizeData.size}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="FullShoulder" className="bg-dark col-lg-8 text-white">
                                                Full Shoulder
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="FullShoulder"
                                                    name="Full_Shoulder"
                                                    defaultValue={localCustomizeData.Full_Shoulder}
                                                    // value={localCustomizeData.Full_Shoulder}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="HalfShoulder" className="bg-dark col-lg-8 text-white">
                                                Half Shoulder
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="HalfShoulder"
                                                    name="Half_Shoulder"
                                                    defaultValue={localCustomizeData.Half_Shoulder}
                                                    // value={localCustomizeData.Half_Shoulder}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="FrontDartWidth" className="bg-dark col-lg-8 text-white">
                                                Front Dart Width
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="FrontDartWidth"
                                                    name="Front_Dart_Width"
                                                    defaultValue={localCustomizeData.Front_Dart_Width}
                                                    // value={localCustomizeData.Front_Dart_Width}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="FrontDartHeight" className="bg-dark col-lg-8 text-white">
                                                Front Dart Height
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="FrontDartHeight"
                                                    name="Front_Dart_Height"
                                                    defaultValue={localCustomizeData.Front_Dart_Height}
                                                    // value={localCustomizeData.Front_Dart_Height}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm"> 
                                                <InputGroup.Text id="FrontHipDistance" className="bg-dark col-lg-9 text-white">
                                                Front Hip Distance
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="FrontHipDistance"
                                                    name="Front_HIP_Distance"
                                                    defaultValue={localCustomizeData.Front_HIP_Distance}
                                                    // value={localCustomizeData.Front_HIP_Distance}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6" >
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="FrontHookSideHeight" className="bg-dark col-lg-9 text-white">
                                                Front Hook SideHeight
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="FrontHookSideHeight"
                                                    name="Front_Hook_Side_Height"
                                                    defaultValue={localCustomizeData.Front_Hook_Side_Height}
                                                    // value={localCustomizeData.Front_Hook_Side_Height}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="FrontNeckDWidth" className="bg-dark col-lg-9 text-white">
                                                Front Neck D Width
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="FrontNeckDWidth"
                                                    name="Front_Neck_D_Width"
                                                    defaultValue={localCustomizeData.Front_Neck_D_Width}
                                                    // value={localCustomizeData.Front_Neck_D_Width}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="FrontPattiSideHeight" className="bg-dark col-lg-9 text-white">
                                                Front Patti Side Height
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="FrontPattiSideHeight"
                                                    name="Front_Patti_Side_Height"
                                                    defaultValue={localCustomizeData.Front_Patti_Side_Height}
                                                    // value={localCustomizeData.Front_Patti_Side_Height}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>

                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="Side_Sem" className="bg-dark col-lg-9 text-white">
                                                Side_Sem
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="Side_Sem"
                                                    name="Side_Sem"
                                                    defaultValue={localCustomizeData.Side_Sem}
                                                    // value={localCustomizeData.Side_Sem}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>

                                        <div className="col-lg-6">
                                        <InputGroup className="mb-3" size="sm">
                                                <InputGroup.Text id="Patti_Hook_Side_Height" className="bg-dark col-lg-9 text-white">
                                                Patti_Hook_Side_Height
                                                </InputGroup.Text>
                                                <Form.Control
                                                    aria-describedby="Patti_Hook_Side_Height"
                                                    name="Patti_Hook_Side_Height"
                                                    defaultValue={localCustomizeData.Patti_Hook_Side_Height}
                                                    // value={localCustomizeData.Patti_Hook_Side_Height}
                                                    onChange={(e) => e.target.value}
                                                    type="float"
                                                />
                                        </InputGroup>
                                        </div>
                                        <div className="row">
                                            
                                                <button className="btn btn-outline-success mx-2">Update</button>
                                            
                                        </div>
                                    </div>
                                </form>
                                
                                
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <h3 className="text-danger">Pattren View</h3>

                        <Figure>
                            <Figure.Image
                                width="100%"
                                // height="100%"
                                alt="171x180"
                                src={`data:image/svg+xml,${encodeURIComponent(pattrenSvgContent)}`}
                            />
                        </Figure>
                        
                </div>
            </div>
        </div>
    )
}
export default CustomizeContainer