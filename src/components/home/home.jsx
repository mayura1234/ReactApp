import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Mic from '../Images/Mic.jpg';
import './home.css';
// import Header from'../layouts/header';
// import { Route } from 'react-router-dom';
import Sidebar from '../sidebar';


const home=props=> { 
  return (
    <Container>
      <Sidebar /> 
      <div className='container'>
            {/* <figure className='position-relative'> */}
           <img src={Mic} alt="centered-image" className='img-fluid' /> 
          {/* </figure> */}
          
          <h3>ABOUT CPGRAMS</h3>

Centralised Public Grievance Redress and Monitoring System (CPGRAMS) is an online platform available to the citizens 24x7 to lodge their grievances to the public authorities on any subject related to service delivery. It is a single portal connected to all the Ministries/Departments of Government of India and States. Every Ministry and States have role-based access to this system. CPGRAMS is also accessible to the citizens through standalone mobile application downloadable through Google Play store and mobile application integrated with UMANG.

The status of the grievance filed in CPGRAMS can be tracked with the unique registration ID provided at the time of registration of the complainant. CPGRAMS also provides appeal facility to the citizens if they are not satisfied with the resolution by the Grievance Officer. After closure of grievance if the complainant is not satisfied with the resolution, he/she can provide feedback. If the rating is ‘Poor’ the option to file an appeal is enabled. The status of the Appeal can also be tracked by the petitioner with the grievance registration number. 
<p>Note : If you have not got a satifactory redress of your grievance within a reasonable period of time,relating to Ministries/Departments and Organisations under the purview of Directorate of Public Grievances(DPG), Cabinet Secretariat, GOI, you may seek help of DPG in resolution. Please click here for details. </p>
    <br />
    </div>
     </Container>
  )
}

export default home
