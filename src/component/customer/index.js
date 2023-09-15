import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import "./customer.css";

  const Customer = ({updateTabName}) => {
  const [formData, setFormData] = useState({
    Id: "",
    Name: "",
    Email: "",
    Number: "",
    NoOfItems: "",
  });

  const isFormValid = () => {
    return (
      formData.Id !== "" &&
      formData.Name !== "" &&
      formData.Email !== "" &&
      formData.Number !== "" &&
      formData.NoOfItems !== ""
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getCustomerData=(e)=>{
    e.preventDefault();
    updateTabName("measurments_tab");
    localStorage.setItem("CustomerData",JSON.stringify(formData));
    
  }

  return (
    <div className="row customer">
      <div className="col-lg-12">
        <h4 className="text-dark">Customer Details</h4>
        <form onSubmit={getCustomerData}>
          <div className="row">
              <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1" className="bg-dark text-white col-lg-5">ID *</InputGroup.Text>
                  <Form.Control
                    placeholder="Enter Your ID"
                    aria-label="Enter Your ID"
                    aria-describedby="basic-addon1"
                    // value={formData.Id}
                    onChange={handleChange}
                    name="Id"
                  />
            </InputGroup>
            <InputGroup className="mb-3">
                  <InputGroup.Text id="Name" className="bg-dark text-white col-lg-5">Name *</InputGroup.Text>
                    <Form.Control
                      placeholder="Enter Your Name"
                      aria-label="Enter Your Name"
                      aria-describedby="Name"
                      name="Name"
                      // value={formData.Name}
                      onChange={handleChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                <InputGroup.Text id="Email" className="bg-dark text-white col-lg-5">Email *</InputGroup.Text>
                    <Form.Control
                      placeholder="Enter Your Email"
                      aria-label="Enter Your Email"
                      aria-describedby="Email"
                      // value={formData.Email}
                      onChange={handleChange}
                      name="Email"
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                <InputGroup.Text id="Number" className="bg-dark text-white col-lg-5">Number *</InputGroup.Text>
                    <Form.Control
                      placeholder="Enter Your Number"
                      aria-label="Enter Your Number"
                      aria-describedby="Number"
                      name="Number"
                      // value={formData.Number}
                      onChange={handleChange}
                    />
                </InputGroup>

                <InputGroup className="mb-3">
                <InputGroup.Text id="NoOfItems" className="bg-dark text-white col-lg-5">Number Of Items *</InputGroup.Text>
                    <Form.Control
                      placeholder="Enter Your Order Items"
                      aria-label="Enter Your Order Items"
                      aria-describedby="NoOfItems"
                      name="NoOfItems"
                      // value={formData.Number}
                      onChange={handleChange}
                    />  
                </InputGroup>
            <div className="row">
                 <button className="btn btn-outline-success mx-2"  type="submit" disabled={!isFormValid()}>Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Customer;
