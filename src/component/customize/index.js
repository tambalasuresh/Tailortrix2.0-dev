import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "./customize.css";

const Customize=({customizeData})=>{
    const [customizeFormdata,setCustomizeFromData]=useState(customizeData['customizations_form'])
    return(
            <div className="row customer">
                <div className="col-lg-12">
                         <h4 className="text-success">Customizaton From</h4>
                         <form>
                         <div className="row">
                                <div className="col-lg-6">
                                <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Text id="ArmHoleHeight" className="bg-dark text-white col-lg-8">Arm Hole Height</InputGroup.Text>
                                        <Form.Control
                                            aria-describedby="ArmHoleHeight"
                                            name="ArmHoleHeight"
                                            defaultValue={customizeFormdata.Arm_Hole_Height}
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
                                            name="ArmHoleRound"
                                            defaultValue={customizeFormdata.Arm_Hole_Round}
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
                                            name="BackNeckDWidth"
                                            defaultValue={customizeFormdata.Back_Neck_D_Width}
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
                                            name="FrontCupSize"
                                            defaultValue={customizeFormdata.Front_Cup_Size}
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
                                            name="NeckSeam"
                                            defaultValue={customizeFormdata.Neck_Seam}
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
                                            name="Size"
                                            defaultValue={customizeFormdata.size}
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
                                            name="FullShoulder"
                                            defaultValue={customizeFormdata.Full_Shoulder}
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
                                            name="HalfShoulder"
                                            defaultValue={customizeFormdata.Half_Shoulder}
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
                                            name="FrontDartWidth"
                                            defaultValue={customizeFormdata.Front_Dart_Width}
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
                                            name="FrontDartHeight"
                                            defaultValue={customizeFormdata.Front_Dart_Height}
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
                                            name="FrontHipDistance"
                                            defaultValue={customizeFormdata.Front_HIP_Distance}
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
                                            name="FrontHookSideHeight"
                                            defaultValue={customizeFormdata.Front_Hook_Side_Height}
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
                                            name="FrontNeckDWidth"
                                            defaultValue={customizeFormdata.Front_Neck_D_Width}
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
                                            name="FrontPattiSideHeight"
                                            defaultValue={customizeFormdata.Front_Patti_Side_Height}
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
    )
}
export default Customize