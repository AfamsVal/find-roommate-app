// import moment from "moment";
import { Dispatch, SetStateAction, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
 

import "./TopNav.css";
import { useAppSelector } from "../../context/GlobalState";

interface TopNavProps {
  toggleNav: boolean;
  setToggleNav: Dispatch<SetStateAction<boolean>>;
}



const AdminTopNav = ({ toggleNav, setToggleNav }: TopNavProps) => {
  const [not, setNot] = useState(false);
  const {auth} = useAppSelector()
  const {firstName}:any = auth?.userDetails?.userInfo;
  // console.log(auth)
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
            <h4 className="gradient-text">Hi, {firstName}</h4>
          </div>
        </div>
        <div className="d-flex justfify-content-end align-items-center">
         

{/* notification */}


    <Dropdown>
     
      
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
<div className="drop-menu bg-white ">
      <Dropdown.Item href="#" className="bg-blue text-light">All Notification</Dropdown.Item>
              <Dropdown.Item href="#" className="border-bottom border-secondary py-1" >
               <div className=""> <strong>Support</strong></div>
                <div ><p>Hi {firstName}, Welcome to findroomy
                </p></div>
              </Dropdown.Item>
              {/* <Dropdown.Item href="#" className="border-bottom border-secondary py-1"  >
               <div> <strong>Google Drive</strong></div>
                <div>Lorem ipsum dolor sit amet harum.</div>
              </Dropdown.Item>
              
              <Dropdown.Item href="#"  className="border-bottom border-secondary py-1" >
               <div> <strong>Google Drive</strong></div>
                <div>Lorem ipsum dolor sit amet harum.</div>
              </Dropdown.Item> */}
              </div>
              : ""
              }


      <Dropdown.Menu className="py-0" >
       
        
              
            
      </Dropdown.Menu>

    </Dropdown>
  

          <i
            className={`px-1 font-size cursor-pointer ms-2 d-block d-lg-none ${toggleNav ? "fas fa-times": "fas fa-bars"}`}
            onClick={() => setToggleNav(!toggleNav)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default AdminTopNav;
