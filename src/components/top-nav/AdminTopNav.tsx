// import moment from "moment";
import { Dispatch, SetStateAction, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';

import "./TopNav.css";

interface TopNavProps {
  toggleNav: boolean;
  setToggleNav: Dispatch<SetStateAction<boolean>>;
}



const AdminTopNav = ({ toggleNav, setToggleNav }: TopNavProps) => {
  const [not, setNot] = useState(false);
const show =()=>{
  if (!not) {
      
      setNot(true);
    } else {
      
      setNot(false);
    }}
  return (
    <div id="top-nav" className="d-flex bg-white py-2">
      <div className="top-nav-content align-self-end w-100 bg-white d-flex justify-content-between">
        <div className="d-flex">
          <div className="ms-3">
            <h4 className="gradient-text">Hi, Afams</h4>
          </div>
        </div>
        <div className="d-flex justfify-content-end align-items-center">
         

{/* notification */}


    <Dropdown>
       
      {/* <Dropdown.Toggle variant="primary" className="d-flex pt-2">
        <i className="fas fa-bell text-white text-center"></i>
         <div className="number"> 
          <span className="not-text">5</span>
          </div>
      </Dropdown.Toggle> */}
      
        <div
            id="notification-icon"
            className="d-flex justify-content-center sticky-top align-items-center cursor-pointer"
            onClick={show}
            
          >
            <i className="fas fa-bell text-white text-center"></i>
            <div className="number"> 
          <span className="not-text">3</span>
          </div>
          </div>
    {not ?
<div className="drop-menu bg-white">
      <Dropdown.Item href="#" className="bg-primary text-light">All Notification</Dropdown.Item>
              <Dropdown.Item href="#" className="border-bottom border-secondary py-1" >
               <div className=""> <strong>Room Avaliablibility</strong></div>
                <div >Lorem ipsum dolor sit amet harum.</div>
              </Dropdown.Item>
              <Dropdown.Item href="#" className="border-bottom border-secondary py-1"  >
               <div> <strong>Google Drive</strong></div>
                <div>Lorem ipsum dolor sit amet harum.</div>
              </Dropdown.Item>
              
              <Dropdown.Item href="#"  className="border-bottom border-secondary py-1" >
               <div> <strong>Google Drive</strong></div>
                <div>Lorem ipsum dolor sit amet harum.</div>
              </Dropdown.Item>
              </div>
              : ""
              }
{/* {not && ( */}

      <Dropdown.Menu className="py-0" >
       
        
              
            
      </Dropdown.Menu>
{/* //       ) */}
{/* // } */}
    </Dropdown>
  

          <i
            className="fas fa-bars cursor-pointer ms-2 d-block d-lg-none"
            onClick={() => setToggleNav(!toggleNav)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default AdminTopNav;
