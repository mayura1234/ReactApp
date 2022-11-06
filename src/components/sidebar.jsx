import React from 'react';
import '../sidebar.css';
import { Link } from 'react-router-dom';
const sidebar = () => {
  return (
     <div className="sidebar">
        <li><i className="ri-user-fill"></i><Link className='nav-link' to='/profile'>Profile</Link></li>
        <li><i className="ri-settings-3-fill"></i><Link className='nav-link' to='/settings'>Settings</Link></li>
        <li><i className="ri-logout-box-line"></i>Logout</li>
     </div>
  )
}
export default sidebar
