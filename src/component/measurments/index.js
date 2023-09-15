import React, { useEffect, useState } from "react";
import axios from "axios";
import "./measurments.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import $ from "jquery"


const Measurment=({updateTabName,getCustomize})=>{
    const [customizeData,setCustomizeData]=useState({});
    const [measurmentButtonActive, setMeasurmentButtonActive] = useState(false); 
    const [localMeasurementData,setLocalMeasurmentData]=useState({
        length: '',
         UperChest:'',
          CenterChest: '',
          ShoulderFinishing: '',
          SleeveLenght: '',
          SleeveRound:'',
          MiddleHandRound:'',
          FrontNeckHeight: '',
          BackNeckHeight: '',
          WaistLoose: '',
          FrontDartPoint: '',
          Full_Shoulder: '',
    });

    useEffect(() => {
        const localStorageMeasuemnt=localStorage.getItem("MeasurmentData");
        if(localStorageMeasuemnt){
            setLocalMeasurmentData(JSON.parse(localStorageMeasuemnt));
        }
      const checkInputValues = () => {
        const inputValues = {
          length: parseFloat($("input[name='length']").val()),
          UpperChest: parseFloat($("input[name='UpperChest']").val()),
          CenterChest: parseFloat($("input[name='CenterChest']").val()),
          ShoulderFinishing: parseFloat($("input[name='ShoulderFinishing']").val()),
          SleeveLength: parseFloat($("input[name='SleeveLength']").val()),
          SleeveRound: parseFloat($("input[name='SleeveRound']").val()),
          MiddleHandRound: parseFloat($("input[name='MiddleHandRound']").val()),
          FrontNeckHeight: parseFloat($("input[name='FrontNeckHeight']").val()),
          BackNeckHeight: parseFloat($("input[name='BackNeckHeight']").val()),
          WaistLoose: parseFloat($("input[name='WaistLoose']").val()),
          FrontDartPoint: parseFloat($("input[name='FrontDartPoint']").val()),
          Full_Shoulder: parseFloat($("input[name='Full_Shoulder']").val()),
        };
        const isButtonActive = Object.values(inputValues).every(value => !isNaN(value) && value > 0);
        setMeasurmentButtonActive(isButtonActive);
      };
      $("input[name]").on("input", checkInputValues);
      checkInputValues();
      return () => {
        $("input[name]").off("input", checkInputValues);
      };
    }, []);


    const armholeround=(event)=>{
        const data={
            "CenterChest": parseFloat($("input[name='CenterChest']").val()),
            "BackNeckHeight": parseFloat($("input[name='BackNeckHeight']").val()),
            "Full_Shoulder": parseFloat(event.target.value),
            "Blouse_id": 2
        }
        axios.post("http://api.tailortrix.com/rest/api/get_blouse_armhole_round/",data)
        .then(res=>{
             console.log("value",res.data);
            $("input[name='ArmHoleRound']").val(res.data["result"]);          
        })
        .catch(err=>{
            console.log("armhole Round",err)
        })
    }
    const getPattrenPage=(event)=>{
        event.preventDefault();
        alert("You Are Going Pattren Page");
       
        const MeasurmentInputData={
            "length":parseFloat($("input[name='length']").val()),
            "UperChest":parseFloat($("input[name='UpperChest']").val()),
            "CenterChest": parseFloat($("input[name='CenterChest']").val()),
            "ShoulderFinishing": parseFloat($("input[name='ShoulderFinishing']").val()),
            "SleeveLenght": parseFloat($("input[name='SleeveLength']").val()),
            "SleeveRound": parseFloat($("input[name='SleeveRound']").val()),
            "MiddleHandRound": parseFloat($("input[name='MiddleHandRound']").val()),
            "FrontNeckHeight": parseFloat($("input[name='FrontNeckHeight']").val()),
            "BackNeckHeight": parseFloat($("input[name='BackNeckHeight']").val()),
            "WaistLoose": parseFloat($("input[name='WaistLoose']").val()),
            "FrontDartPoint": parseFloat($("input[name='FrontDartPoint']").val()),
            "Full_Shoulder": parseFloat($("input[name='Full_Shoulder']").val()),
            "Arm_Hole_Round": parseFloat($("input[name='ArmHoleRound']").val()),
        }

        // this is post the api data
       const measurmentData={
        "measurement":{
            "blouse_id":2,
            "sleeve_id": 5,
            "patche_id": 5,
            "backdrop_id": 5,
            "frontneck_id": 5,
            "backneck_id": 5,
            "length":parseFloat($("input[name='length']").val()),
            "UperChest":parseFloat($("input[name='UpperChest']").val()),
            "CenterChest": parseFloat($("input[name='CenterChest']").val()),
            "ShoulderFinishing": parseFloat($("input[name='ShoulderFinishing']").val()),
            "SleeveLenght": parseFloat($("input[name='SleeveLength']").val()),
            "SleeveRound": parseFloat($("input[name='SleeveRound']").val()),
            "MiddleHandRound": parseFloat($("input[name='MiddleHandRound']").val()),
            "FrontNeckHeight": parseFloat($("input[name='FrontNeckHeight']").val()),
            "BackNeckHeight": parseFloat($("input[name='BackNeckHeight']").val()),
            "WaistLoose": parseFloat($("input[name='WaistLoose']").val()),
            "FrontDartPoint": parseFloat($("input[name='FrontDartPoint']").val()),
            "Full_Shoulder": parseFloat($("input[name='Full_Shoulder']").val()),
            "Arm_Hole_Round": parseFloat($("input[name='ArmHoleRound']").val()),
            }
    }

    axios.post("http://api.tailortrix.com/rest/api/get_pattern/",measurmentData)
    .then(res=>{
        setCustomizeData(res.data);
        getCustomize(res.data);
        updateTabName('customization_tab');
    })
    .catch(err=>{
        console.log("measurments error ",err);
    })
        localStorage.setItem("MeasurmentData",JSON.stringify(MeasurmentInputData));
    }
    
    return(
            <div className="row customer">
                <div className="col-lg-12">
                         <h4 className="text-dark">Measurment  Details</h4>
                         <form onSubmit={getPattrenPage}>
                         <div className="row">
                                <div className="col-lg-6">
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="Length" className="bg-dark text-white col-lg-9">Length</InputGroup.Text>
                                        <Form.Control
                                            aria-describedby="Length"
                                            name="length"
                                            defaultValue="14"
                                            type="float"
                                        />
                                   </InputGroup>
                                </div>
                                <div className="col-lg-6">
                                   <InputGroup className="mb-3">
                                        <InputGroup.Text id="UpperChest" className="bg-dark text-white col-lg-9">Upper Chest</InputGroup.Text>
                                        <Form.Control
                                            aria-describedby="UpperChest"
                                            name="UpperChest"
                                            defaultValue="32"
                                            type="float"
                                        />
                                   </InputGroup>
                                </div>
                                <div className="col-lg-6">
                                    <InputGroup className="mb-3">
                                            <InputGroup.Text id="CenterChest" className="bg-dark text-white col-lg-9">Center Chest</InputGroup.Text>
                                            <Form.Control
                                                type="float"
                                                aria-describedby="CenterChest"
                                                name="CenterChest"
                                                defaultValue="32"
                                            />
                                    </InputGroup>
                                </div>
                                <div className="col-lg-6">
                                <InputGroup className="mb-3">
                                            <InputGroup.Text id="ShoulderFinishing" className="bg-dark text-white col-lg-9">Shoulder Finishing</InputGroup.Text>
                                            <Form.Control
                                                type="float"
                                                aria-describedby="ShoulderFinishing"
                                                name="ShoulderFinishing"
                                                defaultValue="2.5"
                                            />
                                    </InputGroup>
                                </div>
                                <div className="col-lg-6">
                                <InputGroup className="mb-3">
                                            <InputGroup.Text id="SleeveLength" className="bg-dark text-white col-lg-9">
                                            Sleeve Length</InputGroup.Text>
                                            <Form.Control
                                                type="float"
                                                aria-describedby="SleeveLength"
                                                name="SleeveLength"
                                                defaultValue="10"
                                            />
                                    </InputGroup>
                                </div>
                                <div className="col-lg-6">
                                <InputGroup className="mb-3">
                                            <InputGroup.Text id="SleeveRound" className="bg-dark text-white col-lg-9">
                                            Sleeve Round</InputGroup.Text>
                                            <Form.Control
                                                type="float"
                                                aria-describedby="SleeveRound"
                                                name="SleeveRound"
                                                defaultValue="10"
                                            />
                                    </InputGroup>
                                </div>
                                <div className="col-lg-6">
                                <InputGroup className="mb-3">
                                            <InputGroup.Text id="MiddleHandRound" className="bg-dark text-white col-lg-9">
                                            MiddleHandRound</InputGroup.Text>
                                            <Form.Control
                                                type="float"
                                                aria-describedby="MiddleHandRound"
                                                name="MiddleHandRound"
                                                defaultValue="10"
                                            />
                                    </InputGroup>
                                </div>
                                <div className="col-lg-6">
                                <InputGroup className="mb-3">
                                            <InputGroup.Text id="FrontNeckHeight" className="bg-dark text-white col-lg-9">
                                            Front Neck Height</InputGroup.Text>
                                            <Form.Control
                                                type="float"
                                                aria-describedby="FrontNeckHeight"
                                                name="FrontNeckHeight"
                                                defaultValue="7"
                                            />
                                    </InputGroup>
                                    
                                </div>
                                <div className="col-lg-6">
                                <InputGroup className="mb-3">
                                            <InputGroup.Text id="BackNeckHeight" className="bg-dark text-white col-lg-9">
                                            Back Neck Height</InputGroup.Text>
                                            <Form.Control
                                                type="float"
                                                aria-describedby="BackNeckHeight"
                                                name="BackNeckHeight"
                                                defaultValue="8"
                                            />
                                    </InputGroup>
                                </div>
                                <div className="col-lg-6">
                                <InputGroup className="mb-3">
                                            <InputGroup.Text id="WaistLoose" className="bg-dark text-white col-lg-9">
                                            Weiast Loose</InputGroup.Text>
                                            <Form.Control
                                                type="float"
                                                aria-describedby="WaistLoose"
                                                name="WaistLoose"
                                                defaultValue="32"
                                            />
                                    </InputGroup>
                                </div>
                                <div className="col-lg-6">
                                <InputGroup className="mb-3">
                                            <InputGroup.Text id="FrontDartPoint" className="bg-dark text-white col-lg-9">
                                            Front Dart Point</InputGroup.Text>
                                            <Form.Control
                                                type="float"
                                                aria-describedby="FrontDartPoint"
                                                name="FrontDartPoint"
                                                defaultValue="9.5"
                                            />
                                    </InputGroup>
                                </div>
                                <div className="col-lg-6">
                                <InputGroup className="mb-3">
                                            <InputGroup.Text id="Full_Shoulder" className="bg-dark text-white col-lg-9">
                                            Full Shoulder</InputGroup.Text>
                                            <Form.Control
                                                type="float"
                                                aria-describedby="Full_Shoulder"
                                                name="Full_Shoulder"
                                                onBlur={armholeround}
                                            />
                                    </InputGroup>
                                </div>
                                <div className="col-lg-6">
                                <InputGroup className="mb-3">
                                            <InputGroup.Text id="ArmHoleRound" className="bg-dark text-white col-lg-9">
                                            ArmHoleRound</InputGroup.Text>
                                            <Form.Control
                                                type="float"
                                                aria-describedby="ArmHoleRound"
                                                name="ArmHoleRound"
                                                disabled
                                            />
                                    </InputGroup>
                                </div>
                                <div className="col-lg-6 ">
                                    <button className="btn btn-success mx-2" type="submit">Get Pattren</button>
                                </div>
                            </div>
                         </form>
                         
                </div>

            </div>
    )
}
export default Measurment