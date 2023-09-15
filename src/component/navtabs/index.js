import Nav from 'react-bootstrap/Nav';
import BodyContaienr from '../bodyContainer';
import React, { useEffect, useState } from 'react';
import CustomerContainer from '../customerContainer';
import MeasurmentContainer from '../measurmentContainer';
import CustomizeContainer from '../customizeContainer';


const NavTabs=()=> {
  const [selectedTab, setSelectedTab] = useState('menu_tab');
  const [tabsEnabled, setTabsEnabled] = useState(false);
  const [initialTab, setInitialTab] = useState(false);
  const [customizeData,setCustomizeData]=useState({});
  

  const handleMenuTabClick = (selectedTab) => {
    setSelectedTab(selectedTab);
  };

  
  const getActiveTab=()=>{
    setInitialTab(initialTab);
  }

  const updateTabName=(value)=>{
    setSelectedTab(value);
    
  }

  const getCustomize=(customizeData)=>{
    setCustomizeData(customizeData);
  }

  


  return (
    <div>
      <div style={{"height":"10%"}}>
        <Nav fill variant="tabs" defaultActiveKey={selectedTab} bg="dark" data-bs-theme="dark" >
          <Nav.Item>
            <Nav.Link eventKey='menu_tab'  onClick={() => handleMenuTabClick('menu_tab')}>MENU</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="customerDetails_tab" id='customerDetails_tab' onClick={() => handleMenuTabClick('customerDetails_tab')}
             disabled={getActiveTab}>CUSTOMER DETAILS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="measurments_tab" onClick={() => handleMenuTabClick('measurments_tab')}
           disabled={getActiveTab}>MEASURMENTS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="customization_tab" onClick={() => handleMenuTabClick('customization_tab')}
             disabled={getActiveTab}>CUSTOMIZATION</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div style={{"height":"100%"}}>
        {/*  */}
        {/* <button onClick={enableTabs}>Enable Tabs</button> */}
        {selectedTab === 'menu_tab' && <BodyContaienr getActiveTab={getActiveTab} updateTabName={updateTabName} 
        />}
        {selectedTab === 'customerDetails_tab' && <CustomerContainer updateTabName={updateTabName}/>}
        {selectedTab === 'measurments_tab' && <MeasurmentContainer  updateTabName={updateTabName} getCustomize={getCustomize}/>}
        {selectedTab === 'customization_tab' && <CustomizeContainer customizeData={customizeData}/>}
      </div>
    </div>

    
  );
}

export default NavTabs;